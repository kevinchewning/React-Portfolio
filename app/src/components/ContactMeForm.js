import React, { useState } from "react";
import { send } from 'emailjs-com';

export default function ContactMeForm() {
    const [formInput, setFormInput] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: ""
    });
    
    const handleInputChange = (event) => {
        setFormInput({...formInput, [event.target.name]: event.target.value})
    }

    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function formIsValid (form) {
        if (Object.keys(form).every((el) => form[el])) {
            if (emailIsValid(form.from_email)){
                return true;
            } else {
                alert('Please enter a valid email.')
                return false;
            }
        } else {
            alert('Please do not leave fields empty.');
            return false;
        }
    }

    var hasFired = false;
    const fieldIsEmpty = (event) => {
        if(event.target.value === "" && !hasFired) {
            hasFired = true;
            alert('Please do not leave fields empty.');
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formIsValid(formInput)) {
            send(
                'service_hwl7o5a',
                'template_n6evtb5',
                formInput,
                'user_VKpyPFrpHnlFJ5vGKbLT5'
            )
            setFormInput({
                from_name: "",
                from_email: "",
                subject: "",
                message: ""
            })
        }
    }

    return (
        <form class="mb-4">
            <div class="field">
                <label class="label has-text-white" for="form-name">Name</label>
                <div class="control">
                    <input
                        id="form-name"
                        class="input"
                        type="text"
                        name="from_name"
                        value={formInput.from_name}
                        onChange={handleInputChange}
                        onBlur={fieldIsEmpty}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label has-text-white" for="form-email">Email</label>
                <div class="control">
                    <input 
                        id="form-email" 
                        class="input" 
                        type="text"
                        name="from_email"
                        value={formInput.from_email}
                        onChange={handleInputChange}
                        onBlur={fieldIsEmpty}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label has-text-white" for="form-subject">Subject</label>
                <div class="control">
                    <input 
                        id="form-subject" 
                        class="input" 
                        type="text"
                        name="subject"
                        value={formInput.subject}
                        onChange={handleInputChange}
                        onBlur={fieldIsEmpty}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label has-text-white" for="form-message">Message</label>
                <div class="control">
                    <textarea 
                        id="form-message" 
                        class="textarea"
                        name="message"
                        value={formInput.message}
                        onChange={handleInputChange}
                        onBlur={fieldIsEmpty}
                    ></textarea>
                </div>
            </div>
            <div class="control">
                <button id="submit-button" class="button is-light" type="submit" onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
    );
}