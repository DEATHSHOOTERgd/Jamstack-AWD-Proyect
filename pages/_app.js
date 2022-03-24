
import 'bootswatch/dist/lux/bootstrap.css'
import { useEffect } from 'react'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    document.title="Ecuautos"
  },[])
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

