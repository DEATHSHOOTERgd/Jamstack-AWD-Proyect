import React from 'react'

export default function FormHeader(props) {
  return (
    <div class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        
        {props.FormSteps.map((step,i)=>{
            if(i<=props.step){return (<li class="nav-item">
          <a class="nav-link active" href="#">{step} &gt;
          </a>
        </li>)}})}
      </ul>
    </div>
  </div>
</div>
  )
}