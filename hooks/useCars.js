import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link';


export default function useCars(){
    const [cars,setCars]=useState([]);
    useEffect(()=>{
    const getCars= async ()=>{
      const response=await axios.get(`https://autos-servidor.herokuapp.com/api/cars?populate=*`);
      const cars= response.data.data;
      setCars(cars);
    }
    getCars();
    },[]);
    const Cars=(props)=>(
            <div className='col-9'>
              <div className='row'>
               { cars.filter(car => car.attributes.car_type.data.id === props.carTypeId).map(car => (
                <div className='col-3 car-container '>
                  <Link href={`/customization?car=${car.id}`}>
                    <a>
                      <span className='car-name'>{car.attributes.name}</span>
                      <img className='car-image' src={car.attributes.default_image.data.attributes.url}/>
                    </a>
                  </Link>
                </div>    
               ))}
               </div>
            </div>
    )
    return {
        Cars
    }
} 