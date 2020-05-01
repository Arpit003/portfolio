import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { BREAKPOINTS_VALUE, COLORS } from "./Styles/Constants";

const breakpoints = createBreakpoints({
		keys: ['xs','sm', 'md' , 'lg' , 'xl'],
		values: {
			xs: 0,
			sm: BREAKPOINTS_VALUE.PHABLET,
			md: BREAKPOINTS_VALUE.TABLET,
			lg: BREAKPOINTS_VALUE.LAPTOP,
			xl: BREAKPOINTS_VALUE.DESKTOP
		}
});

export const THEME_SETTINGS = {
	palette: {
		primary: {
			light	: COLORS.PRIMARY_LIGHT,
			main	: COLORS.PRIMARY,
			dark	: COLORS.PRIMARY_DARK,
		},
		secondary: {
			light	: COLORS.SECONDARY_LIGHT,
			main	: COLORS.SECONDARY,
			dark	: COLORS.SECONDARY_DARK,
		},
	},
	breakpoints,
	overrides: {
		MuiAppBar: {
			root: {
				boxShadow	: `0 0px 5px 0px ${COLORS.PRIMARY}`,
				height		: '70px',
				[breakpoints.down('md')] : {
					height: '60px',
				}
			}
		},
		MuiButton: {
			contained: {
				color			: 'white',
				fontSize		: '16px',
				minHeight		: '42px',
				minWidth		: '150px',
				[breakpoints.down('lg')] : {
					minHeight	: '40px',
					fontSize	: '14px'
				},
				[breakpoints.down('sm')] : {
					minWidth	: '120px',
					minHeight	: '32px',
					fontSize	: '14px',
				}
			},
			containedPrimary: {
				color			: 'white',
			},
			containedSecondary: {
				color			: 'white',
			},
			outlinedPrimary: {
				borderRadius	: '25px',
				border			: '1px solid #000000',
				color			: '#000000',
				
			},
			sizeLarge: {
				fontSize: '16px'
			}
		},
	},
	// typography: {
	// 	useNextVariants	: true,
	// 	fontFamily		: "Gotham Book",
	// }
}
