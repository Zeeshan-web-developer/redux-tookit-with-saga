import React from 'react'

function Counter() {
    const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted')
}
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter OTP" />
                <button type="submit">Submit</button>
         </form>
      </div>
  )
}

export default Counter