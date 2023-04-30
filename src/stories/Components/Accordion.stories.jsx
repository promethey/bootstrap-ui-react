import React from 'react';
import { Accordion } from 'components';
import { v4 as uuidv4 } from 'uuid';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Item': Accordion.Item,
    'Accordion.Header': Accordion.Header,
    'Accordion.Button': Accordion.Button,
    'Accordion.Collapse': Accordion.Collapse,
    'Accordion.Body': Accordion.Body,
  },
  parameters: {
    docs: {
      description: {
        component: 'Build vertically collapsing accordions in combination with Collapse component',
      },
    },
  },
};

function DefaultTemplate(args) {
  const labels = ['first', 'second', 'third'];

  return (
    <Accordion {...args}>
      {[...new Array(3)].map((item, index) => (
        <Accordion.Item key={uuidv4()} activeKey={index}>
          <Accordion.Header>
            Accordion Item #
            {index + 1}
          </Accordion.Header>
          <Accordion.Body>
            <strong>
              This is the
              {' '}
              {labels[index]}
              {' '}
              item&apos;s accordion body.
            </strong>
            {' '}
            It is shown by default, until the collapse plugin adds the
            appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the
            showing and hiding via CSS transitions. You can modify any
            of this with custom CSS or overriding our default variables.
            It&apos;s also worth noting that just about any HTML can go within the
            {' '}
            <code>.accordion-body</code>
            , though the transition does limit overflow.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export const Default = DefaultTemplate.bind({});
Default.args = { defaultActiveKey: 0 };

export const Flush = DefaultTemplate.bind({});
Flush.args = { flush: true };

export const AlwaysOpen = DefaultTemplate.bind({});
AlwaysOpen.args = { alwaysOpen: true };
AlwaysOpen.storyName = 'Always open';
