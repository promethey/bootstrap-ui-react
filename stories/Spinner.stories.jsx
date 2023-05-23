import React from 'react';
import {
  Spinner, Button, Flex, Text, Box,
} from '../src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  subcomponents: { Box },
  parameters: {
    docs: {
      description: {
        component: `Indicate the loading state of a component or page
        with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.`,
      },
    },
  },
};

function Template(args) {
  return <Spinner {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export function Colors() {
  const examples = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  return (
    <>
      {examples.map((example) => (
        <Spinner theme={example} me={2} />
      ))}
    </>
  );
}

export const GrowingSpinner = Template.bind({});
GrowingSpinner.args = {
  type: 'grow',
};
GrowingSpinner.storyName = 'Growing spinner';

export function GrowingColors() {
  const examples = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  return (
    <>
      {examples.map((example) => (
        <Spinner theme={example} type="grow" me={2} />
      ))}
    </>
  );
}
GrowingColors.storyName = 'Growing colors';

export const Margin = Template.bind({});
Margin.args = {
  margin: 5,
};

export function FlexExample() {
  return (
    <Flex justifyContent="center">
      <Spinner />
    </Flex>
  );
}
FlexExample.storyName = 'Flex example';

export function Loading() {
  return (
    <Flex justifyContent="center">
      <Text as="strong">Loading...</Text>
      <Spinner ms="auto" />
    </Flex>
  );
}

export function Floats() {
  return (
    <Box className="clearfix">
      <Spinner className="float-end" />
    </Box>
  );
}

export function TextAlignCenter() {
  return (
    <Text as="div" align="center">
      <Spinner />
    </Text>
  );
}
TextAlignCenter.storyName = 'Text align center';

export function Small() {
  return (
    <>
      <Spinner me={2} small />
      <Spinner type="grow" small />
    </>
  );
}

export function CustomSize() {
  return (
    <>
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        me={2}
      />
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        type="grow"
      />
    </>
  );
}
CustomSize.storyName = 'Custom size';

export function Buttons() {
  return (
    <>
      <Button me={2} disabled>
        <Spinner small />
      </Button>
      <Button disabled>
        <Spinner small />
        {' '}
        Loading...
      </Button>
    </>
  );
}

export function GrowButtons() {
  return (
    <>
      <Button me={2} disabled>
        <Spinner type="grow" small />
      </Button>
      <Button disabled>
        <Spinner type="grow" small />
        {' '}
        Loading...
      </Button>
    </>
  );
}
GrowButtons.storyName = 'Grow buttons';
