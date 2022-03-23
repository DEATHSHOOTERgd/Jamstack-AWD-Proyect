import useCarFeatures from "../../../../../hooks/useCarFeatures"

export default function FeaturesForm(props){
    const {CarFeatures}=useCarFeatures();
    return(<div>
            <CarFeatures></CarFeatures> 
         </div>)
}