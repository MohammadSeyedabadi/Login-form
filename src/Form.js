import React from 'react'

export default function Form() {
  return (
    <div className="form-container">
      <form className="form">
        <h1>Welcome</h1>
        <h2>Let's create your account!</h2>
        <input
          type="text"
          placeholder=" "
          className="form--input"
          name="email"
          //onChange={handleChange}
          //value={formData.email}
        />
      </form>
    </div>
  )
}
