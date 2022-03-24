import { useState,useEffect } from "react";
import axios from "axios";

export default function useCarPacks(){
    const [carPacks,setCarPacks]=useState([]);
    useEffect(()=>{
    const getCarPacks=async ()=>{
      const requestUrl=`https://autos-servidor.herokuapp.com/api/packs?populate=*&pagination[start]=0&pagination[limit]=1000`
      const response=await axios.get(requestUrl);
      const packs= response.data.data;
      console.log(packs);
      setCarPacks(packs);
    }
    getCarPacks();
    },[]);
    const handleChange=(event)=> {
      document.getElementsByName('pack').forEach((check)=>{
        check.checked=false;
      })
      let check=event.target;
      if(!check.checked){
        check.checked=true;
      }
    }
    const CarPacks=(props)=>(
      <div className="row mt-3">
        {carPacks.filter(pack => pack.attributes.car.data.id == props.carId).map(pack => (
          <div className="card col-5 m-1">
            <div className="card-body">
              <h4 class="card-title">{pack.attributes.name}</h4>
              <ul>
                {pack.attributes.pack_items.data.map(item=>(<li className="power-feature">{item.attributes.description}</li>))}
              </ul>
            </div>
            <div className="mb-3">
              <input className="form-check-input me-2" value={pack.id} checked={pack.id==props.formData.pack}  type="checkbox" name='pack' onChange={({target:{checked}})=>{props.setFormData({...props.formData,pack:pack.id})}} onClick={handleChange}></input>
              <label>{pack.id==props.formData.pack?'Seleccionado':'Agregar'}</label>
            </div>
          </div>
        ))}
      </div>
    )
    return {CarPacks}
}