import React from 'react';
import { ContactWrapper } from './Contact.style';
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from 'Components/Website.style';
import { TextField, FormControl, FormLabel } from '@material-ui/core';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Formik, Form } from 'formik';

const initial_values = { name: '', email: '', subject: '', message: '' }


function Contact(props) {

    /* 
    * submit register form
    */
    const handleSubmit = async (values) => {

        //api call
        // new Api().post('/path', values);
    }


    return (
        <ContactWrapper>
            <div className="form-section">
                <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
                <BodyTagWrapper>{"<body>"}</BodyTagWrapper>

                <div className="html-tag-h1-start">{"<h1>"}</div>
                <AnimationTextWrapper>
                    <div className="intro anim-typewriter">
                        {separateWords('Contact', 'word')}
                &nbsp;
                {separateWords("me", 'word')}
                    </div>
                </AnimationTextWrapper>
                <div className="html-tag-h1-end">{"</h1>"}</div>

                <span>
                    <h3 className="paragraph">
                        {"I am interested in opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either."}
                    </h3>
                </span>

                <Formik
                    initialValues={initial_values}
                    onSubmit={handleSubmit}
                >
                    {props => <ContactForm {...props} />}
                </Formik>

                <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
                <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
            </div>
            <div className="google-map">
                <div className="map">
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233
                        }}
                    />
                </div>
            </div>
        </ContactWrapper>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcsG_EYLdy-GnV2zQP240iRFFlQvDgVeo'
})(Contact);

/*
 *  COMMON FUNCTION FOR CREATE WORD & SINGLE CHARACTER ANIMATION
 */
const separateWords = (words, type = "single") => {

    let text = (type === "single") ? words.split('') : words.split(' ');

    let spans = undefined;

    spans = text.map((item, index) => {
        return <span key={index} className="blast">{item}</span>
    })

    return spans;
}

//API KEY
//AIzaSyDcsG_EYLdy-GnV2zQP240iRFFlQvDgVeo

const ContactForm = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid
}) => (
        <Form>
            <TextField
                id="name"
                label="Name"
                variant="filled"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                className="inline-field"
                disableUnderline={false}
                InputProps={{
                    // className: `change-password-input ${touched.current_password && errors.current_password && "input-error"}`,
                    classes: {
                        // input: "modal-input",
                        // notchedOutline: "input-fieldset",
                        underline: "underline-color"
                    }
                }}
                InputLabelProps={{
                    classes: {
                        outlined: `${(!touched.name || errors.name) && "label"}`
                    }
                }}
            />
        </Form>
    )