import "./Login.css"

export default function Login() {

  return (
    <div className="login">
      <div className="top">
      <div className="wrapper">
        <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" />
      </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="passwword" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>New to Netflix? <b>Sign up npw.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}
