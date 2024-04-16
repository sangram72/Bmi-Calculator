import React, { useState } from 'react'
import './Home.css'
function Home() {
    const[switchscreen,setswitchscreen]=useState(false)


    // for metric measurement
const [weight,setweight]=useState(0)
const [height,setheight]=useState(0)
const[final,setfinal]=useState(0)

    function bmicalculatemetric(){
        
if(weight!=null && weight>0){
    if(height!=null && height>0){
    let heightinmeter= height/100
    let finalheight= heightinmeter*heightinmeter
   setfinal(weight/finalheight)
    }else{
        alert("Fill the necessary fileds")
    }

}else{
    alert("Fill the necessary fileds")
}
    }



// end 


    // for standard measurement




const[feet,setfeet]=useState(0)
const[inch,setinch]=useState(0)
const[pounds,setpounds]=useState(0)
const[finalstandard,setstandardfinal]=useState(0)
    function bmicalculatestandard(){
        if(pounds!=null && pounds>0){
            if(feet!=null && feet>0){
                if(inch!=null&&inch>0){
let centimeterfromfeet = feet*30.48
let centimeterfrominch = inch*2.54
let finalcentimeter = centimeterfromfeet+centimeterfrominch
console.log(finalcentimeter,"finalcenti")
let poundstokg = pounds*0.45359237

console.log(poundstokg,"poundstokg")

let heightinmeter= finalcentimeter/100

let finalheight= heightinmeter*heightinmeter
setstandardfinal(poundstokg/finalheight)

                }else{
                    alert("Fill the necessary fileds")
                }
            }else{
                alert("Fill the necessary fileds")
            }
        }else{
            alert("Fill the necessary fileds")
        }
        
    }



    // end 

function swtichtometric(){
    setswitchscreen(true)
    setfinal(0)
    setweight(0)
    setheight(0)
}

function switchtostandard(){
    setswitchscreen(false)
    setstandardfinal(0)
    setfeet(0)
    setinch(0)
    setpounds(0)
    
}

  return (
 <div className="container">
      <div className="calculator">
        {switchscreen==false?(
                    <div className="section">
                    <h1>Standard BMI Calculator</h1>
                    <button onClick={()=>{swtichtometric()}}>Swtich to metric</button>
                    <div className="input-group">
                      <label htmlFor="pounds">Weight (lbs)</label>
                      <input type="number" id="pounds" value={pounds} onChange={(e) => setpounds(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <label htmlFor="feet">Height (Feet)</label>
                      <input type="number" id="feet" value={feet} onChange={(e) => setfeet(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <label htmlFor="inch">Height (Inches)</label>
                      <input type="number" id="inch" value={inch} onChange={(e) => setinch(e.target.value)} />
                    </div>
                    <button onClick={()=>{
                      bmicalculatestandard()
                    }}>Calculate BMI</button>
                    <p>Your BMI Is: {finalstandard.toFixed(2)}</p>
                  </div>
        ):(
            <div className="section">
            <h1>Metric BMI Calculator</h1>
            <button onClick={()=>{
             switchtostandard()
            }}>Swtich to standard</button>
            <div className="input-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input type="number" id="weight" value={weight} onChange={(e) => setweight(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="height">Height (cm)</label>
              <input type="number" id="height" value={height} onChange={(e) => setheight(e.target.value)} />
            </div>
            <button onClick={()=>{
              bmicalculatemetric()
            }}>Calculate BMI</button>
            <p>Your BMI Is: {final.toFixed(2)}</p>
          </div>
        )}


       
      </div>
    </div>
  );
}


export default Home