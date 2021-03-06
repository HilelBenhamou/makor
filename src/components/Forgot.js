import React , {useState} from 'react';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Forgot() {
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
  const image = require('./images.png');
  //
  const [email, setEmail] = useState('')
  function handleChange(e){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return re.test(email);
  }
  //
  const [password, setPassword] = useState('');
  function handlePsw(e){
    setPassword(e.target.value);
  }
  //
  function onChangeCaptcha(value) {
    console.log("Captcha value:", value);
  }
  //
  const [check_email, setcheck_email] = useState(false)
  function sendDetails(){
    setcheck_email(true);
  }
  return (
    <>
    <div className="container">
      <div className="up">
        <Link to={{ pathname: '/'}}> SignUp </Link>
        <Link to={{ pathname: '/signIn'}}> I remember ! </Link>
      </div>
      {
        check_email ?
        <>
        <div className="middle">
          <div>
            <img src={image} alt="singin"></img>
          </div>
          <p>Success !!</p>
          <p>An email has been sent to you to renew your password</p>
          <p>Or click here to <Link to={{ pathname: '/reset'}}> reset your password </Link></p>
        </div>
        </> 

        : 
        <>
        <div className="middle">
          <div>
            <img src={image} alt="singin"></img>
          </div>
          
          <div className="input">
            <label>Email</label>
            <input onChange={handleChange}  style={ validateEmail(email) ? input_valid : email.length===0 ? input_basic :input_error  } type="text" placeholder="johnDoe@gmail.com" value={email}></input>
            { validateEmail(email) === false && email.length !==0 ? <p style={{color:"red"}}>Email format not valid</p> : <p></p>}
          </div>
          <div className="captcha">
              <ReCAPTCHA
                sitekey="6LdTiLMZAAAAAOVjEracJ7Qi3LJIAXn2b7wYXsfv"
                onChange={onChangeCaptcha}
              />
          </div>
          
          <button onClick={sendDetails} type="submit" className="btn_connect">Send me Details</button>
        </div>
        </>
      }
      

      
    </div>
    <style jsx>
      {`
        .container{
          display:flex;
          flex-direction:column;
          justify-content: center;
          padding:100px;
          font-family:Roboto, 'Segoe UI', Tahoma, sans-serif
        }
        .up{
          display: flex;
          justify-content: space-around;
        }
        .middle{
          display:flex;
          flex-direction:column;
          text-align:center;
          margin:100px;
        }
        .down{
          display:flex;
          justify-content: space-around;
        }
        .btn_connect{
          box-shadow: 2px 2px 2px grey;
          background-color:white;
          border:2px solid grey;
          color:grey;
          padding:5px;
        }
        .input{
          display:flex;
          flex-direction:column;
          margin: 20px 400px 20px 400px;
        }
        .input > input{
          border:3px solid black;
          border-radius: 5px;
          padding:5px;
          font-weight:bold;
        }
        .btn_down{
          box-shadow: 2px 2px 2px black;
          background-color:white;
          border:2px solid black;
          padding:5px;
          background-color:white;
        }
        .btn_connect{
          margin-top:50px;
          margin-left:450px;
          margin-right: 450px;
        }
        .captcha{
          margin: 0px 400px 20px 400px;
        }

      `}
    </style>
    </>
  )
}

export default Forgot;
