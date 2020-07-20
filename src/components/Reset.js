import React, { useState } from 'react';

function Reset(){
    const input_valid = {
        border:"3px solid green",
        borderRadius: "5px",
        padding:"5px",
        color:"green",
    }
    const input_error = {
        border:"3px solid red",
        borderRadius: "5px",
        padding:"5px",
    }
    const input_basic = {
        border:"3px solid black",
        borderRadius: "5px",
        padding:"5px",
    }
    //
    const image = require('./images.png');
    //
    const [psw, setPsw] = useState('');
    function handlePsw(e){
        setPsw(e.target.value);
    }
    //
    function CheckPassword(input){ 
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(input.match(passw)){ 
            return true;
        }
        else{ 
            return false;
        }
    }

    return(
        <>
            <div className='container'>
                <img src={image} alt="reset"></img>
                <div className="psw">
                    <label>Please set your new password</label>
                    <input onChange={handlePsw} style={CheckPassword(psw) ? input_valid : psw.length ===0 ? input_basic: input_error}  type="text" placeholder="johnDoe@gmail.com" value={psw}></input>
                    {CheckPassword(psw) === false ? 
                    <>
                    <div style={{color: 'red'}}>
                        <p>Password must be:</p>
                        <p>- At least 6 characters long</p>
                        <p>- Composed by letters and numbers</p>
                        <p>- At least one capital letter</p>
                    </div>
                    </>
                    :
                    <>  
                    <div style={{color: 'green'}}>
                        <p>Password must be:</p>
                        <p>- At least 6 characters long</p>
                        <p>- Composed by letters and numbers</p>
                        <p>- At least one capital letter</p>
                    </div>
                    </>
                    }
                </div>
                <button className='btn' type="submit" >Validate</button>
            </div>
            <style jsx>
            {`
                .container{
                    display:flex;
                    flex-direction:column;
                    margin:300px 550px 0px 550px;
                    font-family:Roboto, 'Segoe UI', Tahoma, sans-serif;
                }
                .psw{
                    display:flex;
                    flex-direction:column;
                    margin-top :20px;
                }
                .psw input{
                    border:3px solid black;
                    border-radius: 5px;
                    padding:5px;
                    font-weight:bold;
                    margin-top: 15px;
                }
                .btn{
                    box-shadow: 2px 2px 2px black;
                    background-color:white;
                    border:2px solid black;
                    padding: 5px;
                    width:20%;
                    margin-left: 150px;

                }
            `}
            
            </style>
        </>
    )
}

export default Reset;