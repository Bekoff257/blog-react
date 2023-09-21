import React from 'react'
import { useState } from 'react'

function Input({label, state, setState, type = "text"}) {


  return (
    <div>
        <div class="form-floating mt-2">
            <input type={type} 
                class="form-control" 
                value={state} 
                onChange={e => setState(e.target.value)} 
                id="floatingInput" 
                placeholder={label} />
            <label for="floatingInput">{label}</label>
        </div>
    </div>
  )
}

export default Input