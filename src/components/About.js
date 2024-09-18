import React, { useState } from 'react'

export default function About() {
     const [myStyle,setMyStyle] =useState(
     {
    
        color:'white',
        backgroundColor:'black'
     })
     const [btnText,setBtnText]=useState("enable dark mode")
     const ToggleButton=()=>
     {
        if(myStyle.color=='white')
        {
            setMyStyle
        (
        {
          color:'black',
          backgroundColor:'white',
          border:'1px solid white'
        }
        )
        setBtnText("enable dark mode")
    }
        else
        {
        setMyStyle
         (
          {
           color:'white',
           backgroundColor:'black'
          
          }
         )
         setBtnText("enable light mode")
     }
    }
  return (
    
    <div>
        <div className="container" style= {myStyle}>
            <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed " style= {myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed " style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className='container'>
                <button className=' btn btn-primary mx-4 my-2' onClick={ToggleButton}>{btnText}</button>
                </div>
    </div>
    
  )
}
