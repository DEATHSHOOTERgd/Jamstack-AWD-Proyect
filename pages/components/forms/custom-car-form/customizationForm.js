import { useState } from "react"
import FeaturesForm from "./customizationSteps/featuresForm";
import OutfitForm from "./customizationSteps/outfitForm";
import PackForm from "./customizationSteps/packForm";
import PowerForm from "./customizationSteps/powerForm";
import { useEffect } from "react/cjs/react.production.min";
import useCar from "../../../../hooks/useCar";


export default function CustomizationForm(props) {
    const [step, setStep]=useState(0);
    const FormSteps=['ESPECIFICACIONES','POTENCIA','PAQUETES','ASPECTO'];
    const {Car}=useCar(props.carId);
   
    const DisplayStep=()=>{
        if(step===0)
            return <FeaturesForm carId={props.carId}/>;
        else if(step==1)
            return <PowerForm carId={props.carId}/>;
        else if(step==2)
            return <PackForm carId={props.carId}/>;
        else if(step==3)
            return <OutfitForm carId={props.carId}/>;
    }
    return (
      <div className="form row mt-3">
        <Car carId={props.carId}></Car>
        <div className="form-container col-6">
            <div className="form-header">
                <h2>{FormSteps[step]}</h2>
            </div>
            <div className="form-body row">
                {DisplayStep()}
            </div>
            <div className="form-footer">
                <button className="btn btn-secondary"
                onClick={()=>{setStep((currStep)=>currStep-1);}}
                disabled={step===0} 
                >Regresar
                </button>
                <button className="btn btn-primary"
                onClick={()=>{setStep((currStep)=>currStep+1);}}
                disabled={step===FormSteps.length-1}
                >Continuar
                </button>
            </div>
        </div>
      </div>
    )
  }