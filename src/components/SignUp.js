import React, { useState } from 'react';
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import ReCAPTCHA from "react-google-recaptcha";


function SignUp() {
  //
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
  const responseGoogle = (response) => {
    console.log(response);
  }
  //
  const [name_company, setName_compagny] = useState('')
  function handleChange(e){
    //console.log(e.target.value);
    setName_compagny(e.target.value);
  }
  //
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
  //
  const [showEmail, setShowEmail] = useState(false)
  function connectByEmail(){
    setShowEmail(true);
  }
  //
  const [email, setEmail] = useState('')
  function handleChangeEmail(e){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return re.test(email);
  }
  //
  const [name, setName] = useState('')
  function handleChangeName(e){
    //console.log(e.target.value);
    setName(e.target.value);
  }
  //
  function onChangeCaptcha(value) {
    console.log("Captcha value:", value);
  }
  //
  const [success, setSuccess] = useState(false)
  function ClickSuccess(){
    setSuccess(true);
  }
  
  return (
    <>
    {
      success ?
      <>
      <div className='contain'>
        <h1>Great! You did it :)</h1>
        <p>Hi {name} and welcome aboard!</p>
        <p>An email has been sent to your inbox ({email}) with your connection details and platform link.</p>
        <p>Don't forget to confirm your email so you can continue to use JTI services.</p>
        <p>Now you'll be automatically redirected... Enjoy!</p>
        <p style={{textAlign:"center"}}>Redirecting in... 10 seconds</p>
      </div>
      </>
      :
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
                {showEmail ?
                <>
                <div className="btns">
                  <div className="input_name">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChangeName} style={name.length < 3 && name.length !==0 ? input_error : name.length ===0 ? input_basic: input_valid } type="text" name="name" placeholder="John Doe" value={name} ></input>
                    {name.length < 3 && name.length !==0  ? <p style={{color:"red"}}>At least 3 chars</p> : <p></p>}
                  </div>
                  <div className="input_email">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChangeEmail} style={ validateEmail(email) ? input_valid : email.length===0 ? input_basic :input_error  } type="text" name="email" placeholder="johnDoe@gmail.com" value={email}></input>
                    { validateEmail(email) === false && email.length !==0 ? <p style={{color:"red"}}>Email format not valid</p> : <p></p>}
                  </div> 
                </div>
                <div className="email">
                  or use your <Link to={{ pathname: '/signIn'}}> existing account </Link>
                </div>
                </>
                  : 
                <>
                <div className="btns">
                  <GoogleLogin
                    clientId="549362098810-lcaso8rt9svrpe7lj1mvtitomd877ks0.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                  <a href="https://linkedin.com"><button className='btn' type="submit" >Connect to Linkedin</button></a>
                </div>
                <div className="email">
                  Or signUp <a href="#" onClick={connectByEmail}> by Email</a>
                </div> 
                </>
                }
              </div>
              <div className="captcha">
                <ReCAPTCHA
                  sitekey="6LdTiLMZAAAAAOVjEracJ7Qi3LJIAXn2b7wYXsfv"
                  onChange={onChangeCaptcha}
                />
              </div>
              <div className="bottom">
                <div className="checkbox">
                  <input type="checkbox"></input>
                  <label>I agree to the <a href="#terms_and_conditions">Terms & Conditions</a></label>
                </div>
                <div className="account">
                  <div>
                    <Link to={{ pathname: '/success'}}> Create my account </Link>
                    <button onClick={ClickSuccess} className="btn_account"> Create my account </button>
                  </div>
                  <div>
                    <Link to={{ pathname: '/signIn'}}>Already have one </Link>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
      </> 
    }

    <style jsx>{`
      .container{
        display:flex;
        justify-content: space-evenly;
        padding:100px;
        font-family:Roboto, 'Segoe UI', Tahoma, sans-serif;
      }
      .contain{
        padding:100px;
        font-family:Roboto, 'Segoe UI', Tahoma, sans-serif;
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
      .input_name, .input_website, .input_email{
        display:flex;
        flex-direction: column;
      }
      .input_name > input, .input_website >input, .input_email > input{
        border:3px solid black;
        border-radius: 5px;
        padding:5px;
        font-weight:bold;
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
      .captcha{
        margin: 0px 150px 0px 150px;
      }
    
    `}
    </style>
    <script src="https://www.google.com/recaptcha/api.js"></script>
    </>
  )
}



export default SignUp;
