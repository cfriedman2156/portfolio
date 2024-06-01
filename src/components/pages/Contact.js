import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            alert('Message submitted!')
        }
    }
    const validateEmail = (email) => {
      const re =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  };
  
    const handleChange = (event) => {
        if (event.target.name ==='email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Invalid email')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage('')
            }
            if (!errorMessage) {
                setFormState({...formState, [event.target.name]: event.target.value});
                console.log('Handle Form', formState);
            }
        }
    }
    
    return <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Contact Me!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form id='contact-form' className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor='name' className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="name" name="Name" onBlur={handleChange} placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label htmlFor='email' className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input type="email" name="email" onBlur={handleChange} placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label htmlFor='message' className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea type="message" name="message" onBlur={handleChange} className="textarea textarea-bordered" required />
          </div>
          <div className="form-control mt-6">
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type='submit' className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default Contact; 