import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state';


const Shop = () => {
  const dispatch = useDispatch();
  const balace = useSelector(state=>state.amount)
const {withdrawMoney, depostMoney} = bindActionCreators(actionCreator, dispatch)
  return (
    <div>
        <h2>Deposits/withdraw money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}} >-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.depostMoney(100))}} >+</button> */}

    {/* with Bind action creator  */}

      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}} >-</button>
      Update Balance ({balace})
      <button className="btn btn-primary mx-2" onClick={()=>{depostMoney(100)}} >+</button>
    </div>
  )
}

export default Shop;
