import React from 'react';
import { FlexBox } from '../components';

export default {
  title: 'Components/FlexBox',
  component: FlexBox,
};

function Template(args) {
  return <FlexBox {...args} />;
}

function TemplateItems(args) {
  return (
    <FlexBox
      padding={1}
      bgColor="light"
      isBorder
      {...args}
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}

function TemplateAlignContent(args) {
  return (
    <FlexBox
      style={{ height: '200px' }}
      width={75}
      isWrap
      padding={1}
      bgColor="light"
      isBorder
      {...args}
    >
      {[...new Array(15)].map(() => (
        <FlexBox padding={2} bgColor="light" isBorder>
          FlexItem
        </FlexBox>
      ))}
    </FlexBox>
  );
}

export const Flex = Template.bind({});
Flex.args = {
  children: 'I\'m a flexbox container!',
  bgColor: 'light',
  isBorder: true,
  padding: 2,
};

export const InlineFlex = Template.bind({});
InlineFlex.args = {
  children: 'I\'m an inline flexbox container!',
  display: 'inline-flex',
  bgColor: 'light',
  isBorder: true,
  padding: 2,
};
InlineFlex.storyName = 'Inline flex';

export function Width() {
  return (
    <FlexBox direction="column" padding={2} bgColor="light" isBorder>
      <FlexBox
        width={25}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder="info"
      >
        25%
      </FlexBox>
      <FlexBox
        width={50}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder="info"
      >
        50%
      </FlexBox>
      <FlexBox
        width={75}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder="info"
      >
        75%
      </FlexBox>
      <FlexBox
        width={100}
        padding={2}
        bgColor="light"
        isBorder="info"
      >
        100%
      </FlexBox>
    </FlexBox>
  );
}

export const DirectionRow = TemplateItems.bind({});
DirectionRow.args = {
  direction: 'row',
  mb: 3,
};
DirectionRow.storyName = 'Direction row';

export const DirectionRowReverse = TemplateItems.bind({});
DirectionRowReverse.args = {
  direction: 'row-reverse',
  mb: 3,
};
DirectionRowReverse.storyName = 'Direction row reverse';

export const DirectionColumn = TemplateItems.bind({});
DirectionColumn.args = {
  direction: 'column',
  mb: 3,
};
DirectionColumn.storyName = 'Direction column';

export const DirectionColumnReverse = TemplateItems.bind({});
DirectionColumnReverse.args = {
  direction: 'column-reverse',
  mb: 3,
};
DirectionColumnReverse.storyName = 'Direction column reverse';

export function DirectionResponsive() {
  return (
    <FlexBox
      direction="row"
      directionSm="row-reverse"
      directionMd="row"
      directionLg="row-reverse"
      directionXl="column"
      directionXxl="column-reverse"
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item 1
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item 2
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item 3
      </FlexBox>
    </FlexBox>
  );
}
DirectionResponsive.storyName = 'Direction responsive';

export const JustifyContentStart = TemplateItems.bind({});
JustifyContentStart.args = {
  justifyContent: 'start',
  mb: 3,
};
JustifyContentStart.storyName = 'Justify content start';

export const JustifyContentEnd = TemplateItems.bind({});
JustifyContentEnd.args = {
  justifyContent: 'end',
  mb: 3,
};
JustifyContentEnd.storyName = 'Justify content end';

export const JustifyContentCenter = TemplateItems.bind({});
JustifyContentCenter.args = {
  justifyContent: 'center',
  mb: 3,
};
JustifyContentCenter.storyName = 'Justify content center';

export const JustifyContentBetween = TemplateItems.bind({});
JustifyContentBetween.args = {
  justifyContent: 'between',
  mb: 3,
};
JustifyContentBetween.storyName = 'Justify content between';

export const JustifyContentAround = TemplateItems.bind({});
JustifyContentAround.args = {
  justifyContent: 'around',
  mb: 3,
};
JustifyContentAround.storyName = 'Justify content around';

export const JustifyContentEvenly = TemplateItems.bind({});
JustifyContentEvenly.args = {
  justifyContent: 'evenly',
  mb: 3,
};
JustifyContentEvenly.storyName = 'Justify content evenly';

export const JustifyContentResponsive = TemplateItems.bind({});
JustifyContentResponsive.args = {
  justifyContent: 'start',
  justifyContentSm: 'end',
  justifyContentMd: 'around',
  justifyContentLg: 'evenly',
  justifyContentXl: 'center',
  justifyContentXxl: 'between',
};
JustifyContentResponsive.storyName = 'Justify content responsive';

export const AlignItemsStart = TemplateItems.bind({});
AlignItemsStart.args = {
  style: { height: '100px' },
  alignItems: 'start',
};
AlignItemsStart.storyName = 'Align items start';

export const AlignItemsEnd = TemplateItems.bind({});
AlignItemsEnd.args = {
  style: { height: '100px' },
  alignItems: 'end',
};
AlignItemsEnd.storyName = 'Align items end';

export const AlignItemsCenter = TemplateItems.bind({});
AlignItemsCenter.args = {
  style: { height: '100px' },
  alignItems: 'center',
};
AlignItemsCenter.storyName = 'Align items center';

export const AlignItemsBaseline = TemplateItems.bind({});
AlignItemsBaseline.args = {
  style: { height: '100px' },
  alignItems: 'baseline',
};
AlignItemsBaseline.storyName = 'Align items baseline';

export const AlignItemsStretch = TemplateItems.bind({});
AlignItemsStretch.args = {
  style: { height: '100px' },
  alignItems: 'stretch',
};
AlignItemsStretch.storyName = 'Align items stretch';

export const AlignItemsResponsive = TemplateItems.bind({});
AlignItemsResponsive.args = {
  style: { height: '100px' },
  alignItemsSm: 'center',
  alignItemsMd: 'stretch',
  alignItemsLg: 'start',
  alignItemsXl: 'end',
  alignItemsXxl: 'baseline',
};
AlignItemsResponsive.storyName = 'Align items responsive';

export function AlignSelfStart() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox alignSelf="start" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
AlignSelfStart.storyName = 'Align self start';

export function AlignSelfEnd() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox alignSelf="end" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
AlignSelfEnd.storyName = 'Align self end';

export function AlignSelfCenter() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox alignSelf="center" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
AlignSelfCenter.storyName = 'Align self center';

export function AlignSelfBaseline() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox alignSelf="baseline" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
AlignSelfBaseline.storyName = 'Align self baseline';

export function AlignSelfStretch() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox alignSelf="stretch" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
AlignSelfStretch.storyName = 'Align self stetch';

export function AlignSelfResponsive() {
  return (
    <FlexBox
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox
        alignSelf="start"
        alignSelfSm="center"
        alignSelfMd="end"
        alignSelfLg="stretch"
        alignSelfXl="baseline"
        alignSelfXxl="start"
        padding={2}
        bgColor="info"
        isBorder="primary"
      >
        Aligned flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}

export function FlexFill() {
  return (
    <FlexBox padding={1} bgColor="light" isBorder>
      <FlexBox isFill padding={2} bgColor="light" isBorder>
        Flex item with a lot of content
      </FlexBox>
      <FlexBox isFill padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox isFill padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
FlexFill.storyName = 'Flex fill';

export function FlexGrow() {
  return (
    <FlexBox padding={1} bgColor="light" isBorder>
      <FlexBox flexGrow={1} padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Third flex item
      </FlexBox>
    </FlexBox>
  );
}
FlexGrow.storyName = 'Flex grow';

export function FlexShrink() {
  return (
    <FlexBox padding={1} bgColor="light" isBorder>
      <FlexBox width={100} padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox flexShrink={1} padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
FlexShrink.storyName = 'Flex shrink';

export function AutoMargins() {
  return (
    <>
      <FlexBox mb={3} padding={1} bgColor="light" isBorder>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
      </FlexBox>
      <FlexBox mb={3} padding={1} bgColor="light" isBorder>
        <FlexBox me="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
      </FlexBox>
      <FlexBox mb={3} padding={1} bgColor="light" isBorder>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox ms="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
      </FlexBox>
    </>
  );
}
AutoMargins.storyName = 'Auto margins';

export function WithAlignItems() {
  return (
    <>
      <FlexBox
        direction="column"
        alignItems="start"
        me={3}
        padding={1}
        style={{ height: '200px' }}
        bgColor="light"
        isBorder
      >
        <FlexBox mb="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
      </FlexBox>
      <FlexBox
        direction="column"
        alignItems="end"
        me={3}
        padding={1}
        style={{ height: '200px' }}
        bgColor="light"
        isBorder
      >
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
        <FlexBox mt="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </FlexBox>
      </FlexBox>
    </>
  );
}
WithAlignItems.storyName = 'With align items';

export function Wrap() {
  return (
    <FlexBox isWrap padding={1} bgColor="light" isBorder style={{ width: '100px' }}>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}

export function NoWrap() {
  return (
    <FlexBox isNoWrap padding={1} bgColor="light" isBorder style={{ width: '100px' }}>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
      <FlexBox padding={2} bgColor="light" isBorder>
        Flex item
      </FlexBox>
    </FlexBox>
  );
}
NoWrap.storyName = 'No wrap';

export function Order() {
  return (
    <FlexBox isNoWrap padding={1} bgColor="light" isBorder>
      <FlexBox order={3} padding={2} bgColor="light" isBorder>
        First flex item
      </FlexBox>
      <FlexBox order={2} padding={2} bgColor="light" isBorder>
        Second flex item
      </FlexBox>
      <FlexBox order={1} padding={2} bgColor="light" isBorder>
        Third flex item
      </FlexBox>
    </FlexBox>
  );
}

export const AlignContentStart = TemplateAlignContent.bind({});
AlignContentStart.args = {
  alignContent: 'start',
};
AlignContentStart.storyName = 'Align content start';

export const AlignContentEnd = TemplateAlignContent.bind({});
AlignContentEnd.args = {
  alignContent: 'end',
};
AlignContentEnd.storyName = 'Align content end';

export const AlignContentCenter = TemplateAlignContent.bind({});
AlignContentCenter.args = {
  alignContent: 'center',
};
AlignContentCenter.storyName = 'Align content center';

export const AlignContentBetween = TemplateAlignContent.bind({});
AlignContentBetween.args = {
  alignContent: 'between',
};
AlignContentBetween.storyName = 'Align content between';

export const AlignContentAround = TemplateAlignContent.bind({});
AlignContentAround.args = {
  alignContent: 'around',
};
AlignContentAround.storyName = 'Align content around';

export const AlignContentStretch = TemplateAlignContent.bind({});
AlignContentStretch.args = {
  alignContent: 'stretch',
};
AlignContentStretch.storyName = 'Align content stretch';
