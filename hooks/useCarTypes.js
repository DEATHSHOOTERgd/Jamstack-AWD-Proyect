import React,{useEffect, useState} from 'react'
import useCars from './useCars'

export default function useCarTypes(carTypes){
    const {Cars}=useCars();
    const CarTypes=()=>(
        <div className='container justify-content-centered align-items-center '>
            {carTypes.map(carType =>(
                <div className='row mt-2'>
                    <div className='col-3 car-type text-center'>
                        <span className='arrow'></span>
                        <span className='car-type'>{carType.attributes.description}</span>
                    </div>
                    <Cars carTypeId={carType.id}></Cars>
                </div>
            ))}
        </div>
    )
    return {
        CarTypes
    }
} 