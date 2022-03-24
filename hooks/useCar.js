import { useState,useEffect } from "react";
import axios from "axios";

export default function useCar(carId){
    const [cars,setCars]=useState([]);
    const [car,setCar]=useState({});
    useEffect(() => {
        const getCar=async ()=>{
            const requestUrl=`https://autos-servidor.herokuapp.com/api/cars?populate=*`
            const response=await axios.get(requestUrl);
            const carData= response.data.data;
            console.log(carData);
            setCars(carData);
        }
        getCar();
    }, []);
    const Car=(props)=>{
            return (
                <div className="col-6">
                    {cars.filter(car => car.id == props.carId).map(car => (
                    <div className="row d-flex justify-content-center">
                        <h3 className="text-center">{car.attributes.name}</h3>
                        <img className="ml-5 col-10" src={car.attributes.default_image.data.attributes.url}/>
                    </div>
                    ))
                    }
                </div>
            ) 
    }
    return {Car}
}