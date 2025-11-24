import { useState } from "react"
import "../../CSS/signup_page.css"
type SignupProps = {
  onSwitch?: () => void
}

function SignupPage({ onSwitch }: SignupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // later: call your auth backend / Amplify signUp here
    console.log("Sign up:", { name, email, password, confirmPassword })
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Name
            <input
              className="auth-input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="auth-label">
            Confirm Password
            <input
              className="auth-input"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button className="auth-button" type="submit">
            Submit
          </button>
        </form>

         <p className="auth-footer">
          Already have an account?{" "}
          <button
            type="button"
            className="auth-link-text"
            onClick={() => (onSwitch ? onSwitch() : null)}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
