import React,{useState} from 'react'

function Counter() {
    const [otp,setOTp]=useState('')
    const handleSubmit = (e) => {
    e.preventDefault();
//    conform alert
        var r = window.confirm("Are you sure you want to submit?");
        if (r === true) {
            alert("Submitted");
        } else {
            alert("Cancelled");
        }
        
}
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter OTP" value={otp} onChange={(e)=>setOTp(e.target.value)} />
                <button type="submit">Submit</button>
         </form>
      </div>
  )
}

export default Counter