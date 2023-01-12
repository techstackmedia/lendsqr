import { useState } from "react";
import Button from "../shared/Button";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [showTextPassword, setShowTextPassword] = useState(false);
  const [textPasswordType, setTextPasswordType] = useState("password");
  const navigate = useNavigate();
  const handleEmailTextChange = (e: any) => {
    setEmailText(e.target.value);
  };
  const handlePasswordTextChange = (e: any) => {
    setPasswordText(e.target.value);
  };
  const handleButtonClick = () => {
    if (
      document.querySelectorAll("input")[0].value === "" ||
      document.querySelectorAll("input")[1].value === ""
    ) {
      navigate("/login");
      if (document.querySelectorAll("input")[0].value === "") {
        setValidationMessage("Email is required");
      } else if (document.querySelectorAll("input")[1].value === "") {
        setValidationMessage("Password is required");
      }
    } else {
      navigate("/dashboard");
    }
  };

  const showPassword = () => {
    let type: any;
    if (showTextPassword === false) {
      setShowTextPassword(true);
      setTextPasswordType("text");
    } else {
      setShowTextPassword(false);
      setTextPasswordType("password");
    }
    return type;
  };

  return (
    <div className="loginForm">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form>
        {emailText === "" && (
          <label
            htmlFor="email"
            style={{
              color: "red",
              position: "relative",
              top: 20,
            }}
          >
            {validationMessage}
          </label>
        )}
        <div>
          <input
            onChange={handleEmailTextChange}
            value={emailText}
            type="email"
            name=""
            id="email"
            placeholder="Email"
          />
        </div>

        {passwordText === "" && (
          <label
            htmlFor="password"
            style={{
              color: "red",
              position: "relative",
              top: 20,
            }}
          >
            {validationMessage.replace("Email", "Password")}
          </label>
        )}
        <div style={{ position: "relative" }}>
          <input
            onChange={handlePasswordTextChange}
            value={passwordText}
            type={textPasswordType}
            name=""
            id="password"
            placeholder="Password"
          />
          <p onClick={showPassword} style={{ position: "absolute" }}>
            Show
          </p>
        </div>
      </form>
      <p>Forgot Password?</p>
      <Button handleButtonClick={handleButtonClick} text="Log in" />
    </div>
  );
};

export default LoginForm;
