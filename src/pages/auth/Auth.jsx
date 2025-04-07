import { useState } from "react"
import { Login } from "../../components/Login";

import "./authPage.css"


 export const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev)
    }

  return (
    <div className="auth-controller">
        {isLogin ? (
            <Login switchAuthHandler={handleAuthPageToggle}/>
        ) : (
            register
        )}
    </div>
  )
}

