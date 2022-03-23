import Header from "./shared/header"
import CustomizationForm from "./components/forms/custom-car-form/customizationForm"
import { useRouter } from 'next/router'

export default function Customization(){
    const router=useRouter()
    const {car}=router.query

    return (<div>
        <Header></Header>
        <CustomizationForm carId={car}></CustomizationForm>
        </div>)
}