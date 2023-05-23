import React from 'react';
import { Text, Box } from '../src';

export default {
  title: 'Typography/Text',
  component: Text,
  subcomponents: { Box },
  parameters: {
    docs: {
      description: {
        component: `Component for ding text.
        Support all text utilities to control align,
        wrapping, weight, and more.`,
      },
    },
  },
};

function Template(args) {
  return <Text {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Simple text',
};

export function Colors() {
  const examples = [
    { textColor: 'primary', bgColor: null },
    { textColor: 'secondary', bgColor: null },
    { textColor: 'success', bgColor: null },
    { textColor: 'danger', bgColor: null },
    { textColor: 'warning', bgColor: 'dark' },
    { textColor: 'info', bgColor: 'dark' },
    { textColor: 'light', bgColor: 'dark' },
    { textColor: 'dark', bgColor: null },
    { textColor: 'body', bgColor: null },
    { textColor: 'muted', bgColor: null },
    { textColor: 'white', bgColor: 'dark' },
    { textColor: 'black-50', bgColor: null },
    { textColor: 'white-50', bgColor: 'dark' },
  ];

  return (
    examples.map(({ textColor, bgColor }) => (
      <Text
        key={textColor}
        bgColor={bgColor}
        textColor={textColor}
      >
        .text-
        {textColor}
      </Text>
    ))
  );
}

export function Display() {
  return (
    <>
      <Text d="none">
        This is default text
      </Text>
      <Text
        d="block"
        p={2}
        bgColor="light"
        border
      >
        Display block
      </Text>
      <Text
        d="inline-block"
        p={2}
        bgColor="light"
        border
      >
        Display inline-block
      </Text>
      <Text
        d="flex"
        p={2}
        bgColor="light"
        border
      >
        Display flex
      </Text>
      <Text
        d="inline-flex"
        p={2}
        bgColor="light"
        border
      >
        Display inline-flex
      </Text>
    </>
  );
}

export function Print() {
  return (
    <>
      <Text m={0} dPrint="none">
        Screen Only (Hide on dPrint only)
      </Text>
      <Text d="none" m={0} dPrint="block">
        Print Only (Hide on screen only)
      </Text>
      <Text d={{ xs: 'none', lg: 'block' }} m={0} dPrint="block">
        Hide up to large on screen, but always show on dPrint
      </Text>
    </>
  );
}

export function Opacity() {
  return (
    <>
      <Text m={0} textColor="primary">
        This is default primary text
      </Text>
      <Text m={0} textColor="primary" textOpacity={75}>
        This is 75% opacity primary text
      </Text>
      <Text m={0} textColor="primary" textOpacity={50}>
        This is 50% opacity primary text
      </Text>
      <Text m={0} textColor="primary" textOpacity={25}>
        This is 25% opacity primary text
      </Text>
    </>
  );
}

export function TextAlignment() {
  return (
    <>
      <Text textAlign="start">
        Start aligned Text on all viewport sizes.
      </Text>
      <Text textAlign="center">
        Center aligned Text on all viewport sizes.
      </Text>
      <Text textAlign="end">
        End aligned Text on all viewport sizes.
      </Text>
      <Text textAlign={{ sm: 'start' }}>
        Start aligned Text on viewports sized SM (small) or wider.
      </Text>
      <Text textAlign={{ md: 'start' }}>
        Start aligned Text on viewports sized MD (medium) or wider.
      </Text>
      <Text textAlign={{ lg: 'start' }}>
        Start aligned Text on viewports sized LG (large) or wider.
      </Text>
      <Text textAlign={{ xl: 'start' }}>
        Start aligned Text on viewports sized XL (extra-large) or wider.
      </Text>
    </>
  );
}
TextAlignment.storyName = 'Alignments';

export const Wrap = Template.bind({});
Wrap.args = {
  style: { width: '8rem' },
  children: 'This text should wrap.',
  bgColor: 'light',
  border: true,
  wrap: true,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  style: { width: '8rem' },
  children: 'This text should overflow the parent.',
  bgColor: 'light',
  border: true,
  noWrap: true,
};
NoWrap.storyName = 'No wrap';

export const WordBreak = Template.bind({});
WordBreak.args = {
  children: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
  breakWord: true,
};
WordBreak.storyName = 'Word break';

export const Lowercase = Template.bind({});
Lowercase.args = {
  children: 'Lowercased text.',
  texttransform: 'lowercase',
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  children: 'Uppercased text.',
  texttransform: 'uppercase',
};

export const Capitalize = Template.bind({});
Capitalize.args = {
  children: 'CapiTaliZed Text.',
  texttransform: 'capitalize',
};

export function FontSizes() {
  const sizes = [1, 2, 3, 4, 5, 6];

  return (
    sizes.map((size) => (
      <Text key={size} fs={size}>
        .fs-
        {size}
        {' '}
        text
      </Text>
    ))
  );
}
FontSizes.storyName = 'Font sizes';

export function FontWeights() {
  const examples = [
    { value: 'bold', text: 'Bold text.' },
    { value: 'bolder', text: 'Bolder weight text (relative to the parent element).' },
    { value: 'normal', text: 'Normal weight text.' },
    { value: 'light', text: 'Light weight text.' },
    { value: 'lighter', text: 'Lighter weight text (relative to the parent element).' },
  ];

  return (
    examples.map((example) => (
      <Text key={example.value} fw={example.value}>
        {example.text}
      </Text>
    ))
  );
}
FontWeights.storyName = 'Font weights';

export function FontStyles() {
  const examples = [
    { value: 'italic', text: 'Italic text.' },
    { value: 'normal', text: 'Text with normal font style' },
  ];

  return (
    examples.map((example) => (
      <Text key={example.value} fst={example.value}>
        {example.text}
      </Text>
    ))
  );
}
FontStyles.storyName = 'Font styles';

export function LineHeights() {
  return (
    <>
      <Text p={2} lh={1} border>
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element.
        These classes can be customized as needed with our utility API.
      </Text>
      <Text p={2} lh="sm" border>
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element. These classes
        can be customized as needed with our utility API.
      </Text>
      <Text p={2} lh="base" border>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </Text>
      <Text p={2} lh="lg" border>
        This is a long paragraph written to show how the line-height of an element
        is affected by our utilities. Classes are applied to the element itself
        or sometimes the parent element. These classes can be customized as
        needed with our utility API.
      </Text>
    </>
  );
}
LineHeights.storyName = 'Line heights';

export const Monospace = Template.bind({});
Monospace.args = {
  children: 'This is in monospace',
  monospace: true,
};

export const ResetColor = Template.bind({});
ResetColor.args = {
  children: [
    'Muted text with a',
    ' ',
    <a href="#" className="text-reset">
      reset link.
    </a>,
  ],
  textColor: 'muted',
};
ResetColor.storyName = 'Reset color';

export const Underline = Template.bind({});
Underline.args = {
  children: 'This text has a line underneath it.',
  decoration: 'underline',
};

export const LineThrough = Template.bind({});
LineThrough.args = {
  children: 'This text has a line going through it.',
  decoration: 'line-through',
};
LineThrough.storyName = 'Line through';

export function Margins() {
  return (
    <>
      <Text
        bgColor="light"
        border
        m={[1, 2, 3, 4]}
        p={2}
      >
        Example
      </Text>
      <Text
        bgColor="light"
        border
        m={[3, 4]}
        p={2}
      >
        Example 1
      </Text>
      <Text
        bgColor="light"
        border
        mt={3}
        ms={3}
        p={2}
      >
        Example 2
      </Text>
      <Text
        bgColor="light"
        border
        m={[3, null]}
        p={2}
      >
        Example 3
      </Text>
      <Text
        bgColor="light"
        border
        mt={3}
        me={3}
        p={2}
      >
        Example 4
      </Text>
      <Text
        bgColor="light"
        border
        m={[3, 3, 3]}
        p={2}
      >
        Example 5
      </Text>
      <Text
        bgColor="light"
        border
        m={3}
        p={2}
      >
        Example 6
      </Text>
      <Text
        bgColor="light"
        border
        mx={4}
        p={2}
      >
        Example 7
      </Text>
      <Text
        bgColor="light"
        border
        my={4}
        p={2}
      >
        Example 8
      </Text>
    </>
  );
}

export const HorizonalCentering = Template.bind({});
HorizonalCentering.args = {
  style: { width: '200px' },
  children: 'Centered element',
  mx: 'auto',
  bgColor: 'light',
  border: true,
};
HorizonalCentering.storyName = 'Horizonal centering';

export function Paddings() {
  return (
    <>
      <Text bgColor="light" border p={[3, 3, 3, 3]}>
        Example
      </Text>
      <Text bgColor="light" border px={3} py={3}>
        Example 2
      </Text>
      <Text bgColor="light" border p={3}>
        Example 3
      </Text>
    </>
  );
}

export function Custom() {
  return (
    <Text
      as="div"
      p={4}
      bgColor="danger"
      textColor="white"
    >
      <Text
        m={0}
        fs={5}
        fw="bolder"
        textAlign="center"
      >
        Example 4
      </Text>
    </Text>
  );
}
