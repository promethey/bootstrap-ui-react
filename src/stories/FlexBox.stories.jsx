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
