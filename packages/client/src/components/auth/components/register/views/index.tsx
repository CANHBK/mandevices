import React from 'react';
import {Select,Button} from 'antd';
import { Root, BorderOfRegister, Register, H2, NameAndCourse, ErrorMessage } from './styled';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form, Field } from 'formik';
import './register.css';

interface IRegisterPresentational {
	courses: number[];
	onLoginClick: () => void;
}

interface FormValues {
	fullName:string;
	email: string;
	password: string;
	passwordConfirm:string;
  }

const {Option} = Select;

const RegisterPresentational = (props: IRegisterPresentational & FormikProps<FormValues>) => {
	const { touched, errors, courses, onLoginClick } = props;
	return (
		<Root>
			<BorderOfRegister>
			<Register>
				<H2>Đăng Ký</H2>
				<Form>
					<NameAndCourse>
						<Field
						 className='field'
						  type="text"
						   name="fullName"
						    placeHolder='Họ và Tên'/>
						<Select
						 defaultValue="Chọn"
						  style={{position:'absolute',right:'0px',bottom:'0px'}}>
							{courses.map((course, idx) => (
							<Option key={idx} >{course}</Option>
							))}
						</Select >
					</NameAndCourse>
						{touched.fullName && errors.fullName && 
						<ErrorMessage>{errors.fullName}</ErrorMessage>}
						
						<Field
						 className='field'
						  type="email"
						   name="email"
						    placeHolder='Email'/>
						{touched.email && errors.email && 
						<ErrorMessage>{errors.email}</ErrorMessage>}

						<Field
						 className='field'
						  type="password"
						   name="password"
						    placeHolder='Mật khẩu'/>
						{touched.password && errors.password && 
						<ErrorMessage>{errors.password}</ErrorMessage>}


						<Field
						 className='field'
						  type="password"
						   name="passwordConfirm"
						    placeHolder='Nhập lại mật khẩu'/>
						{touched.passwordConfirm && errors.passwordConfirm && 
						<ErrorMessage>{errors.passwordConfirm}</ErrorMessage>}

					<Button
					 type="primary"
					  htmlType="submit"
					   className="login-form-button"
					    style={{width:'100%',marginTop:'40px'}}>
						Đăng Ký
					</Button>
					<div>hoặc <a onClick={onLoginClick}>Đăng Nhập Ngay!</a></div>
				</Form>
			</Register>
			</BorderOfRegister>
		</Root>
	);
};

interface MyFormProps {
	email?: string;
	password?: string;
	fullName?:string;
	passwordConfirm?:string;
	courses: number[];
	onLoginClick: () => void;
  }

  const MyForm = withFormik<MyFormProps, FormValues>({
	mapPropsToValues: () => ({
	 email: '',
	 password:'',
	 fullName:'',
	 passwordConfirm:'' }),
	validationSchema: Yup.object().shape({
		email: Yup.string()
		.email('email không hợp lệ')
		.required('Quên nhập email kìa'),
		password: Yup.string()
		.min(8, 'mật khẩu phải nhiều hơn 7 kí tự')
		.required('Quên nhập mật khẩu kìa'),
		fullName: Yup.string()
		.min(10, 'tên quá ngắn')
		.max(50, 'tên quá dài')
		.required('Quên nhập tên kìa'),
		passwordConfirm: Yup.string()
		.required('Quên nhập mật khẩu kìa')
		.oneOf(
			[Yup.ref("password")],
			"Mật khẩu không khớp"
		  ),
	  },
	),
	handleSubmit: (values, { setSubmitting }) => {
	  setTimeout(
		() => {
		//   alert(JSON.stringify(values, null, 2));
		  setSubmitting(false);
		},
		1000,
	  );
	},
  })(RegisterPresentational);


export default MyForm;
