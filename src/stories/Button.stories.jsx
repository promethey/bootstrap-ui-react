import React from 'react';
import { Button, Flex, Box } from 'components';

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { Box },
  parameters: {
    docs: {
      description: {
        component: `Use Bootstrap custom button styles for actions in forms,
        dialogs, and more with support for multiple sizes, states, and more`,
      },
    },
  },
  args: { onClick: null },
};

function DefaultTemplate(args) {
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

export function BaseClass() {
  return (
    <Button theme={null}>Base class</Button>
  );
}
BaseClass.storyName = 'Base class';

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

export function Width() {
  return (
    <Flex direction="column" padding={2} bgColor="light" border>
      <Button width={25} maxWidth={100} mb={2}>
        Width 25%
      </Button>
      <Button width={50} mb={2}>
        Width 50%
      </Button>
      <Button width={75} mb={2}>
        Width 75%
      </Button>
      <Button width={100} mb={2}>
        Width 100%
      </Button>
      <Button width="auto" mb={2}>
        Width auto
      </Button>
      <Button width={100}>Block</Button>
    </Flex>
  );
}

export function StretchedLink() {
  return (
    <Button as="a" isStretchedLink>
      Stretched link
    </Button>
  );
}

export function Opacity() {
  return (
    <>
      <Button opacity={100} me={2}>100%</Button>
      <Button opacity={75} me={2}>75%</Button>
      <Button opacity={50} me={2}>50%</Button>
      <Button opacity={25}>25%</Button>
    </>
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

export const Primary = DefaultTemplate.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary',
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary',
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  theme: 'success',
  children: 'Success',
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
  theme: 'danger',
  children: 'Danger',
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
  theme: 'warning',
  children: 'Warning',
};

export const Info = DefaultTemplate.bind({});
Info.args = {
  theme: 'info',
  children: 'Info',
};

export const Light = DefaultTemplate.bind({});
Light.args = {
  theme: 'light',
  children: 'Light',
};

export const Dark = DefaultTemplate.bind({});
Dark.args = {
  theme: 'dark',
  children: 'Dark',
};

export const Link = DefaultTemplate.bind({});
Link.args = {
  theme: 'link',
  children: 'Link',
};

export const Outline = DefaultTemplate.bind({});
Outline.args = {
  theme: 'primary',
  outline: true,
  children: 'Outline',
};

export const Small = DefaultTemplate.bind({});
Small.args = {
  theme: 'primary',
  size: 'sm',
  children: 'Small',
};

export const Large = DefaultTemplate.bind({});
Large.args = {
  theme: 'primary',
  size: 'lg',
  children: 'Large',
};

export const Disabled = DefaultTemplate.bind({});
Disabled.args = {
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};

export const DisabledLink = DefaultTemplate.bind({});
DisabledLink.args = {
  as: 'a',
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};
DisabledLink.storyName = 'Disabled link';

export const DisabledInput = DefaultTemplate.bind({});
DisabledInput.args = {
  as: 'input',
  theme: 'primary',
  isDisabled: true,
  children: 'Disabled',
};
DisabledInput.storyName = 'Disabled input';

export const Block = DefaultTemplate.bind({});
Block.args = {
  theme: 'primary',
  width: 100,
  children: 'Block',
};

export function ToggleStates() {
  const examples = [
    {
      isPressed: false,
      isDisabled: false,
      label: 'Toggle button',
    },
    {
      isPressed: true,
      isDisabled: false,
      label: 'Active toggle button',
    },
    {
      isPressed: false,
      isDisabled: true,
      label: 'Disabled toggle button',
    },
  ];

  return (
    <>
      {examples.map(({ isPressed, label, isDisabled }) => (
        <Button
          key={label}
          bsToggle="button"
          autoComplete="off"
          isPressed={isPressed}
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
      isPressed: false,
      isDisabled: false,
      label: 'Toggle button',
    },
    {
      isPressed: true,
      isDisabled: false,
      label: 'Active toggle button',
    },
    {
      isPressed: false,
      isDisabled: true,
      label: 'Disabled toggle button',
    },
  ];

  return (
    <>
      {examples.map(({ isPressed, label, isDisabled }) => (
        <Button
          key={label}
          as="a"
          bsToggle="button"
          autoComplete="off"
          isPressed={isPressed}
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
