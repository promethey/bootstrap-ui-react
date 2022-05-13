import React from 'react';
import { Flex } from '../components';

export default {
  title: 'Components/Flex',
  component: Flex,
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
      padding={1}
      bgColor="light"
      isBorder
      {...args}
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}

function TemplateAlignContent(args) {
  return (
    <Flex
      style={{ height: '200px' }}
      width={75}
      isWrap
      padding={1}
      bgColor="light"
      isBorder
      {...args}
    >
      {[...new Array(15)].map(() => (
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
      ))}
    </Flex>
  );
}

export const Default = Template.bind({});
Default.args = {
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
    <Flex direction="column" padding={2} bgColor="light" isBorder>
      <Flex
        width={25}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder
      >
        25%
      </Flex>
      <Flex
        width={50}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder
      >
        50%
      </Flex>
      <Flex
        width={75}
        mb={2}
        padding={2}
        bgColor="light"
        isBorder
      >
        75%
      </Flex>
      <Flex
        width={100}
        padding={2}
        bgColor="light"
        isBorder
      >
        100%
      </Flex>
    </Flex>
  );
}

export function Height() {
  return (
    <Flex padding={2} bgColor="light" isBorder style={{ height: '200px' }}>
      <Flex
        width={25}
        height={25}
        justifyContent="center"
        alignItems="center"
        bgColor="light"
        isBorder
      >
        Height 25%
      </Flex>
      <Flex
        width={25}
        height={50}
        justifyContent="center"
        alignItems="center"
        bgColor="light"
        isBorder
      >
        Height 50%
      </Flex>
      <Flex
        width={25}
        height={75}
        justifyContent="center"
        alignItems="center"
        bgColor="light"
        isBorder
      >
        Height 75%
      </Flex>
      <Flex
        width={25}
        height={100}
        justifyContent="center"
        alignItems="center"
        bgColor="light"
        isBorder
      >
        Height 100%
      </Flex>
    </Flex>
  );
}

export function Opacity() {
  return (
    <Flex direction="column" padding={2} isBorder>
      <Flex
        mb={2}
        padding={2}
        bgColor="primary"
        textColor="light"
        opacity={100}
      >
        100%
      </Flex>
      <Flex
        mb={2}
        padding={2}
        bgColor="primary"
        textColor="light"
        isBorder
        opacity={75}
      >
        75%
      </Flex>
      <Flex
        mb={2}
        padding={2}
        bgColor="primary"
        textColor="light"
        isBorder
        opacity={50}
      >
        50%
      </Flex>
      <Flex
        padding={2}
        bgColor="primary"
        textColor="light"
        isBorder
        opacity={25}
      >
        25%
      </Flex>
    </Flex>
  );
}

export function Shadow() {
  return (
    <>
      <Flex padding={3} mb={5} shadow="none" bgColor="light" isRounded>
        No shadow
      </Flex>
      <Flex padding={3} mb={5} shadow="sm" bgColor="body" isRounded>
        Small shadow
      </Flex>
      <Flex padding={3} mb={5} shadow bgColor="body" isRounded>
        Regular shadow
      </Flex>
      <Flex padding={3} mb={5} shadow="lg" bgColor="body" isRounded>
        Larger shadow
      </Flex>
    </>
  );
}

export function Rounded() {
  return (
    <Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded="top"
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded="end"
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded="bottom"
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded="start"
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded="circle"
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '150px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        bgColor="secondary"
        textColor="light"
        isRounded="pill"
      >
        150x75
      </Flex>
    </Flex>
  );
}

export function BorderWidth() {
  return (
    <Flex direction="row">
      <Flex
        style={{ width: '100px', height: '100px' }}
        me={2}
        bgColor="light"
        isBorder
        borderWidth={1}
      />
      <Flex
        style={{ width: '100px', height: '100px' }}
        me={2}
        bgColor="light"
        isBorder
        borderWidth={2}
      />
      <Flex
        style={{ width: '100px', height: '100px' }}
        me={2}
        bgColor="light"
        isBorder
        borderWidth={3}
      />
      <Flex
        style={{ width: '100px', height: '100px' }}
        me={2}
        bgColor="light"
        isBorder
        borderWidth={4}
      />
      <Flex
        style={{ width: '100px', height: '100px' }}
        me={2}
        bgColor="light"
        isBorder
        borderWidth={5}
      />
    </Flex>
  );
}
BorderWidth.storyName = 'Border width';

export function RoundedSizes() {
  return (
    <Flex direction="row">
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded={0}
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded={1}
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        me={2}
        bgColor="secondary"
        textColor="light"
        isRounded={2}
      >
        75x75
      </Flex>
      <Flex
        style={{ width: '75px', height: '75px' }}
        justifyContent="center"
        alignItems="center"
        bgColor="secondary"
        textColor="light"
        isRounded={3}
      >
        75x75
      </Flex>
    </Flex>
  );
}
RoundedSizes.storyName = 'Rounded sizes';

export function Visibility() {
  return (
    <>
      <Flex padding={2} bgColor="light" isBorder isVisible>
        Visible
      </Flex>
      <Flex padding={2} bgColor="light" isBorder isInvisible>
        Invisible
      </Flex>
    </>
  );
}

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
      direction="row"
      directionSm="row-reverse"
      directionMd="row"
      directionLg="row-reverse"
      directionXl="column"
      directionXxl="column-reverse"
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item 1
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item 2
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item 3
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
    <Flex
      style={{ height: '100px' }}
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex alignSelf="start" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
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
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex alignSelf="end" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
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
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex alignSelf="center" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
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
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex alignSelf="baseline" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
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
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex alignSelf="stretch" padding={2} bgColor="info" isBorder="primary">
        Aligned flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
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
      padding={1}
      bgColor="light"
      isBorder
    >
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex
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
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}

export function FlexFill() {
  return (
    <Flex padding={1} bgColor="light" isBorder>
      <Flex isFill padding={2} bgColor="light" isBorder>
        Flex item with a lot of content
      </Flex>
      <Flex isFill padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex isFill padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}
FlexFill.storyName = 'Flex fill';

export function FlexGrow() {
  return (
    <Flex padding={1} bgColor="light" isBorder>
      <Flex flexGrow={1} padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Third flex item
      </Flex>
    </Flex>
  );
}
FlexGrow.storyName = 'Flex grow';

export function FlexShrink() {
  return (
    <Flex padding={1} bgColor="light" isBorder>
      <Flex width={100} padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex flexShrink={1} padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}
FlexShrink.storyName = 'Flex shrink';

export function AutoMargins() {
  return (
    <>
      <Flex mb={3} padding={1} bgColor="light" isBorder>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
      </Flex>
      <Flex mb={3} padding={1} bgColor="light" isBorder>
        <Flex me="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
      </Flex>
      <Flex mb={3} padding={1} bgColor="light" isBorder>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex ms="auto" padding={2} bgColor="light" isBorder>
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
        padding={1}
        style={{ height: '200px' }}
        bgColor="light"
        isBorder
      >
        <Flex mb="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
      </Flex>
      <Flex
        direction="column"
        alignItems="end"
        me={3}
        padding={1}
        style={{ height: '200px' }}
        bgColor="light"
        isBorder
      >
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
        <Flex mt="auto" padding={2} bgColor="light" isBorder>
          Flex item
        </Flex>
      </Flex>
    </>
  );
}
WithAlignItems.storyName = 'With align items';

export function Wrap() {
  return (
    <Flex isWrap padding={1} bgColor="light" isBorder style={{ width: '100px' }}>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}

export function NoWrap() {
  return (
    <Flex isNoWrap padding={1} bgColor="light" isBorder style={{ width: '100px' }}>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
      <Flex padding={2} bgColor="light" isBorder>
        Flex item
      </Flex>
    </Flex>
  );
}
NoWrap.storyName = 'No wrap';

export function Order() {
  return (
    <Flex isNoWrap padding={1} bgColor="light" isBorder>
      <Flex order={3} padding={2} bgColor="light" isBorder>
        First flex item
      </Flex>
      <Flex order={2} padding={2} bgColor="light" isBorder>
        Second flex item
      </Flex>
      <Flex order={1} padding={2} bgColor="light" isBorder>
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

export const WithoutDisplayClassName = Template.bind({});
WithoutDisplayClassName.args = {
  children: 'Without display class name',
  display: false,
};
WithoutDisplayClassName.storyName = 'Without display class name';
