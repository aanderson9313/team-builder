import React, { useState } from 'react';
import './Form.css';

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", email: "", role: "" })
    }

    return (
        <form onSubmit = {submitForm}>
            <label className = 'label' htmlFor = 'name'>Team Member </label>
            <input className = 'input'
             id = 'name' 
             name = 'name' 
             type = 'text' 
             placeholder = 'Name' 
             onChange = {changeHandler} 
             value = {member.name}
              />
            <label className = 'label' htmlFor = 'email'>Email </label>
            <input className = 'input'
            id = 'email' 
            name = 'email' 
            type = 'text' 
            placeholder = 'Email' 
            onChange = {changeHandler} 
            value = {member.email}
             />
            <label className = 'label' htmlFor = 'role'>Role</label>
            <input className = 'input'
            id = 'role' 
            name = 'role' 
            type = 'text' 
            placeholder = 'Role' 
            onChange = {changeHandler} 
            value = {member.role} 
            />
        
            <button type = 'submit'>Add Member</button>
        
        </form>
    )
}
export default Form;