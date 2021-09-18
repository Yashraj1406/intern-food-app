import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './Signup.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from 'react-date-picker';
import { CountryDropdown} from 'react-country-region-selector'
import validator from 'validator'

function Signup() {
    const history = useHistory()
    const [value, onChange] = useState(new Date());
    const [emailError, setEmailError] = useState('')
    const [pho,setPho] = useState()
    const [country, setCountry] = useState();

    const validateEmail = (e) => {
        var email = e.target.value
  
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        } else {
        setEmailError('Enter valid Email!')
        }
    }

    function setChange(val) {
        setCountry(val)
    }

    return (
            <div className="form">
            <div className="form-group">
            <h3>Thank you so much for taking time!</h3>
            <p>Please provide the below details!</p>

            <form className="elem">
                <p className="para">First Name:</p>
                <input 
                type="text"
                />
                <p className="para">Last Name:</p>
                <input
                type="text"
                />
                <div className="birthdate">
                    <p className="para">Birth Date:</p>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                    />
                </div>
                <div className='gender'>
                <p className="gender-para">Select Gender:</p>
                <select >
                    <option>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <p className="para">Address:</p>
                <textarea
                type="text"
                />
                <p className="para">Country:</p>
                <CountryDropdown className="countryDropdown"
                    value={country}
                    onChange={(val) => setChange(val)}
                />
                <p className="para">Email:</p>
                <input type="text" id="userEmail" 
                    onChange={(e) => validateEmail(e)}>
                </input>
                <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                    }}>{emailError}
                </span>
                <p className="para">Phone:</p>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={pho}
                    onChange={(val) => setPho(val)}
                />
                <button className="chan-button" onClick={() => {history.push('/')}}>
                    <b>Submit</b>
                </button>
            </form>
            </div>

        </div>
    )
}

export default Signup
