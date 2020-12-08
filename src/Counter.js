import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, reset } from './actions'

function Counter() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch()
    return (
        <div>
            {isLogged?(
                    <div>
                        <h1>Counter : {counter}</h1> 
                        <button onClick={() => dispatch(increment(1))}>Increment +</button> 
                        <button onClick={() => dispatch(increment(5))}>Increment +5</button> 
                        <br/>
                        <button onClick={() => dispatch(decrement())}>Decrement -</button>
                        <br/>
                        <button onClick={() => dispatch(reset())}>Reset</button>
                        <hr/>
                        <button onClick={() => dispatch(signIn())}>Sign Out</button>    
                    </div>   
                ):(
                    <button onClick={() => dispatch(signIn())}>Sign In</button>
                )
            }
            
        </div>
    )
}

export default Counter
