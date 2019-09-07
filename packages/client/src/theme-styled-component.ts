// tslint:disable:no-duplicate-imports

import * as styledComponents from 'styled-components';

import { ThemedStyledComponentsModule } from 'styled-components';
import { theme } from './theme';

const {
	default: styled,
	css,
	keyframes,
	ThemeProvider,
	createGlobalStyle
	// ... etc
} = (styledComponents as any) as ThemedStyledComponentsModule<typeof theme>;

export { css, keyframes, ThemeProvider, createGlobalStyle };
export default styled;
