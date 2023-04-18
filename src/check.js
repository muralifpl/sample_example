import { useSelector,useDispatch } from "react-redux";

function Counter(){
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch({type:'INCREMENT'});
    }

    const handleDecrement =()=>{
        dispatch({type:'DECREMENT'});
    }
    return<>
      <h1>count :{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </>
}
export default Counter;