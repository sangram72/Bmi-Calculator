import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [otpss, setotpss] = useState('');
const[otpactive,setotpactive]=useState(false)
const [username,setusername]=useState('')

const validateEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



// for sending otp to the email and verify the email is valid or not 

const sendemail = async (e) => {
 
    
    if (validateEmail(email)) {
        if (email != null || email != '') {
            try {
                setloader(true)
                const response = await fetch('https://bmi-calculator-backend-7eox.onrender.com/sendemail', {
                    method: 'POST',
                    body: JSON.stringify({ email }), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const result = await response.json();
                console.log(result);
        

                if (result.message) {
                    setloader(false)
                    setotpactive(true);
                }

                // Clear email and otp fields after the response
                setEmail("");
                setotpss("");
                
            } catch (error) {
                console.log(error);
            }
        }
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email");
    } else {
        alert("Enter your email");
    }
};


function local(){
    
    localStorage.setItem("userdetails",username)
}





    // for verifying the otp from the backend
    const[loader,setloader]=useState(false)

    const verifyotp = async (e) => {

        let hexOtp = '';    
        for (let i = 0; i < otpss.length; i++) {
    
            hexOtp += otpss.charCodeAt(i).toString(16);
        }
    
        console.log(hexOtp);  
    
        if (otpss != null && otpss !== "") {
            try {
                setloader(true)
                const response = await fetch('https://bmi-calculator-backend-7eox.onrender.com/verifyotp', {
                    method: 'POST',
                    body: JSON.stringify({ hexOtp }), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                const responseJson = await response.json(); 
         

console.log(responseJson.status)
                if(username.length>5 && username.length<10){
    if(username!=null && username!=="" ){
        local()
                if (responseJson.status == "true") {
           
                    localStorage.setItem("token",responseJson.status)
                    navigation('/Home');
                } else if(responseJson.status != "true"){
                    alert("Invalid Otp");
                    setloader(false)
                }
            }else{
                alert("enter your username")
            
            }
        }else{
alert("username should be under 6 to 9 characters")

        }


                console.log(responseJson);  // Log the response
    
            } catch (error) {
                alert(error.error)
                setloader(false)
                console.log(error.error);
            }
        } else {
            setloader(false)
            alert("Please enter an OTP");
        }
    };
    


    return (
        <div className="container">
            <div className="form-container">
                <h1>Login</h1>
                {otpactive === false ? (
                    <>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {loader==false?( <button type="submit" onClick={sendemail}>
                            Login with Otp
                        </button>):(
                            <button type="submit" disabled={true}>
            loading......
                        </button>
                        )}
                    </>
                ) : (
                    <>
                        <div className="form-group">
                        <input
                                type="text"
                                value={username}
                                placeholder="Enter Your Username"
                                onChange={(e) => setusername(e.target.value)}
                                required
                            />
                            <input
                            style={{marginTop:15}}
                                type="text"
                                value={otpss}
                                placeholder="Enter Your OTP"
                                onChange={(e) => setotpss(e.target.value)}
                                required
                            />
                        </div>
                        {loader==false?( <button type="submit" onClick={verifyotp}>
                            Verify OTP
                        </button>):(
                             <button type="submit" disabled={true}>
                              loading......
                                    </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
    
}

export default Login;
