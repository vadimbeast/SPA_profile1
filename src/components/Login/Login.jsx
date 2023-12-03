import React from "react";
import {reduxForm, Field} from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";


const LoginForm= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder="Login" name={"login"} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder="Password" name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login= (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        
       <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

export default Login;