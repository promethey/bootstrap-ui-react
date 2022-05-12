import React from 'react';
import { Container } from '../components';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: `Containers are a fundamental building block of Bootstrap
        that contain, pad, and align your content within a given device or viewport.`,
      },
    },
  },
};

function Template(args) {
  return <Container {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Container',
  padding: 3,
  bgColor: 'light',
  isBorder: true,
};

export function Responsive() {
  const examples = [
    { value: 'sm', name: 'small' },
    { value: 'md', name: 'medium' },
    { value: 'lg', name: 'large' },
    { value: 'xl', name: 'extra large' },
    { value: 'xxl', name: 'extra extra large' },
  ];

  return (
    examples.map((example) => (
      <Container
        key={example.value}
        isFluid={example.value}
        mb={3}
        padding={3}
        bgColor="light"
        isBorder
      >
        100% wide until
        {' '}
        {example.name}
        {' '}
        breakpoint
      </Container>
    ))
  );
}

export const Fluid = Template.bind({});
Fluid.args = {
  children: 'Fluid container',
  padding: 3,
  bgColor: 'light',
  isBorder: true,
  isFluid: true,
};

export function Visibility() {
  return (
    <>
      <Container
        mb={3}
        padding={3}
        bgColor="light"
        isBorder
        isVisible
      >
        Visible container
      </Container>
      <Container
        padding={3}
        bgColor="light"
        isBorder
        isInvisible
      >
        Invisible container
      </Container>
    </>
  );
}
