import { useState } from "react"
import FeaturesForm from "./customizationSteps/featuresForm";
import OutfitForm from "./customizationSteps/outfitForm";
import PackForm from "./customizationSteps/packForm";
import PowerForm from "./customizationSteps/powerForm";
import useCar from "../../../../hooks/useCar";
import FormHeader from "./customizationSteps/formHeader";


export default function CustomizationForm(props) {
    const [step, setStep]=useState(0);
    const [FormSteps,setFormSteps]=useState(['ESPECIFICACIONES','POTENCIA','PAQUETES','ASPECTO']);
    const {Car}=useCar(props.carId);
    const [formData, setFormData]=useState({
        car:0,
        engine:0,
        transmission:0,
        pack:0,
        car_color:0
    })
   
    const DisplayStep=()=>{
        if(step===0)
            return <FeaturesForm carId={props.carId} formData={formData} setFormData={setFormData}/>;
        else if(step==1)
            return <PowerForm carId={props.carId} formData={formData} setFormData={setFormData}/>;
        else if(step==2)
            return <PackForm carId={props.carId} formData={formData} setFormData={setFormData}/>;
        else if(step==3)
            return <OutfitForm carId={props.carId} formData={formData} setFormData={setFormData}/>;
    }
    return (
      <div className="form row mt-1">
        <FormHeader step={step} FormSteps={FormSteps}></FormHeader>
        <Car carId={props.carId}></Car>
        <div className="form-container col-6">
            <div className="form-header">
                <h2>{FormSteps[step]}</h2>
            </div>
            <div className="form-body row d-flex justify-content-center">
                {DisplayStep()}
            </div>
            <div className="form-footer mt-3 d-flex justify-content-center">
                <button className="btn btn-secondary"
                onClick={()=>{setStep((currStep)=>currStep-1);}}
                disabled={step===0} 
                >Regresar
                </button>
                <button className="btn btn-primary"
                onClick={()=>{setStep((currStep)=>currStep+1); if(formData.car==0)setFormData({...formData,car:props.carId})}}
                disabled={step===FormSteps.length-1}
                >{step>=3?'Comprar':'Continuar'}
                </button>
            </div>
        </div>
      </div>
    )
  }