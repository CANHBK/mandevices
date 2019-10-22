export const theme = {
	color: {
		purpleLight: '#302D43',
		purpleDark: '#282639',
		neonGreen: '#92CF43',
		greyLight: '#fafbfd',
		lightGrey: '##98a6ad',
		darkGrey: '#EAEDF3',
		hoverBackground: '#f1f3fa',
		mainBackground: '#f9fafd',
		backgroundColor: '#FAFBFE'
	},
	dimension: {
		maxSideMenu: '280px',
		appBar: '56px'
	}
};

const breakPonits = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const device = {
	mobileS: `(min-width: ${breakPonits.mobileS})`,
	mobileM: `(min-width: ${breakPonits.mobileM})`,
	mobileL: `(min-width: ${breakPonits.mobileL})`,
	tablet: `(min-width: ${breakPonits.tablet})`,
	laptop: `(min-width: ${breakPonits.laptop})`,
	laptopL: `(min-width: ${breakPonits.laptopL})`,
	desktop: `(min-width: ${breakPonits.desktop})`,
	desktopL: `(min-width: ${breakPonits.desktop})`
};

export type Theme = typeof theme;
