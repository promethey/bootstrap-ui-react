import React from 'react';
import { Text, Box } from 'components';

export default {
  title: 'Typography/Text',
  component: Text,
  subcomponents: { Box },
  parameters: {
    docs: {
      description: {
        component: `Component for displaying text.
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
      <Text display="none">
        This is default text
      </Text>
      <Text
        display="block"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display block
      </Text>
      <Text
        display="inline-block"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display inline-block
      </Text>
      <Text
        display="flex"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display flex
      </Text>
      <Text
        display="inline-flex"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display inline-flex
      </Text>
    </>
  );
}

export function Print() {
  return (
    <>
      <Text margin={0} displayPrint="none">
        Screen Only (Hide on displayPrint only)
      </Text>
      <Text margin={0} display="none" displayPrint="block">
        Print Only (Hide on screen only)
      </Text>
      <Text margin={0} display="none" displayLg="block" displayPrint="block">
        Hide up to large on screen, but always show on displayPrint
      </Text>
    </>
  );
}

export function Opacity() {
  return (
    <>
      <Text margin={0} textColor="primary">
        This is default primary text
      </Text>
      <Text margin={0} textColor="primary" textOpacity={75}>
        This is 75% opacity primary text
      </Text>
      <Text margin={0} textColor="primary" textOpacity={50}>
        This is 50% opacity primary text
      </Text>
      <Text margin={0} textColor="primary" textOpacity={25}>
        This is 25% opacity primary text
      </Text>
    </>
  );
}

export function TextAlignment() {
  return (
    <>
      <Text align="start">
        Start aligned Text on all viewport sizes.
      </Text>
      <Text align="center">
        Center aligned Text on all viewport sizes.
      </Text>
      <Text align="end">
        End aligned Text on all viewport sizes.
      </Text>
      <Text alignSm="start">
        Start aligned Text on viewports sized SM (small) or wider.
      </Text>
      <Text alignMd="start">
        Start aligned Text on viewports sized MD (medium) or wider.
      </Text>
      <Text alignLg="start">
        Start aligned Text on viewports sized LG (large) or wider.
      </Text>
      <Text alignXl="start">
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
  isBorder: true,
  isWrap: true,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  style: { width: '8rem' },
  children: 'This text should overflow the parent.',
  bgColor: 'light',
  isBorder: true,
  isNoWrap: true,
};
NoWrap.storyName = 'No wrap';

export const WordBreak = Template.bind({});
WordBreak.args = {
  children: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
  isBreak: true,
};
WordBreak.storyName = 'Word break';

export const Lowercase = Template.bind({});
Lowercase.args = {
  children: 'Lowercased text.',
  transform: 'lowercase',
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  children: 'Uppercased text.',
  transform: 'uppercase',
};

export const Capitalize = Template.bind({});
Capitalize.args = {
  children: 'CapiTaliZed Text.',
  transform: 'capitalize',
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
      <Text padding={2} lh={1} isBorder>
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element.
        These classes can be customized as needed with our utility API.
      </Text>
      <Text padding={2} lh="sm" isBorder>
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element. These classes
        can be customized as needed with our utility API.
      </Text>
      <Text padding={2} lh="base" isBorder>
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </Text>
      <Text padding={2} lh="lg" isBorder>
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
  isMonospace: true,
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
        isBorder
        margin={[1, 2, 3, 4]}
        padding={2}
      >
        Example
      </Text>
      <Text
        bgColor="light"
        isBorder
        margin={[3, 4]}
        padding={2}
      >
        Example 1
      </Text>
      <Text
        bgColor="light"
        isBorder
        mt={3}
        ms={3}
        padding={2}
      >
        Example 2
      </Text>
      <Text
        bgColor="light"
        isBorder
        margin={[3, null]}
        padding={2}
      >
        Example 3
      </Text>
      <Text
        bgColor="light"
        isBorder
        mt={3}
        me={3}
        padding={2}
      >
        Example 4
      </Text>
      <Text
        bgColor="light"
        isBorder
        margin={[3, 3, 3]}
        padding={2}
      >
        Example 5
      </Text>
      <Text
        bgColor="light"
        isBorder
        margin={3}
        padding={2}
      >
        Example 6
      </Text>
      <Text
        bgColor="light"
        isBorder
        marginX={4}
        padding={2}
      >
        Example 7
      </Text>
      <Text
        bgColor="light"
        isBorder
        marginY={4}
        padding={2}
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
  marginX: 'auto',
  bgColor: 'light',
  isBorder: true,
};
HorizonalCentering.storyName = 'Horizonal centering';

export function Paddings() {
  return (
    <>
      <Text bgColor="light" isBorder padding={[3, 3, 3, 3]}>
        Example
      </Text>
      <Text bgColor="light" isBorder paddingX={3} paddingY={3}>
        Example 2
      </Text>
      <Text bgColor="light" isBorder padding={3}>
        Example 3
      </Text>
    </>
  );
}

export function Custom() {
  return (
    <Text
      as="div"
      bgColor="danger"
      textColor="white"
      padding={4}
    >
      <Text
        fs={5}
        fw="bolder"
        margin={0}
        align="center"
      >
        Example 4
      </Text>
    </Text>
  );
}
