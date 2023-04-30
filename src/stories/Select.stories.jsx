import React from 'react';
import { Select, Box } from 'components';

export default {
  title: 'Forms/Select',
  component: Select,
  subcomponents: {
    Option: Select.Option,
    Box,
  },
  parameters: {
    docs: {
      description: {
        component: `Customize the native selects
        with custom CSS that changes the element’s initial appearance.`,
      },
    },
  },
};

function Story(args) {
  return (
    <Select {...args}>
      <Select.Option isSelected>
        Open this select menu
      </Select.Option>
      <Select.Option value={1}>
        One
      </Select.Option>
      <Select.Option value={2}>
        Two
      </Select.Option>
      <Select.Option value={3}>
        Three
      </Select.Option>
    </Select>
  );
}

export const Default = Story.bind({});
Default.args = {};

export const Large = Story.bind({});
Large.args = {
  size: 'lg',
};

export const Small = Story.bind({});
Small.args = {
  size: 'sm',
};

export const Multiple = Story.bind({});
Multiple.args = {
  isMultiple: true,
};

export const Length = Story.bind({});
Length.args = {
  length: 3,
};

export const Disabled = Story.bind({});
Disabled.args = {
  isDisabled: true,
};
