import useCarFeatures from "../../../../../hooks/useCarFeatures"

export default function FeaturesForm(props){
    const {CarFeatures}=useCarFeatures();
    return(<div>
            <CarFeatures carId={props.carId}></CarFeatures> 
         </div>)
}