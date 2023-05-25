import { create } from '@storybook/theming';
import brandImage from '../static/bootstrap-ui-low.png';

export default create({
  base: 'light',
  brandTitle: 'Bootstrap UI',
  brandUrl: 'https://github.com/promethey/bootstrap-ui-react',
  brandImage: brandImage,
  fontBase: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";',
});