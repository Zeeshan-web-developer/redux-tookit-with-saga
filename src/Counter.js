import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counterSlice'
import { getUsersStart } from "./store/userSlice"
import { useGetRandomQuoteQuery } from "./store/services/Quotes";
function Counter() {
    // const { count } = useSelector(state => state.counter)
    // const {products}=useSelector(state=>state.cart)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //    dispatch(getUsersStart()) 
    // }, [])
    const obj = useGetRandomQuoteQuery();
    console.log(obj)
  return (
      <div>
          {/* <div>Counter count= {count}</div>
          <button onClick={() => dispatch(increment())}
            
          >Increment</button>
           <button onClick={() => dispatch(decrement())}
            
          >Decrement</button> */}

          <h2>Cart Section</h2>
          {/* {
              products.map((product, index) => {
                    return <div key={index}>{product}</div>
                })
         } */}
      </div>
  )
}

export default Counter