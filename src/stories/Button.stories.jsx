import React from 'react';
import { Button } from '../components';

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
      <Button
        key={theme}
        className="me-2"
        theme={theme.toLowerCase()}
      >
        {theme}
      </Button>
    ))
  );
}

export function Outlines() {
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
    ].map((theme) => (
      <Button
        key={theme}
        className="me-2"
        theme={theme.toLowerCase()}
        isOutline
      >
        {theme}
      </Button>
    ))
  );
}

export function Tags() {
  const examples = [
    { as: 'a', type: null, label: 'Link' },
    { as: 'button', type: 'submit', label: 'Button' },
    { as: 'input', type: 'button', label: 'Input' },
    { as: 'input', type: 'submit', label: 'Submit' },
    { as: 'input', type: 'reset', label: 'Reset' },
  ];

  return (
    <>
      {examples.map(({ as, type, label }) => (
        <Button key={label} as={as} type={type} className="me-2">
          {label}
        </Button>
      ))}
    </>
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

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  as: 'a',
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};
DisabledLink.storyName = 'Disabled link';

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  as: 'input',
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};
DisabledInput.storyName = 'Disabled input';

export const Block = Template.bind({});
Block.args = {
  theme: 'primary',
  isBlock: true,
  children: 'Block',
};

export function ToggleStates() {
  const examples = [
    {
      isActive: false,
      isDisabled: false,
      label: 'Toggle button',
    },
    {
      isActive: true,
      isDisabled: false,
      label: 'Active toggle button',
    },
    {
      isActive: false,
      isDisabled: true,
      label: 'Disabled toggle button',
    },
  ];

  return (
    <>
      {examples.map(({ isActive, label, isDisabled }) => (
        <Button
          key={label}
          isToggle
          isActive={isActive}
          isDisabled={isDisabled}
          className="me-2"
        >
          {label}
        </Button>
      ))}
    </>
  );
}
ToggleStates.storyName = 'Toggle states';

export function ToggleStatesForLinks() {
  const examples = [
    {
      isActive: false,
      isDisabled: false,
      label: 'Toggle button',
    },
    {
      isActive: true,
      isDisabled: false,
      label: 'Active toggle button',
    },
    {
      isActive: false,
      isDisabled: true,
      label: 'Disabled toggle button',
    },
  ];

  return (
    <>
      {examples.map(({ isActive, label, isDisabled }) => (
        <Button
          key={label}
          as="a"
          isToggle
          isActive={isActive}
          isDisabled={isDisabled}
          className="me-2"
        >
          {label}
        </Button>
      ))}
    </>
  );
}
ToggleStatesForLinks.storyName = 'Toggle states for links';
