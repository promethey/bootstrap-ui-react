import React from 'react';
import { Spinner, Button } from '../components';

export default {
  title: 'Components/Spinner',
  component: Spinner,
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
        <Spinner theme={example} className="me-2" />
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
        <Spinner theme={example} type="grow" className="me-2" />
      ))}
    </>
  );
}
GrowingColors.storyName = 'Growing colors';

export const Margin = Template.bind({});
Margin.args = {
  className: 'm-5',
};

export function Flex() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner />
    </div>
  );
}

export function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <strong>Loading...</strong>
      <Spinner className="ms-auto" />
    </div>
  );
}

export function Floats() {
  return (
    <div className="clearfix">
      <Spinner className="float-end" />
    </div>
  );
}

export function TextAlign() {
  return (
    <div className="text-center">
      <Spinner />
    </div>
  );
}
TextAlign.storyName = 'Text align';

export function Small() {
  return (
    <>
      <Spinner isSmall className="me-2" />
      <Spinner type="grow" isSmall />
    </>
  );
}

export function CustomSize() {
  return (
    <>
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        className="me-2"
        isSmall
      />
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        type="grow"
        isSmall
      />
    </>
  );
}
CustomSize.storyName = 'Custom size';

export function Buttons() {
  return (
    <>
      <Button isDisabled className="me-2">
        <Spinner isSmall />
      </Button>
      <Button isDisabled>
        <Spinner isSmall />
        {' '}
        Loading...
      </Button>
    </>
  );
}

export function GrowButtons() {
  return (
    <>
      <Button isDisabled className="me-2">
        <Spinner type="grow" isSmall />
      </Button>
      <Button isDisabled>
        <Spinner type="grow" isSmall />
        {' '}
        Loading...
      </Button>
    </>
  );
}
GrowButtons.storyName = 'Grow buttons';
