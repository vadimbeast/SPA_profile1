import React from "react";
import styles from "./FormControl.module.css"
import {Field} from "redux-form";


export const FormsControls = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                { children }
            </div>
            { hasError && <span>{error}</span> }
        </div>
    );
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormsControls {...props}><textarea {...input} {...restProps}/></FormsControls>
    );
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormsControls {...props}><input {...input} {...restProps}/></FormsControls>
    );
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)