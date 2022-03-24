import useCarFeatures from "../../../../../hooks/useCarFeatures"

export default function FeaturesForm(props){
    const {CarFeatures}=useCarFeatures();
    return(<div className="col-6">
            <CarFeatures carId={props.carId} ></CarFeatures> 
         </div>)
}