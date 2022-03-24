import useCarPacks from "../../../../../hooks/useCarPacks";

export default function PackForm(props){
    const {CarPacks}=useCarPacks();
    return(<div className="col-12">
            <CarPacks carId={props.carId} formData={props.formData} setFormData={props.setFormData}></CarPacks> 
         </div>)
}