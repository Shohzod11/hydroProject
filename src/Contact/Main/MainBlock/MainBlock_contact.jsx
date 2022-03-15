
import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../_utils/validators/validators'
import moduleName from './MainBlock_contact.module.css'
import { Input, Textarea } from '../../_common/formControl/Text';

let maxLength10 = maxLengthCreator(10)
let maxLength100 = maxLengthCreator(40)

function ContactForm({ handleSubmit }) {
    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div className={moduleName.inp_body}>
                <div className={moduleName.inp_with_label}>
                    <label key={'name'} htmlFor="">Name</label>
                    <Field name='name' component={Input} validate={[required, maxLength10]} className={moduleName.name} type="text" placeholder='Name' />
                </div>
                <div className={moduleName.inp_with_label}>
                    <label key={'name'} htmlFor="">Email</label>
                    <Field name='email' component={Input} validate={[required, maxLength100]} className={moduleName.email} type="email" placeholder='Email' />
                </div>
            </div>
            <div id='comment' className={moduleName.inp_with_labelComment}>
                <label htmlFor="comment">Comment</label>
                <Field name='comment' component={Textarea} validate={[required, maxLength100]} minLength={1} maxLength={300} className={moduleName.comment} type="text" placeholder='Comment' />
            </div>
            <button style={{marginTop:'1rem'}}>Submit</button>
        </form>
    )
}

const ContactReduxForm = reduxForm({ form: " contact " })(ContactForm)


export const MainBlock = () => {
    const onClick = (formData) => {
        console.log(formData);
    }
    return (
        <div className={moduleName.body}>
            <h1 className={moduleName.title}>Contact</h1>
            <ContactReduxForm onSubmit={onClick} />
        </div>
    )
}