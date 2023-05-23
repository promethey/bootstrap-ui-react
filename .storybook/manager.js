import { addons } from '@storybook/addons';
import CustomTheme from './CustomTheme';
import favicon from '../static/favicon.png';

addons.setConfig({
  theme: CustomTheme,
});

// change favicon in document
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

