import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
let Base = import.meta.env.VITE_BASE_URL;
function LoginPage() {
  const navigate = useNavigate()
  let emailRef = useRef("");
  let passwordRef = useRef("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await fetch(`${Base}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      if (res.ok && res.status === 200) {
        navigate("/admin")
        toast.success("admin panelga o'tdingiz")
      } else {
        throw new Error("");
      }
      let data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="two-sections">
      <div className="left-section">
        <Link className="logo-login" to={"/"}>
          <img src="/images/header-logo.svg" alt="logo" />
        </Link>
        <Link className="back-to-home" to={"/"}>
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>
        <form onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account</p>
          <div className="labels-wrapper">
            <label>
              <span>Email</span> <br />
              <input
                ref={emailRef}
                type="email"
                name="email"
                required
                placeholder="name@example.com"
              />
            </label>{" "}
            <br />
            <label className="password-label">
              <span>Password</span> <br />
              <input
                ref={passwordRef}
                type="password"
                name="password"
                required
                placeholder="* * * * * *"
              />
            </label>{" "}
          </div>
          <div className="login-btn">
            <button>Login</button>
          </div>
          <div className="dont-have">
            <p>Don't have an account? </p>
            <Link to={"#"}>
            Sign up
            </Link>
          </div>
        </form>
      </div>
      <div className="right-section">
        <img
          src="/images/login-right-img.jpg"
          alt="login right img"
          width={576}
          height={576}
        />
        <h3>Start Your Journey</h3>
        <p>Join thousands of creators sharing their stories on Blogify</p>
      </div>
    </div>
  );
}

export default LoginPage;
