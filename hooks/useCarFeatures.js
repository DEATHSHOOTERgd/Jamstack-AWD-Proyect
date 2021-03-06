import { useState,useEffect } from "react";
import axios from "axios";

export default function useCarFeatures(){
    const [carFeatures,setCarFeatures]=useState([]);
    useEffect(()=>{
    const getCarFeatures=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/features?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const features= response.data.data;
      setCarFeatures(features);
    }
    getCarFeatures()
    },[]);
    const CarFeatures=(props)=>(
        <ul>
            { 
            	carFeatures.filter(feature => feature.attributes.car.data.id == props.carId).map(feature => (
                <li>{feature.attributes.description}</li> 
               ))}
        </ul>
    )
    return {CarFeatures}
}