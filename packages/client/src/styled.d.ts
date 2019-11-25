import { Theme } from './theme';
import {
	ThemedStyledComponentsModule,
	ThemedStyledInterface,
	ThemedBaseStyledInterface
} from 'styled-components';

const ModuleInterface: ThemedStyledComponentsModule<Theme>;

const styled = ModuleInterface.default as ThemedBaseStyledInterface<Theme>;
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
declare module 'styled-components/macro' {
	export const createGlobalStyle: typeof ModuleInterface.createGlobalStyle;
	export const css: typeof ModuleInterface.css;
	export const keyframes: typeof ModuleInterface.keyframes;
	export const isStyledComponent: typeof ModuleInterface.isStyledComponent;
	export const ServerStyleSheet: typeof ModuleInterface.ServerStyleSheet;
	export const StyleSheetManager: typeof ModuleInterface.StyleSheetManager;
	export const ThemeConsumer: typeof ModuleInterface.ThemeConsumer;
	export const ThemeContext: typeof ModuleInterface.ThemeContext;
	export const ThemeProvider: typeof ModuleInterface.ThemeProvider;
	export const withTheme: typeof ModuleInterface.withTheme;
	export default styled;
}
