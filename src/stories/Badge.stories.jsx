import React from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Documentation and examples for badges, our small count and labeling component.',
      },
    },
  },
};

function Template(args) {
  return <Badge {...args} />;
}

export function Defaults() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((bgColor) => {
        let textColor;

        switch (bgColor.toLowerCase()) {
          case 'warning':
          case 'info':
          case 'light':
            textColor = 'dark';
            break;

          default:
            textColor = 'white';
            break;
        }

        return (
          <Badge
            key={bgColor}
            bgColor={bgColor.toLowerCase()}
            textColor={textColor}
            className="me-2"
          >
            {bgColor}
          </Badge>
        );
      })}
    </>
  );
}

export function Headings() {
  return (
    <>
      <h1>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h1>
      <h2>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h2>
      <h3>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h3>
      <h4>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h4>
      <h5>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h5>
      <h6>
        Example heading
        {' '}
        <Badge bgColor="secondary">New</Badge>
      </h6>
    </>
  );
}

export function Notifications() {
  return (
    <Button>
      Notifications
      {' '}
      <Badge bgColor="secondary">4</Badge>
    </Button>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  bgColor: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgColor: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  bgColor: 'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  bgColor: 'danger',
  children: 'Danger',
};

export const Warning = Template.bind({});
Warning.args = {
  bgColor: 'warning',
  textColor: 'dark',
  children: 'Warning',
};

export const Info = Template.bind({});
Info.args = {
  bgColor: 'info',
  textColor: 'dark',
  children: 'Info',
};

export const Light = Template.bind({});
Light.args = {
  bgColor: 'light',
  textColor: 'dark',
  children: 'Light',
};

export const Dark = Template.bind({});
Dark.args = {
  bgColor: 'dark',
  children: 'Dark',
};

export function AllRounded() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((bgColor) => {
        let textColor;

        switch (bgColor.toLowerCase()) {
          case 'warning':
          case 'info':
          case 'light':
            textColor = 'dark';
            break;

          default:
            textColor = 'white';
            break;
        }

        return (
          <Badge
            key={bgColor}
            bgColor={bgColor.toLowerCase()}
            textColor={textColor}
            className="me-2"
            isRounded
          >
            {bgColor}
          </Badge>
        );
      })}
    </>
  );
}

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
  children: 'Rounded',
};
