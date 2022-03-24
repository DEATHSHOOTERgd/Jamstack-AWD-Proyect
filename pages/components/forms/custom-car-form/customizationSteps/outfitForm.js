import useCarOutfits from "../../../../../hooks/useCarOutfits";

export default function OutfitForm(props){
    const {CarOutfits}=useCarOutfits();
    return(<div className="col-12">
            <CarOutfits carId={props.carId} formData={props.formData} setFormData={props.setFormData}></CarOutfits> 
         </div>)
}