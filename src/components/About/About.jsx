import React from 'react'

export default function About() {
  return (
    <div>
    <div class="card text-center">
  <div class="card-header">
  About
  </div>
  <div class="card-body" style={{height:'78vh', width:'60vw',display:'flex',justifyContent:'center',flexDirection:'column'}}>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">What is the description for food recipes?
A written procedure for the preparation of a food item or items. Recipes typically include a list of ingredients and a set of instructions on the necessary steps to prepare the foods being described.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
  <div class="card-footer text-muted">
    All copiright reserve @2023
  </div>
</div>
    </div>
  )
}
