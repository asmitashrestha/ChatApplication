import React from 'react';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Container from '../tour/Container';

export default function NotVerified() {
  const {authInfo}=useAuth()
  const {isLoggedIn}=authInfo
  const isVerified=authInfo.profile?.isVerified

  const navigate=useNavigate()

  const navigateToVerification=()=>{
    navigate('/auth/verification',{state:{user:authInfo.profile}})
  }

  return (
    <Container>
      {isLoggedIn && !isVerified ? <p className='test-lg text-center bg-blue-50 p-2'>Looks like you have &apos t verified your acount,
        <button onClick={navigateToVerification} className='text-blue-500 font-semibold hover:underline'>click here to verify your account</button>
      </p> : null}
    </Container>
  );
}