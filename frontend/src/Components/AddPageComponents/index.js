import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"

function AddPageComponents() {
    return (
        <div className='mainAdd'>
            <Formik
                initialValues={{ icon: '', title: '', description: '' }}
                validationSchema={Yup.object({
                    icon: Yup.string().required('Icon...'),
                    title: Yup.string().required('Title...'),
                    description: Yup.string().required('Description...'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:8080/users", values)
                }}
            >
                <Form>
                    <div className='mainInps'>
                        <div className='inp'>
                            <label htmlFor="icon"></label>
                            <Field name="icon" type="text" placeholder="Icon class name" className="input"/>
                            <div style={{color:"red"}}><ErrorMessage name="icon" /></div>
                        </div>

                        <div className='inp'>
                            <label htmlFor="title"></label>
                            <Field name="title" type="text" placeholder="Title" className="input" />
                            <div style={{color:"red"}}><ErrorMessage name="title" /></div>
                        </div>

                        <div className='inp'>
                            <label htmlFor="description"></label>
                            <Field name="description" type="text" placeholder="Description" className="input" />
                            <div style={{color:"red"}}><ErrorMessage name="description" /></div>
                        </div>

                        <button className='btnInp' type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddPageComponents