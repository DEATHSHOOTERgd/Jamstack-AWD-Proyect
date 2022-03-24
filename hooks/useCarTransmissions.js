import { useState,useEffect } from "react";
import axios from "axios";

export default function useCartransmissions(){
    const [carTransmissions,setCarTransmissions]=useState([]);
    useEffect(()=>{
    const getCarTransmissions=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/transmissions?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const transmissions= response.data.data;
      setCarTransmissions(transmissions);
    }
    getCarTransmissions()
    },[]);
    const handleChange=(event)=> {
      document.getElementsByName('transmission').forEach((check)=>{
        check.checked=false;
      })
      let check=event.target;
      if(!check.checked){
        check.checked=true;
      }
    }
    const CarTransmissions=(props)=>(
      <div className="row mt-3">
        <h3>Transmisión</h3>
        {carTransmissions.filter(transmission => transmission.attributes.car.data.id == props.carId).map(transmission => (
          <div className="card col-5 m-1">
            <img className="mt-3" src={transmission.attributes.image.data.attributes.url}/>
            <div className="card-body">
              <h4 class="card-title">{transmission.attributes.type}</h4>
              <ul>
                <li className="power-feature">{transmission.attributes.description}</li>
              </ul>
            </div>
            <div className="mb-3">
              <input className="form-check-input me-2" value={transmission.id} checked={transmission.id==props.formData.transmission}  type="checkbox" name='transmision' onChange={({target:{checked}})=>{props.setFormData({...props.formData,transmission:transmission.id})}} onClick={handleChange}></input>
              <label>{transmission.id==props.formData.transmission?'Seleccionado':'Agregar'}</label>
            </div>
          </div>
        ))}
      </div>
    )
    return {CarTransmissions}
}