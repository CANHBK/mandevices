import * as React from 'react';
import {useState} from 'react';
import { Button, Checkbox } from 'antd';
import { BorderOfLogin, Login, H2, RememberAndForgot, Root, ErrorMessage } from './styled';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form, Field } from 'formik';
import './login.css';

interface FormValues {
	email: string;
	password:string;
  }

interface MyOwnsProps {
	onRegisterClick: () => void
}

const LoginPresentational = (props: MyOwnsProps & FormikProps<FormValues>) => {

	const { touched, errors, onRegisterClick } = props;
	const [check,setCheck] = useState("off");

	return (
		<Root>
			<BorderOfLogin>
				<Login>
					<H2>Đăng Nhập</H2> 
					<Form autoComplete={check}>
					<Field
					 className='fieldLogin'
					  type="email"
					   name="email"
					    placeHolder='email'/>
					{touched.email && errors.email && 
					<ErrorMessage>{errors.email}</ErrorMessage>}
					
					<Field
					 className='fieldLogin'
					  type="password"
					   name="password"
					    placeHolder='password' />
					{touched.password && errors.password && 
					<ErrorMessage>{errors.password}</ErrorMessage>}
		
					<RememberAndForgot>
						<Checkbox>Lưu Đăng Nhập</Checkbox>
						<a className="login-form-forgot" href="">
						Quên Mật Khẩu
						</a>
					</RememberAndForgot>
		
					<Button
					 type="primary"
					  htmlType="submit"
					   className="login-form-button"
					    style={{width:'100%'}}>
					Đăng Nhập
					</Button>
					<div>
						hoặc 
						<a href='' onClick={onRegisterClick}>
							Đăng Ký Ngay!
						</a>
					</div>
					</Form>
				</Login>
			</BorderOfLogin>
		</Root>
	);
};

interface FormProps {
	email?: string;
	password?:string;
	onRegisterClick: () => void
}

 const UserLoginForm = withFormik<FormProps, FormValues>({
	mapPropsToValues: () => ({ email: '', password:'' }),
	validationSchema: Yup.object().shape({
		email: Yup.string()
		.email('email không hợp lệ')
		.required('Quên nhập email kìa'),
		password: Yup.string()
		.min(8, 'mật khẩu phải nhiều hơn 7 kí tự')
		.required('Quên nhập mật khẩu kìa'),
	  },
	),
	handleSubmit: (values, { setSubmitting }) => {
	  setTimeout(
		() => {
		  setSubmitting(false);
		},
		1000,
	  );
	},
  })(LoginPresentational);

export default UserLoginForm; 
