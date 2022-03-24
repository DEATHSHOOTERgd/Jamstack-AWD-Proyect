import { useState,useEffect } from "react";
import axios from "axios";

export default function useCarEngines(){
    const [carEngines,setCarEngines]=useState([]);
    useEffect(()=>{
    const getCarEngines=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/engines?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const engines= response.data.data;
      setCarEngines(engines);
    }
    getCarEngines();
    },[]);
    const handleChange=(event)=> {
      document.getElementsByName('engine').forEach((check)=>{
        check.checked=false;
      })
      let check=event.target;
      if(!check.checked){
        check.checked=true;
      }
    }
    const CarEngines=(props)=>(
      <div className="row mt-3">
        <h3>Motor</h3>
        {carEngines.filter(engine => engine.attributes.car.data.id == props.carId).map(engine => (
          <div className="card col-5 m-1">
            <img className="mt-3" src={engine.attributes.image.data.attributes.url}/>
            <div className="card-body">
              <h4 class="card-title">{engine.attributes.volume+' L'}</h4>
              <ul>
                {engine.attributes.engine_features.data.map(feature=>(<li className="power-feature">{feature.attributes.description}</li>))}
              </ul>
            </div>
            <div className="mb-3">
              <input className="form-check-input me-2" value={engine.id} checked={engine.id==props.formData.engine}  type="checkbox" name='engine' onChange={({target:{checked}})=>{props.setFormData({...props.formData,engine:engine.id})}} onClick={handleChange}></input>
              <label>{engine.id==props.formData.engine?'Seleccionado':'Agregar'}</label>
            </div>
          </div>
        ))}
      </div>
    )
    return {CarEngines}
}