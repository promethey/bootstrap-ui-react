import React from 'react';
import { Button, ButtonGroup } from '../components';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button },
};

function Template(args) {
  return <ButtonGroup {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [
    <Button>Left</Button>,
    <Button>Middle</Button>,
    <Button>Right</Button>,
  ],
};

export const Active = Template.bind({});
Active.args = {
  children: [
    <Button as="a" isActive aria-current="page">
      Active link
    </Button>,
    <Button as="a">Link</Button>,
    <Button as="a">Link</Button>,
  ],
};

export const MixedStyles = Template.bind({});
MixedStyles.args = {
  'aria-label': 'Basic mixed styles example',
  children: [
    <Button theme="danger">
      Left
    </Button>,
    <Button theme="warning">
      Middle
    </Button>,
    <Button theme="success">
      Right
    </Button>,
  ],
};
MixedStyles.storyName = 'Mixed styles';

export const OutlinedStyles = Template.bind({});
OutlinedStyles.args = {
  'aria-label': 'Basic outlined example',
  children: [
    <Button isOutline>Left</Button>,
    <Button isOutline>Middle</Button>,
    <Button isOutline>Right</Button>,
  ],
};
OutlinedStyles.storyName = 'Outlines styles';
