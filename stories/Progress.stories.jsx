import React from 'react';
import { Progress } from '../src';

export default {
  title: 'Components/Progress',
  component: Progress,
  subcomponents: { 'Progress.Bar': Progress.Bar },
  parameters: {
    docs: {
      description: {
        component: `Documentation and examples for using Bootstrap
        custom progress bars featuring support for stacked bars,
        animated backgrounds, and text labels.`,
      },
    },
  },
};

function Template(args) {
  return <Progress {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [
    <Progress.Bar valueNow={25} valueMax={100} />,
  ],
};

export function Examples() {
  const examples = [
    { now: 0, max: 100 },
    { now: 25, max: 100 },
    { now: 50, max: 100 },
    { now: 75, max: 100 },
    { now: 100, max: 100 },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar valueNow={example.now} valueMax={example.max} />
          </Progress>
          {index !== array.length && <div className="mb-3" />}
        </>
      ))}
    </>
  );
}

export function Labels() {
  const examples = [
    { now: 0, max: 100 },
    { now: 25, max: 100 },
    { now: 50, max: 100 },
    { now: 75, max: 100 },
    { now: 100, max: 100 },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              valueNow={example.now}
              valueMax={example.max}
              isDisplayedPercent
            />
          </Progress>
          {index !== array.length && <div className="mb-3" />}
        </>
      ))}
    </>
  );
}

export function Heights() {
  return (
    <>
      <Progress style={{ height: '1px' }}>
        <Progress.Bar valueNow={30} valueMax={100} />
      </Progress>
      <div className="my-3" />
      <Progress style={{ height: '20px' }}>
        <Progress.Bar valueNow={30} valueMax={100} />
      </Progress>
    </>
  );
}

export function Backgrounds() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: 'success' },
    { now: 50, max: 100, bgColor: 'info' },
    { now: 75, max: 100, bgColor: 'warning' },
    { now: 100, max: 100, bgColor: 'danger' },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bgColor={example.bgColor}
              valueNow={example.now}
              valueMax={example.max}
            />
          </Progress>
          {index !== array.length && <div className="mb-3" />}
        </>
      ))}
    </>
  );
}

export const MultipleBars = Template.bind({});
MultipleBars.args = {
  children: [
    <Progress.Bar valueNow={15} valueMax={100} />,
    <Progress.Bar bgColor="success" valueNow={30} valueMax={100} />,
    <Progress.Bar bgColor="info" valueNow={20} valueMax={100} />,
  ],
};
MultipleBars.storyName = 'Multiple bars';

export function Striped() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: 'success' },
    { now: 50, max: 100, bgColor: 'info' },
    { now: 75, max: 100, bgColor: 'warning' },
    { now: 100, max: 100, bgColor: 'danger' },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bgColor={example.bgColor}
              valueNow={example.now}
              valueMax={example.max}
              isStriped
            />
          </Progress>
          {index !== array.length && <div className="my-3" />}
        </>
      ))}
    </>
  );
}

export function AnimatedStripes() {
  const examples = [
    { now: 10, max: 100, bgColor: null },
    { now: 25, max: 100, bgColor: 'success' },
    { now: 50, max: 100, bgColor: 'info' },
    { now: 75, max: 100, bgColor: 'warning' },
    { now: 100, max: 100, bgColor: 'danger' },
  ];

  return (
    <>
      {examples.map((example, index, array) => (
        <>
          <Progress>
            <Progress.Bar
              bgColor={example.bgColor}
              valueNow={example.now}
              valueMax={example.max}
              isStriped
              isAnimated
            />
          </Progress>
          {index !== array.length && <div className="my-3" />}
        </>
      ))}
    </>
  );
}
AnimatedStripes.storyName = 'Animated stripes';
