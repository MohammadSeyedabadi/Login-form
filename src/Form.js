import React from 'react'

export default function Form() {
  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          type="text"
          placeholder=" "
          id="name"
          className="input"
          name="name"
        />
        <div className="cut cut-short"></div>
        <label htmlFor="name" className="placeholder">
          Name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          type="text"
          placeholder=" "
          id="email"
          className="input"
          name="email"
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          type="password"
          placeholder=" "
          id="password"
          className="input"
          name="password"
        />
        <div className="cut cut-password"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <div className="input-container ic2">
        <input
          type="password"
          placeholder=" "
          id="Confirmpassword"
          className="input"
          name="Confirmpassword"
        />
        <div className="cut cut-Confirmpassword"></div>
        <label htmlFor="Confirmpassword" className="placeholder">
          Confirm password
        </label>
      </div>
      <div className="form--marketing">
        <input
          id="okayToEmail"
          type="checkbox"
          name="joinedNewsletter"
          //onChange={handleChange}
          //checked={formData.joinedNewsletter}
        />
        <label htmlFor="okayToEmail">I want to join the newsletter</label>
      </div>
      <button className="submit">submit</button>
    </div>
  )
}
