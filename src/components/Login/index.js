import React from "react";
import "./style.scss";
function index(props) {
  return (
    <div className="component-login">
      <div className="component-login_group">
        <div className="login_title">
          <span>Login</span>
          <span>Register</span>
        </div>
        <div className="login_form">
          <div className="login_with--google">login with google</div>
          <div className="login_with--email">
            <lable className="login_with--email-title EMAIL">
              Email address
            </lable>
            <input type="text" class="login_with--email-input"></input>
            <lable className="login_with--email-title PASSWORD">Password</lable>
            <input type="password" class="login_with--email-input"></input>
            <button>Login</button>
          </div>
        </div>

        <div className="register-form">
          <lable className="login_with--email-title EMAIL">Email address</lable>
          <input type="text" class="login_with--email-input"></input>
          <lable className="login_with--email-title PASSWORD">Password</lable>
          <input type="password" class="login_with--email-input"></input>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default index;
