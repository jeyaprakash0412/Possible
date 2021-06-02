import React from  'react'
import {useDispatch,useSelector} from 'react-redux'
import {ageAdd,ageSubtract} from '../../React Redux/Action/Ageaction'


const Profile = () => {

    const dispatch =useDispatch();
    const data =useSelector(state=>state.ageOperator)
    const callFunction=()=>{
        dispatch(ageAdd())

    }
    const subFunction=()=>{
        dispatch(ageSubtract())
    }



return(
    <div>
        {data}
        <button onClick={callFunction}>+</button>
        <button onClick={subFunction}>-</button>
        <div>Profile</div><br>
        </br>
    </div>

)
}

export default Profile
