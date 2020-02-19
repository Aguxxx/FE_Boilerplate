import { UserVuetifyPreset } from "vuetify";

export const VUETIFY_CONFIG : UserVuetifyPreset = {
	icons: {
		iconfont: 'fa',
	},
	theme: {
			dark: true,
			themes: {
				dark: {
					primary: '#AE3B00',
					accent: '#BE4343',
					secondary: '#714D02',
					success: '#407842',
					info: '#94B3CB',
					warning: '#E7FF00',
					error: '#C31414'
				},
				light: {
					primary: '#AE3B00',
					accent: '#C63B3B',
					secondary: '#714D02',
					success: '#407842',
					info: '#94B3CB',
					warning: '#FFEC00',
					error: '#DB0000'
				}
			}
		}
};
