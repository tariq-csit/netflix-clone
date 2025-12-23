import React from 'react'
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { selectuser } from '../../features/userSlice';
import { auth } from '../Firebase';
import Nav from '../Nav';
// import PlansScreen from './PlansScreen';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectuser);
  return (
    <div className='profileScreen'>
       <Nav />

       <div className='profileScreen__body'>
           <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
            <div className='profileScreen__details'>
                <h2>{user.email}</h2>
                <div className='profileScreen__plans'>
                        <h3>Plans</h3>

                        {/* <PlansScreen /> */}

                    <button onClick={() => auth.signOut()} className='profileScreen__signout'>Sign Out</button>
                    
                </div>
            </div>
            </div>
       </div>
    </div>
  )
}

export default ProfileScreen