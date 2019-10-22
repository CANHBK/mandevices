const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	}),
	fixBabelImports('formik-antd', {
		libraryName: '@jbuschke/formik-antd',
		libraryDirectory: 'es',
		style: 'css'
	})
);
