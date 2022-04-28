import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Use Bootstrap’s custom button styles for actions in forms,
        dialogs, and more with support for multiple sizes, states, and more.`,
      },
    },
  },
  args: { onClick: null },
};

function Template(args) {
  return <Button {...args} />;
}

export function All() {
  return (
    [
      'Primary',
      'Secondary',
      'Success',
      'Danger',
      'Warning',
      'Info',
      'Light',
      'Dark',
      'Link',
    ].map((theme) => (
      <Button key={theme} theme={theme.toLowerCase()} className="me-2">
        {theme}
      </Button>
    ))
  );
}

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
  children: 'Danger',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
  children: 'Warning',
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info',
  children: 'Info',
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  children: 'Light',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  children: 'Dark',
};

export const Link = Template.bind({});
Link.args = {
  theme: 'link',
  children: 'Link',
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'primary',
  outline: true,
  children: 'Outline',
};

export const Small = Template.bind({});
Small.args = {
  theme: 'primary',
  size: 'sm',
  children: 'Small',
};

export const Large = Template.bind({});
Large.args = {
  theme: 'primary',
  size: 'lg',
  children: 'Large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};

export const Block = Template.bind({});
Block.args = {
  theme: 'primary',
  isBlock: true,
  children: 'Block',
};
