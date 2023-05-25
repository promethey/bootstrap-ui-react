import React from 'react';
import { CloseButton } from '../src';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: `A generic close button for dismissing
        content like modals and alerts.`,
      },
    },
  },
};

function Template(args) {
  return <CloseButton {...args} />;
}

export const Default = Template.bind();
Default.args = {};

export const White = Template.bind();
White.args = { theme: 'white' };
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
