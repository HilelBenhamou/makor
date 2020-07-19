import React, { useState } from 'react';
import Forgot from './Forgot';
import { Link } from "react-router-dom";


function SignUp() {

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

  const [name_company, setName_compagny] = useState('')
  function handleChange(e){
    //console.log(e.target.value);
    setName_compagny(e.target.value);
  }
  const [website, setWebsite] = useState('')
  function is_url(str){
    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (regexp.test(str))
          {
            return true;
          }
          else
          {
            return false;
          }
  }
  function handleChangeWebsite(e){
    console.log(is_url(website))
    setWebsite(e.target.value)
  }

  
  return (
    <>
    <div className='container'>
      <div className="left_side">
        <h1>SignUp to JTI</h1>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
        <p>blablablablablablablablablablablablablablablablablablablablablabla</p>
      </div>
      <div className="right_side">
          <div className="compagny_details">
            <div className="title">
              <h3>Your Compagny's details</h3>
            </div>
            <div className="inputs">
              <div className="input_name">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} style={name_company.length < 3 && name_company.length !==0 ? input_error : name_company.length ===0 ? input_basic: input_valid } type="text" name="name" placeholder="My Compagny LTD" value={name_company}></input>
                {name_company.length < 3 && name_company.length !==0  ? <p style={{color:"red"}}>At least 3 chars</p> : <p></p>}
              </div>
              <div className="input_website">
                <label htmlFor="website">Website</label>
                <input onChange={handleChangeWebsite} style={is_url(website) ? input_valid : website.length === 0 ? input_basic : input_error } type="text" name="website" placeholder="https:\\compagny.com" value={website} ></input>
                { is_url(website) === false && website.length !==0  ? <p style={{color:"red"}}>URL format not valid</p> : <p></p>}
              </div>
            </div>
          </div>

          <div className="your_details">
            <div className="title">
              <h3>Your details</h3>
            </div>
            <div className="btns">
              <a type="submit" href="https://gmail.com"><button id='google' className='btn' >Connect to Google</button></a>
              <a href="https://linkedin.com"><button className='btn' type="submit" >Connect to Linkedin</button></a>
            </div>
            <div className="email">
              Or use your <Link to={{ pathname: '/signIn'}}>existing Account </Link>
            </div>
          </div>
          <div className="bottom">
            <div className="checkbox">
              <input type="checkbox"></input>
              <label>I agree to the <a href="#terms_and_conditions">Terms & Conditions</a></label>
            </div>
            <div className="account">
              <div>
                <button className="btn_account"> Create my account </button>
              </div>
              <div>
                <Link to={{ pathname: '/signIn'}}>Already have one </Link>
              </div>
               
            </div>
          </div>
      </div>
    </div>

    <style jsx>{`
      .container{
        display:flex;
        justify-content: space-evenly;
        padding:100px;
        font-family:Roboto, 'Segoe UI', Tahoma, sans-serif
      }
      .left_side, .right_side{
        //border: 2px solid black;
        padding:10px;
      }
      .right_side{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:50%;
      }
      .compagny_details, .your_details{
        border: 3px solid black;
        border-radius:5px;
        margin: 50px;
        padding:30px;
      }
      .bottom{
        color:grey;
        margin-left: 20px;
        padding:30px;
      }
      .compagny_details > .title{
        width:220px;
        margin-top:-65px;
        margin-left:5px;
        background:white;
      }
      .your_details > .title{
        width:110px;
        margin-top:-65px;
        margin-left:5px;
        background:white;
      }
      .compagny_details{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
      }
      .account{
        display:flex;
        justify-content:space-around;
        margin-top:20px;
      }
      .account > button{
        margin-right:20px;
      }
      .input_name, .input_website{
        display:flex;
        flex-direction: column;
      }
      .input_name > input, .input_website >input{
        border:3px solid black;
        border-radius: 5px;
        padding:5px;
      }
      .inputs, .btns{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
      }
      .email{
        text-align:center;
      }
      .btn{
        box-shadow: 2px 2px 2px black;
        background-color:white;
        border:2px solid black;
        padding:5px;
      }
      .btn_account{
        box-shadow: 2px 2px 2px grey;
        background-color:white;
        border:2px solid grey;
        color:grey;
        padding:5px;
      }
    
    `}
    </style>
    </>
  )
}



export default SignUp;
