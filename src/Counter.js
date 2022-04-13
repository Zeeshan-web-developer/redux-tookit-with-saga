import React from 'react'

function Counter() {

  return (
      <div>
          <form onSubmit={alert("form submitted")}>
              <input type="text" placeholder="Enter OTP" />
                <button type="submit">Submit</button>
         </form>
      </div>
  )
}

export default Counter