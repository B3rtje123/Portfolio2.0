import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Navigation from '../Components/navigation';

import foto from '../Pictures/bert-2.jpg';

import cSharp from '../Pictures/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png';
import html from '../Pictures/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png';
import XD from '../Pictures/XD.png';
import react from '../Pictures/react.png';

export default () => {
  const [to_name, setTo_name] = useState('');
  const [from_name, setFrom_name] = useState('');
  const [Mymessage, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [green, setGreen] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    if(to_name.length > 0 && from_name.length > 0 && Mymessage.length > 0){
      return true;
    }
    false
  }

  const messageMaxLength = 500;


  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });


  const submitInfo = () => {
      console.log(to_name + " " + from_name + " " + Mymessage);

      const emailContent ={
        to_name: to_name,
        from_name: from_name,
        message: Mymessage
      }

      emailjs.send('service_ccqdf24', 'template_jbuxehk', emailContent, 'VF5BPnSwA0ai3uh6m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


  }

  return (
    <main className='overflow-hidden max-w-screen max-h-screen'>
      <Navigation />
      
      <div className='max-w-xl w-full mx-auto relative -mt-18 text-CustomWhite'>
        {/* <img src={react} alt="react_logo" className='absolute max-w-sm -rotate-90 top-0 -right-36 md:max-w-md md:-right-48' />
        <img src={cSharp} alt="c#_logo" className='absolute max-w-sm -rotate-12 bottom-0 -left-36 md:max-w-md md:-left-20' /> */}
        <form action=""
        className='bg-CustomWhite/10 backdrop-blur-md p-12 my-36 shadow-2xl relative'
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>

          <h3 className='block text-3xl font-light mb-3'>Want to contact me?</h3>
          <h4 className='mt-1 mb-4 block text-sm font-normal'>Fill in the form</h4>

          <label htmlFor="name">Name</label>
          <div className='skew-x-12 border-2 border-CustomWhite/50 overflow-hidden px-2 transition-all duration-300 ease-in-out
          hover:border-yellow '>
            <input 
            value={to_name}
            id='name'
              {...register('name', {required: 'Your name is required!'})}
              placeholder='John Doe' 
              onChange={
                (e) => {setTo_name(e.target.value)}
              }
              className='-skew-x-12 block w-full p-4 pl-4 text-sm text-CustomWhite rounded-lg bg-transparent 
              focus:outline-none focus:placeholder-yellow
              hover:placeholder-yellow
              placeholder-CustomWhite/75'
            />
          </div>
          <p className='text-red text-xs'>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <div className='border-2 border-CustomWhite/50 -skew-x-12 overflow-hidden px-2
          hover:border-yellow'>
            <input
            value={from_name}
              {...register('email', {required: 'Your email is required!'})}
              placeholder='johndoe@gmail.com'
              type='email'
              onChange={
                (e) => {setFrom_name(e.target.value)}
              }
              className='skew-x-12 block w-full p-4 pl-4 text-sm text-CustomWhite rounded-lg bg-transparent 
              focus:outline-none focus:placeholder-yellow
              hover:placeholder-yellow
              placeholder-CustomWhite/75'
            />
          </div>
          <p className='text-red text-xs'>{errors.email?.message}</p>

          <label htmlFor="message">Message</label>
          <div className='skew-x-12 border-2 border-CustomWhite/50 overflow-hidden px-2 transition-all duration-300 ease-in-out
          hover:border-yellow'>
            <textarea maxLength={messageMaxLength}
              value={Mymessage}
              {...register('message', {required: 'Your message is required!'})}
              placeholder='Your message here...'
              onChange={
                (e) => {setCount(e.target.value.length), setMessage(e.target.value)}
              }
              className='-skew-x-12 block w-full pt-4 pb-32 text-sm text-CustomWhite rounded-lg bg-transparent 
              focus:outline-none focus:placeholder-yellow
              hover:placeholder-yellow
              placeholder-CustomWhite/75 overflow-y-scroll
              scrollbar-thin scrollbar-thumb-CustomWhite/75 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-transparent'
            />
          </div>  
          <div className='grid grid-cols-2'>
            <p className='text-red text-xs'>{errors.message?.message}</p>
            <div className='text-right'>
              <span id="current">{count}</span>
              <span id="maximum">/ {messageMaxLength}</span>
            </div>
          </div>

          
          <button className={`text-CustomBlack px-5 py-3 mt-8 rounded transition-all duration-300 ease-in-out -skew-x-12 
          ${green ? 'bg-green-500' : 'bg-green-500'}
          ${validate() ? 'bg-yellow/75 text-CustomBlack hover:bg-yellow focus:bg-yellow focus:outline-none' : 'bg-red/75 text-CustomWhite hover:bg-red hover:cursor-not-allowed focus:bg-red'}
          
          `}
          type="submit" 
          disabled={!validate()}
          
          onClick={
            () => {
              setGreen(true);
              submitInfo();
              setTo_name('');
              setFrom_name('');
              setMessage('');
              alert("Thank you for reaching out! \nI'll get back to you as soon as I can!");
            }}>
            <p className='skew-x-12'>Send</p>
          </button>
        </form>
      </div>
    </main>
  );
};