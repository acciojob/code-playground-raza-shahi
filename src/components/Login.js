import React from 'react'

const Login = ({isLogin,setIsLogin}) => {

    const handleLogin = () =>{
        setIsLogin(!isLogin);
    }

  return (
    <div>
        <h3>Login</h3>
        <button onClick={handleLogin}>
            {isLogin ? "Log Out" : "Log In"}
        </button>
    </div>
  )
}

export default Login