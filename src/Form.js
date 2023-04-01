import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState({
        fullname:"",
        email: "",
        password: "",
        Confirmpassword: "",
        joinedNewsletter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.Confirmpassword) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          type="text"
          placeholder=" "
          id="fullname"
          className="input"
          name="fullname"
          onChange={handleChange}
          value={FormData.fullname}
        />
        <div className="cut cut-fullname"></div>
        <label htmlFor="fullname" className="placeholder">
          Full name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          type="text"
          placeholder=" "
          id="email"
          className="input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <div className="cut cut-email"></div>
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
          onChange={handleChange}
          value={formData.password}
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
          onChange={handleChange}
          value={formData.Confirmpassword}
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
          onChange={handleChange}
          checked={formData.joinedNewsletter}
        />
        <label htmlFor="okayToEmail">I want to join the newsletter</label>
      </div>
      <button className="submit">Submit</button>
    </form>
  )
}
