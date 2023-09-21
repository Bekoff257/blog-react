import React from 'react'
import { Input } from "../../ui"
import { useState } from 'react'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='text-center mt-5'>
      <main class="form-signin w-25 m-auto">
  <form>
    <h1>Beemy</h1>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <Input label={"Username"} state={name} setState={setName}/>
    <Input label={"name@example.com"} state={email} setState={setEmail}/>
    <Input label={"Password"} type={'password'} state={password} setState={setPassword}/>


    <button class="btn btn-primary w-100 py-2 mt-2" type="submit">Register</button>
  </form>
</main>
    </div>
  )
}

export default Register