import React, { useEffect, useRef, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Container from '../tour/Container';
import Title from '../form/Title';
import Submit from '../form/Submit';
import FormContainer from '../form/FormContainer';
import { commonModelClasses } from '../../utils/theme';
import { resendEmailVerificationToken, verifyUserEmail } from '../../api/auth';
import { useNotification,useAuth } from '../../hooks';

const OTP_LENGTH=6;

const isValidOTP=(otp)=>{
  let valid=false

  for(let val of otp){
    valid=!isNaN(parseInt(val))
    if(!valid) break
  }

  return valid
}

 
export default function EmailVerification() {
  const [otp,setOtp]=useState(new Array(OTP_LENGTH).fill(' '))
  const [activeOtpIndex, setActiveOtpIndex]=useState(0)

 const {isAuth,authInfo}= useAuth()
 const {isLoggedIn}=authInfo
 console.log(authInfo);
 const isVerified=authInfo.profile?.isVerified

  const inputRef= useRef()
  const {updateNotification}=useNotification()

  const {state}=useLocation()
  const user=state?.user

  const navigate=useNavigate()

  const focusNextInputField= (index)=>{
    setActiveOtpIndex(index+1)
  }

  const focusPrevInputField= (index)=>{
    let nextIndex
    const diff=index-1
    nextIndex = diff >= 0 ? diff : 0;
    setActiveOtpIndex(nextIndex)
  }


  const handleOtpChange=({target},index)=>{
    const {value}=target
    const newOtp=[...otp]
    newOtp[index]=value.substring(value.length -1,value.length)
    console.log(value);
    if (!value) {
      focusPrevInputField(index);
    } else {
      focusNextInputField(index);
    }
    setOtp([...newOtp])
  }

  const handleOTPResend=async()=>{
    const {error,message}=await resendEmailVerificationToken(user.id)

    if(error) return updateNotification('error',error)
    updateNotification('success',message)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' /*&& index > 0 && !otp[index]*/) {
      e.preventDefault();
      if (!otp[index] && index > 0) {
        // Move focus to the previous input
        focusPrevInputField(index);
      } else {
        // Clear the current input and move focus to the previous input
        const newOtp = [...otp];
        newOtp[index] = '';
  
        // If the current input is the first one and already empty, move focus to the previous input
        if (index === 0 && !otp[index + 1]) {
          focusPrevInputField(index);
        }
  
        setOtp(newOtp);
        focusPrevInputField(index);
      }
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()

    if(!isValidOTP(otp)){
      return updateNotification("error","Invalid OTP")
    }
    const {error,message,user:userResponse}=await verifyUserEmail({OTP:otp.join(''),userId:user.id})
    if(error) return updateNotification('error',error)

    updateNotification('success',message)
    localStorage.setItem('auth-token',userResponse.token)
    isAuth()
  }

  useEffect(()=>{
    inputRef.current?.focus()
  }, [activeOtpIndex])

  useEffect(()=>{
    
    if(!user) navigate('/not-found')
    if(isLoggedIn && isVerified) navigate('/')
  },[user,isLoggedIn,isVerified])

  //if(!user) return null

  return (
    <FormContainer>
      <Container className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit} className={commonModelClasses}>
          <div>
            <Title>Please enter the OTP to verify your account</Title>
            <p className='text-center dark:text-dark-subtle text-light-subtle'>OTP has been sent to your email</p>
          </div>
          <div className='flex justify-center items-center space-x-4'>
          {otp.map((_, index)=>{
            return <input 
            ref={activeOtpIndex===index ? inputRef :null}
            type='number'
            key={index} 
            value={otp[index] ||""} 
            onChange={(e)=>handleOtpChange(e,index)}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            className='w-12 h-12 border-2  rounded dark:border-dark-subtle border-light-subtle
            dark:focus:border-white focus:border-primary bg-transparent outline-none text-center
            dark:text-white text-primary font-semibold text-xl spin-button-none' />
          })}
          </div>

          <div className=''>
            <Submit value="Verify Account"/>
            <button onClick={handleOTPResend} type='button' className='dark:text-white text-blue-500 font-semibold hover:underline mt-2'>I don't have OTP</button>
          </div>

        </form>
      </Container>
    </FormContainer>
  );
}