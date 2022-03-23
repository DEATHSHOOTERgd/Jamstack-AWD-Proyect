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
                <div className="col-6 justify-content-center ">
                    {cars.filter(car => car.id == props.carId).map(car => (
                    <img className="ml-5" src={car.attributes.default_image.data.attributes.url}/>
                    ))
                    }
                </div>
            ) 
    }
    return {Car}
}