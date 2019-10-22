import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Email không đúng định dạng')
		.required('Không được trống'),
	password: Yup.string()
		.min(6, 'Mật khẩu phải có tối thiểu 6 kí tự')
		.required('Không được trống')
});

export const AuthSchema = Yup.object().shape({
	name: Yup.string().required('Không được trống'),
	email: Yup.string()
		.email('Email không đúng định dạng')
		.required('Không được trống'),
	password: Yup.string()
		.min(6, 'Mật khẩu phải có tối thiểu 6 kí tự')
		.required('Không được trống'),
	course: Yup.number().required('Không được trống'),
	confirmPassword: Yup.string().test(
		'password match',
		'Mật khẩu không khớp',
		function(value) {
			return this.parent.password === value;
		}
	)
});
