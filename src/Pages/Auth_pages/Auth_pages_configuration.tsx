import { useState } from 'react'
import LoginPage from './login_page'
import SignupPage from './signup_page'

export default function AuthContainer() {
    // <login | signup> is a typescript concept(only)
    // it means strict on these 2 variables only, does not allow other variables  
  const [view, setView] = useState<'login'|'signup'>('login')
  return view === 'login'
    ? <LoginPage onSwitch={() => setView('signup')} />
    : <SignupPage onSwitch={() => setView('login')} />
}