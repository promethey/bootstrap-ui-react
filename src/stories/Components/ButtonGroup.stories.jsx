import React from 'react';
import { Button, ButtonGroup, Box } from 'components';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button, Box },
  parameters: {
    docs: {
      description: {
        component: `Group a series of buttons together on a single line
        or stack them in a vertical column.`,
      },
    },
  },
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
    <Button as="a" isPressed aria-current="page">
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

export function Sizing() {
  return (
    <>
      <ButtonGroup size="lg">
        <Button theme="dark" isOutline>
          Left
        </Button>
        <Button theme="dark" isOutline>
          Middle
        </Button>
        <Button theme="dark" isOutline>
          Right
        </Button>
      </ButtonGroup>
      <div className="my-2" />
      <ButtonGroup>
        <Button theme="dark" isOutline>
          Left
        </Button>
        <Button theme="dark" isOutline>
          Middle
        </Button>
        <Button theme="dark" isOutline>
          Right
        </Button>
      </ButtonGroup>
      <div className="my-2" />
      <ButtonGroup size="sm">
        <Button theme="dark" isOutline>
          Left
        </Button>
        <Button theme="dark" isOutline>
          Middle
        </Button>
        <Button theme="dark" isOutline>
          Right
        </Button>
      </ButtonGroup>
    </>
  );
}

export const VerticalButtons = Template.bind({});
VerticalButtons.args = {
  'aria-label': 'Basic vertical buttons example',
  isVertical: true,
  children: [
    <Button theme="dark">Button</Button>,
    <Button theme="dark">Button</Button>,
    <Button theme="dark">Button</Button>,
    <Button theme="dark">Button</Button>,
    <Button theme="dark">Button</Button>,
    <Button theme="dark">Button</Button>,
  ],
};
VerticalButtons.storyName = 'Vertical buttons';
