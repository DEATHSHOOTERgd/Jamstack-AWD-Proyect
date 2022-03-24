import { useState,useEffect } from "react";
import axios from "axios";
import useCarEngines from "./useCarEngines";

export default function useCarPower(){
    const [carPower,setCarPower]=useState([]);
    const [carEngines,setCarEngines]=useCarEngines();
    useEffect(()=>{
    const getCarFeatures=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/features?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const features= response.data.data;
      setCarPower(features);
    }
    getCarFeatures()
    },[]);
    return {carPower}
}