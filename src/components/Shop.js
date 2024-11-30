import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreator } from '../state';


const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Deposits/withdraw money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}} >-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.depostMoney(100))}} >+</button>
    </div>
  )
}

export default Shop;
