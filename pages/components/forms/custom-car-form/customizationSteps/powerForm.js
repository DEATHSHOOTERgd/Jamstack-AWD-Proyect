import useCarPower from "../../../../../hooks/useCarPower";
import useCarEngines from "../../../../../hooks/useCarEngines";
import useCartransmissions from "../../../../../hooks/useCarTransmissions";

export default function PowerForm(props){
    const {CarEngines}=useCarEngines();
    const {CarTransmissions}=useCartransmissions();
    return(<div className="col-12">
            <CarEngines carId={props.carId} formData={props.formData} setFormData={props.setFormData}></CarEngines>
            <CarTransmissions carId={props.carId} formData={props.formData} setFormData={props.setFormData}></CarTransmissions>
         </div>)
}