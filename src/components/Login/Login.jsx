import React from "react";
import { connect } from "react-redux";
import {reduxForm, Field} from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormControl.module.css";


const LoginForm= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder="Email" name={"email"} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder="Password" name={"password"} component={Input} type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            { props.error && <div className={ style.formSummaryError }>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>

    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={`/profile/userId`}/>
    }
    return <div>
        <h1>Login</h1>
        
       <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);