import React from 'react'
import { Input } from '../../ui'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../../slice/auth'

function Login() {

  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(isLoading);

  function loginHandler(e){
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className='text-center mt-5'>
      <main class="form-signin w-25 m-auto">
    <form>
      <h1>Beemy</h1>
      <h1 class="h3 mb-3 fw-normal">Please login</h1>

      <Input label={"name@example.com"} state={email} setState={setEmail}/>
      <Input label={"Password"} type={'password'} state={password} setState={setPassword}/>


      <button class="btn btn-primary w-100 py-2 mt-2"  disabled={isLoading} type="submit" onClick={loginHandler}>{isLoading ? 'loading...' : 'Login'}</button>
    </form>
  </main>
    </div>
  )
}

export default Login