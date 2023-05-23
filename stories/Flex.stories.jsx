import React from 'react';
import { Flex, Box } from '../src';

export default {
  title: 'Components/Flex',
  component: Flex,
  subcomponent: { Box },
  parameters: {
    docs: {
      description: {
        component: 'Component supporting full Bootstrap Flex API end more...',
      },
    },
  },
};

function Template(args) {
  return <Flex {...args} />;
}

function TemplateItems(args) {
  return (
    <Flex
      p={1}
      bgColor="light"
      border
      {...args}
    >
      <Flex p={2} bgColor="light" border>
        Flex item #1
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item #2
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item #3
      </Flex>
    </Flex>
  );
}

function TemplateAlignContent(args) {
  return (
    <Flex
      style={{ height: '200px' }}
      width={75}
      flexWrap
      p={1}
      bgColor="light"
      border
      {...args}
    >
      {[...new Array(15)].map((item, index) => (
        <Flex p={2} bgColor="light" border>
          Flex item #
          {index + 1}
        </Flex>
      ))}
    </Flex>
  );
}

export const Default = Template.bind({});
Default.args = {
  children: 'I\'m a flexbox container!',
  bgColor: 'light',
  border: true,
  p: 2,
};

export const InlineFlex = Template.bind({});
InlineFlex.args = {
  d: 'inline-flex',
  noflex: true,
  children: 'I\'m an inline flexbox container!',
  display: 'inline-flex',
  bgColor: 'light',
  border: true,
  p: 2,
};
InlineFlex.storyName = 'Inline flex';

export const DirectionRow = TemplateItems.bind({});
DirectionRow.args = {
  direction: 'row',
};
DirectionRow.storyName = 'Direction row';

export const DirectionRowReverse = TemplateItems.bind({});
DirectionRowReverse.args = {
  direction: 'row-reverse',
};
DirectionRowReverse.storyName = 'Direction row reverse';

export const DirectionColumn = TemplateItems.bind({});
DirectionColumn.args = {
  direction: 'column',
};
DirectionColumn.storyName = 'Direction column';

export const DirectionColumnReverse = TemplateItems.bind({});
DirectionColumnReverse.args = {
  direction: 'column-reverse',
};
DirectionColumnReverse.storyName = 'Direction column reverse';

export function DirectionResponsive() {
  return (
    <Flex
      direction={{
        sm: 'row-reverse',
        md: 'row',
        lg: 'row-reverse',
        xl: 'column',
        xxl: 'column-reverse',
      }}
    >
      <Flex p={2} bgColor="light" border>
        Flex item #1
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item #2
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item #3
      </Flex>
    </Flex>
  );
}
DirectionResponsive.storyName = 'Direction responsive';

export const JustifyContentStart = TemplateItems.bind({});
JustifyContentStart.args = {
  justifyContent: 'start',
};
JustifyContentStart.storyName = 'Justify content start';

export const JustifyContentEnd = TemplateItems.bind({});
JustifyContentEnd.args = {
  justifyContent: 'end',
};
JustifyContentEnd.storyName = 'Justify content end';

export const JustifyContentCenter = TemplateItems.bind({});
JustifyContentCenter.args = {
  justifyContent: 'center',
};
JustifyContentCenter.storyName = 'Justify content center';

export const JustifyContentBetween = TemplateItems.bind({});
JustifyContentBetween.args = {
  justifyContent: 'between',
};
JustifyContentBetween.storyName = 'Justify content between';

export const JustifyContentAround = TemplateItems.bind({});
JustifyContentAround.args = {
  justifyContent: 'around',
};
JustifyContentAround.storyName = 'Justify content around';

export const JustifyContentEvenly = TemplateItems.bind({});
JustifyContentEvenly.args = {
  justifyContent: 'evenly',
};
JustifyContentEvenly.storyName = 'Justify content evenly';

export const JustifyContentResponsive = TemplateItems.bind({});
JustifyContentResponsive.args = {
  justifyContent: {
    sm: 'end', md: 'around', lg: 'evenly', xl: 'center', xxl: 'between',
  },
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
  alignItems: {
    sm: 'center',
    md: 'stretch',
    lg: 'start',
    xl: 'end',
    xxl: 'baseline',
  },
};
AlignItemsResponsive.storyName = 'Align items responsive';

export function AlignSelfStart() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex alignSelf="start" p={2} bgColor="info" border="primary">
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfStart.storyName = 'Align self start';

export function AlignSelfEnd() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex alignSelf="end" p={2} bgColor="info" border="primary">
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfEnd.storyName = 'Align self end';

export function AlignSelfCenter() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex alignSelf="center" p={2} bgColor="info" border="primary">
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfCenter.storyName = 'Align self center';

export function AlignSelfBaseline() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex alignSelf="baseline" p={2} bgColor="info" border="primary">
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfBaseline.storyName = 'Align self baseline';

export function AlignSelfStretch() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex alignSelf="stretch" p={2} bgColor="info" border="primary">
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfStretch.storyName = 'Align self stetch';

export function AlignSelfResponsive() {
  return (
    <Flex
      style={{ height: '100px' }}
      p={1}
      bgColor="light"
      border
    >
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex
        alignSelf={{
          xs: 'start',
          sm: 'center',
          md: 'end',
          lg: 'stretch',
          xl: 'baseline',
          xxl: 'start',
        }}
        p={2}
        bgColor="info"
        border="primary"
      >
        Aligned flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
AlignSelfResponsive.storyName = 'Align self responsive';

export function FlexFill() {
  return (
    <Flex p={1} bgColor="light" border>
      <Flex flexFill p={2} bgColor="light" border>
        Flex item with a lot of content
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
FlexFill.storyName = 'Flex fill';

export function FlexGrow() {
  return (
    <Flex p={1} bgColor="light" border>
      <Flex flexGrow={1} p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Third flex item
      </Flex>
    </Flex>
  );
}
FlexGrow.storyName = 'Flex grow';

export function FlexShrink() {
  return (
    <Flex p={1} bgColor="light" border>
      <Flex w={100} p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex flexShrink={1} p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
FlexShrink.storyName = 'Flex shrink';

export function AutoMargins() {
  return (
    <>
      <Flex mb={3} p={1} bgColor="light" border>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
      </Flex>
      <Flex mb={3} p={1} bgColor="light" border>
        <Flex me="auto" p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
      </Flex>
      <Flex mb={3} p={1} bgColor="light" border>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex ms="auto" p={2} bgColor="light" border>
          Flex item
        </Flex>
      </Flex>
    </>
  );
}
AutoMargins.storyName = 'Auto margins';

export function WithAlignItems() {
  return (
    <>
      <Flex
        direction="column"
        alignItems="start"
        me={3}
        p={1}
        style={{ height: '200px' }}
        bgColor="light"
        border
      >
        <Flex mb="auto" p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
      </Flex>
      <Flex
        direction="column"
        alignItems="end"
        me={3}
        p={1}
        style={{ height: '200px' }}
        bgColor="light"
        border
      >
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex p={2} bgColor="light" border>
          Flex item
        </Flex>
        <Flex mt="auto" p={2} bgColor="light" border>
          Flex item
        </Flex>
      </Flex>
    </>
  );
}
WithAlignItems.storyName = 'With align items';

export function Wrap() {
  return (
    <Flex flexWrap p={1} bgColor="light" style={{ width: '100px' }} border>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}

export function NoWrap() {
  return (
    <Flex flexNoWrap p={1} bgColor="light" border style={{ width: '100px' }}>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
      <Flex p={2} bgColor="light" border>
        Flex item
      </Flex>
    </Flex>
  );
}
NoWrap.storyName = 'No wrap';

export function Order() {
  return (
    <Flex flexNoWrap p={1} bgColor="light" border>
      <Flex order={3} p={2} bgColor="light" border>
        First flex item
      </Flex>
      <Flex order={2} p={2} bgColor="light" border>
        Second flex item
      </Flex>
      <Flex order={1} p={2} bgColor="light" border>
        Third flex item
      </Flex>
    </Flex>
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
