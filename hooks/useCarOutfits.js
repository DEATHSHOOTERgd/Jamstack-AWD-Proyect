import { useState,useEffect } from "react";
import axios from "axios";

export default function useCarOutfits(){
    const [carOutfits,setCarOutfits]=useState([]);
    useEffect(()=>{
    const getOutfits=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/car-colors?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const outfits= response.data.data;
      setCarOutfits(outfits);
    }
    getOutfits();
    },[]);
    const handleChange=(event)=> {
      document.getElementsByName('outfit').forEach((check)=>{
        check.checked=false;
      })
      let check=event.target;
      if(!check.checked){
        check.checked=true;
      }
    }
    const CarOutfits=(props)=>(
      <div className="row mt-3">
        <h3>Colores</h3>
        {carOutfits.filter(outfit => outfit.attributes.car.data.id == props.carId).map(outfit => (
          <div className="card col-5 m-1">
            <div className="card-body">
              <h4 class="card-title">{outfit.attributes.color}</h4>
              <img className="mt-3 car-outfit" src={outfit.attributes.image.data.attributes.url}/>
            </div>
            <div className="mb-3">
              <input className="form-check-input me-2" value={outfit.id} checked={outfit.id==props.formData.car_color}  type="checkbox" name='outfit' onChange={({target:{checked}})=>{props.setFormData({...props.formData,car_color:outfit.id})}} onClick={handleChange}></input>
              <label>{outfit.id==props.formData.car_color?'Seleccionado':'Agregar'}</label>
            </div>
          </div>
        ))}
      </div>
    )
    return {CarOutfits}
}