import React from 'react';
import { Heading, Text } from '../src';

export default {
  title: 'Typography/Heading',
  component: Heading,
  subcomponents: { Text },
};

function Story(args) {
  return <Heading {...args} />;
}

export const Default = Story.bind({});
Default.args = {
  children: 'Bootstrap heading',
};

export function Headings() {
  const examples = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ];

  return (
    examples.map((example) => (
      <Heading as={example}>
        {example}
        . Bootstrap heading
      </Heading>
    ))
  );
}

export const CastomizingHeadings = Story.bind({});
CastomizingHeadings.args = {
  as: 'h3',
  children: [
    'Fancy display heading',
    ' ',
    <Text as="small" textColor="muted">
      With faded secondary text
    </Text>,
  ],
};
CastomizingHeadings.storyName = 'Castomizing headings';

export function DisplayHeadings() {
  const examples = [
    1,
    2,
    3,
    4,
    5,
    6,
  ];

  return (
    examples.map((example) => (
      <Heading display={example}>
        Display
        {' '}
        {example}
      </Heading>
    ))
  );
}
DisplayHeadings.storyName = 'Display headings';
