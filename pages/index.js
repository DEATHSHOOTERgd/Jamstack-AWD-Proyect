import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Header from './shared/header'
import useCarTypes from '../hooks/useCarTypes'
import CustomizationForm from './components/forms/custom-car-form/customizationForm'

export default function Home() {
  const [carTypes,setCarTypes]=useState([]);
  const {CarTypes}= useCarTypes(carTypes);
    useEffect(()=>{
    const getCarTypes= async ()=>{
      const response=await axios.get(`https://autos-servidor.herokuapp.com/api/car-types?populate=*`);
      setCarTypes(response.data.data);
    }
    getCarTypes();
    },[]);
  return (
    <div>
      <Header></Header>
      <CarTypes></CarTypes>
    </div>
  )
}
