import { useState } from "react"

type LoginProps = {
  onSwitch?: () => void
}

function LoginPage({ onSwitch }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // later: call your auth backend / Amplify signIn here
    console.log("Login:", { email, password })
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Email or Username
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

          <button className="auth-button" type="submit">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="auth-link-text"
           onClick={() => onSwitch?.()}
          >
            Sign Up
          </button>
        </p>

        

      </div>
    </div>
  )
}

export default LoginPage
