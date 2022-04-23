import { extendTheme } from '@chakra-ui/react';
import { mode, darken, whiten } from '@chakra-ui/theme-tools';

const CustomButton = {
	baseStyle: {},
	sizes: {},
	variants: {
		primary: (props) => ({
			bg: 'primary',
			color: 'default',
			fontFamily: 'body',
			border: '2px solid',
			borderColor: 'primary',
			textTransform: 'uppercase',
			shadow: 'xl',
			_hover: {
				bg: mode(darken('primary', 10), whiten('primary', 10))(props),
			},
			_focus: {
				bg: mode(darken('primary', 10), whiten('primary', 10))(props),
			},
			_active: {
				bg: mode(darken('primary', 10), whiten('primary', 10))(props),
			},
		}),
		primaryOutline: (props) => ({
			bg: 'default',
			color: 'primary',
			fontFamily: 'body',
			border: '2px solid',
			borderColor: 'primary',
			textTransform: 'uppercase',
			shadow: 'xl',
			_hover: {
				bg: mode(darken('default', 4), whiten('default', 4))(props),
			},
			_focus: {
				bg: mode(darken('default', 4), whiten('default', 4))(props),
			},
			_active: {
				bg: mode(darken('default', 4), whiten('default', 4))(props),
			},
		}),
		secondary: (props) => ({}),
		secondaryOutline: (props) => ({}),
		default: (props) => ({
			bg: 'default',
			color: 'primary',
			fontFamily: 'body',
			border: '2px solid',
			borderColor: 'primary',
			textTransform: 'uppercase',
			shadow: 'xl',
			_hover: {
				bg: mode(darken('default', 10), whiten('default', 10))(props),
			},
			_focus: {
				bg: mode(darken('default', 10), whiten('default', 10))(props),
			},
			_active: {
				bg: mode(darken('default', 10), whiten('default', 10))(props),
			},
		}),
		defaultOutline: (props) => ({}),
	},
	defaultProps: {},
};

const theme = extendTheme({
	colors: {
		primary: 'hsla(2, 51%, 11%, 1)',
		secondary: 'hsla(2, 51%, 11%, 0.4)',
		default: 'hsla(36, 100%, 99%, 1)',
	},
	fonts: {
		heading: 'Rubik Moonrocks',
		body: 'Bellefair',
	},
	components: {
		Button: CustomButton,
	},
});

export default theme;
