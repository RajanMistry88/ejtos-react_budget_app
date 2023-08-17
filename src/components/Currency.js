import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurency = (val)=>{
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    })  
  }
  
  return (
    <div className='alert alert-secondary'   style={{
        backgroundColor:`rgba(96, 244, 110, 0.8)`
    }}>
        Currency {
        <select name="Currency" id="Currency" onChange={event => changeCurency(event.target.value)}
          className="selectpicker"   style={{
            backgroundColor:`rgba(255, 255, 255, 0.38)`
        }}
        >
          <option value="$" className='alert alert-success'>$ Dollar</option>
          <option value="£" className='alert alert-success'>£ Pound</option>
          <option value="€" className='alert alert-success'>€ Euro</option>
          <option value="₹" className='alert alert-success'>₹ Rupee</option>
        </select>	
        }
  
    </div>
  )
}

export default Currency