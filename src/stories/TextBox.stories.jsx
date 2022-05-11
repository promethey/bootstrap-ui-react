import React from 'react';
import { TextBox } from '../components';

export default {
  title: 'Components/TextBox',
  component: TextBox,
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
  return <TextBox {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Simple text',
};

export function Display() {
  return (
    <>
      <TextBox display="none">
        This is default text
      </TextBox>
      <TextBox
        display="block"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display block
      </TextBox>
      <TextBox
        display="inline-block"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display inline-block
      </TextBox>
      <TextBox
        display="flex"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display flex
      </TextBox>
      <TextBox
        display="inline-flex"
        padding={2}
        bgColor="light"
        isBorder
      >
        Display inline-flex
      </TextBox>
    </>
  );
}

export function Print() {
  return (
    <>
      <TextBox margin={0} displayPrint="none">
        Screen Only (Hide on displayPrint only)
      </TextBox>
      <TextBox margin={0} display="none" displayPrint="block">
        Print Only (Hide on screen only)
      </TextBox>
      <TextBox margin={0} display="none" displayLg="block" displayPrint="block">
        Hide up to large on screen, but always show on displayPrint
      </TextBox>
    </>
  );
}

export function Opacity() {
  return (
    <>
      <TextBox margin={0} textColor="primary">
        This is default primary text
      </TextBox>
      <TextBox margin={0} textColor="primary" textOpacity={75}>
        This is 75% opacity primary text
      </TextBox>
      <TextBox margin={0} textColor="primary" textOpacity={50}>
        This is 50% opacity primary text
      </TextBox>
      <TextBox margin={0} textColor="primary" textOpacity={25}>
        This is 25% opacity primary text
      </TextBox>
    </>
  );
}

export function TextAlignment() {
  return (
    <>
      <TextBox align="start">
        Start aligned TextBox on all viewport sizes.
      </TextBox>
      <TextBox align="center">
        Center aligned TextBox on all viewport sizes.
      </TextBox>
      <TextBox align="end">
        End aligned TextBox on all viewport sizes.
      </TextBox>
      <TextBox alignSm="start">
        Start aligned TextBox on viewports sized SM (small) or wider.
      </TextBox>
      <TextBox alignMd="start">
        Start aligned TextBox on viewports sized MD (medium) or wider.
      </TextBox>
      <TextBox alignLg="start">
        Start aligned TextBox on viewports sized LG (large) or wider.
      </TextBox>
      <TextBox alignXl="start">
        Start aligned TextBox on viewports sized XL (extra-large) or wider.
      </TextBox>
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
      <TextBox key={size} fs={size}>
        .fs-
        {size}
        {' '}
        text
      </TextBox>
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
      <TextBox key={example.value} fw={example.value}>
        {example.text}
      </TextBox>
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
      <TextBox key={example.value} fst={example.value}>
        {example.text}
      </TextBox>
    ))
  );
}
FontStyles.storyName = 'Font styles';

export function LineHeights() {
  return (
    <>
      <TextBox lh={1}>
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element.
        These classes can be customized as needed with our utility API.
      </TextBox>
      <TextBox lh="sm">
        This is a long paragraph written to show how the line-height of
        an element is affected by our utilities. Classes are applied to
        the element itself or sometimes the parent element. These classes
        can be customized as needed with our utility API.
      </TextBox>
      <TextBox lh="base">
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </TextBox>
      <TextBox lh="lg">
        This is a long paragraph written to show how the line-height of an element
        is affected by our utilities. Classes are applied to the element itself
        or sometimes the parent element. These classes can be customized as
        needed with our utility API.
      </TextBox>
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
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, 3, 3, 3]}
        padding={2}
      >
        Example
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, 4]}
        padding={2}
      >
        Example 1
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, 3, null, null]}
        padding={2}
      >
        Example 2
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, null]}
        padding={2}
      >
        Example 3
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, null, 3, null]}
        padding={2}
      >
        Example 4
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3, 3, 3]}
        padding={2}
      >
        Example 5
      </TextBox>
      <TextBox
        bgColor="light"
        isBorder
        margin={[3]}
        padding={2}
      >
        Example 6
      </TextBox>
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
      <TextBox bgColor="light" isBorder padding={[3, 3, 3, 3]}>
        Example
      </TextBox>
      <TextBox bgColor="light" isBorder paddingX={3} paddingY={3}>
        Example 2
      </TextBox>
      <TextBox bgColor="light" isBorder padding={3}>
        Example 3
      </TextBox>
      <TextBox
        as="div"
        bgColor="danger"
        textColor="white"
        padding={4}
      >
        <TextBox
          fs={5}
          fw="bolder"
          margin={0}
          align="center"
        >
          Example 4
        </TextBox>
      </TextBox>
    </>
  );
}
