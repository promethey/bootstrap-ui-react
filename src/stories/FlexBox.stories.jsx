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

export const DirectionRow = TemplateItems.bind({});
DirectionRow.args = {
  direction: 'row',
  margin: [null, null, 3, null],
};
DirectionRow.storyName = 'Direction row';

export const DirectionRowReverse = TemplateItems.bind({});
DirectionRowReverse.args = {
  direction: 'row-reverse',
  margin: [null, null, 3, null],
};
DirectionRowReverse.storyName = 'Direction row reverse';

export const DirectionColumn = TemplateItems.bind({});
DirectionColumn.args = {
  direction: 'column',
  margin: [null, null, 3, null],
};
DirectionColumn.storyName = 'Direction column';

export const DirectionColumnReverse = TemplateItems.bind({});
DirectionColumnReverse.args = {
  direction: 'column-reverse',
  margin: [null, null, 3, null],
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
  margin: [null, null, 3, null],
};
JustifyContentStart.storyName = 'Justify content start';

export const JustifyContentEnd = TemplateItems.bind({});
JustifyContentEnd.args = {
  justifyContent: 'end',
  margin: [null, null, 3, null],
};
JustifyContentEnd.storyName = 'Justify content end';

export const JustifyContentCenter = TemplateItems.bind({});
JustifyContentCenter.args = {
  justifyContent: 'center',
  margin: [null, null, 3, null],
};
JustifyContentCenter.storyName = 'Justify content center';

export const JustifyContentBetween = TemplateItems.bind({});
JustifyContentBetween.args = {
  justifyContent: 'between',
  margin: [null, null, 3, null],
};
JustifyContentBetween.storyName = 'Justify content between';

export const JustifyContentAround = TemplateItems.bind({});
JustifyContentAround.args = {
  justifyContent: 'around',
  margin: [null, null, 3, null],
};
JustifyContentAround.storyName = 'Justify content around';

export const JustifyContentEvenly = TemplateItems.bind({});
JustifyContentEvenly.args = {
  justifyContent: 'evenly',
  margin: [null, null, 3, null],
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
