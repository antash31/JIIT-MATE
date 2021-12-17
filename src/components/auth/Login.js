import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";

//MAIN COMPONENT FUNCTION.
function Login() {
  //STATE VARIABLES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          JIIT MATE
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          /> */}
        </div>
        <div className="login__desc">
          <h3>Ask-Learn-Connect</h3>
        </div>

        {/*----------------------LEFT SIDE--------------------------*/}
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>LOGIN WITH GOOGLE</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__FaceBookAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>LOGIN WITH FB</span>
            </div>
          </div>

          {/*----------------RIGHT SIDE---------------*/}
          <div className="login__emailPass">
            <div className="login__label">
              <h4>LOGIN</h4>
            </div>

            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="EMAIL"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="PASSWORD"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <button onClick={handleSignIn} className="LoginButton">
                LOGIN
              </button>
            </div>
            <button onClick={registerSignIn} className="registerButton">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
