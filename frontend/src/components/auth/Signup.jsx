import React, { isValidElement, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../tour/Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomLink from '../tour/CustomLink';
import { commonModelClasses } from '../../utils/theme';
import FormContainer from '../form/FormContainer';
import { createUser } from '../../api/auth';
import { useNotification,useAuth } from '../../hooks';
import { isValidEmail } from '../../utils/helper';

const validateUserInfo=({name,email,password})=>{
  const isValidName=/^[a-z A-Z]+$/

  if(!name.trim()) return {ok:false,error:'Name is missing!!'}
  if(!isValidName.test(name)) return {ok:false,error:'Invalid Name'}

  if(!email.trim()) return {ok:false,error:'Email is missing!!'}
  if(!isValidEmail(email)) return {ok:false,error:'Invalid Email!!'}

  if(!password.trim()) return {ok:false,error:'Password is missing!!'}
  if(password.length < 8) return {ok:false,error:'Password must contain at least 8 characters!!'}

  return {ok:true}


}

export default function Signup() {
  const [userInfo,setUserInfo]=useState({
    name:'',
    email:'',
    password:'',
  })
  
  const navigate=useNavigate()
  const {authInfo}=useAuth()
  const {isLoggedIn}=authInfo

  const {updateNotification}=useNotification()

  const handleChange=({target})=>{
    const {value,name}=target
    setUserInfo({...userInfo,[name]:value})

  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {ok,error} =validateUserInfo(userInfo)
    if(!ok) return updateNotification("error", error)
    const response= await createUser(userInfo)
    if(response.error) return updateNotification("warning",response.error)
    navigate('/auth/verification',{
    state:{user:response.user},
    replace:true})
    console.log(response.user)
  }

  useEffect(()=>{
    //moving user somewhere else if they are already loggen in
    if(isLoggedIn) navigate('/')
  },[isLoggedIn])

  const {name,email,password}=userInfo

  return (
    <FormContainer>
      <Container className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit} className={commonModelClasses+' w-72'}>
          <Title className='text-black-500'>Sign up</Title>
          <FormInput value={name} onChange={handleChange} label='Name' placeholder='John' name='name' />
          <FormInput value={email} onChange={handleChange} label='Email' placeholder='john@email.com' name='email' />

          <FormInput value={password} onChange={handleChange} label='Password' placeholder='********' name='password' type='password' />
          
          <Submit value="Sign up" className='text-gray-700'/>

          <div className="flex justify-between">
            <CustomLink to='/auth/forget-password'>Forgot Password</CustomLink>
            <CustomLink to='/auth/signin'>Sign in</CustomLink>


          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
 