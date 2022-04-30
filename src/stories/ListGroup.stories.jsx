import React from 'react';
import { ListGroup, Badge } from '../components';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  subcomponents: { 'ListGroup.Item': ListGroup.Item },
  args: {
    style: { maxWidth: '400px' },
  },
};

function Template(args) {
  return <ListGroup {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListGroup.Item>An item</ListGroup.Item>,
    <ListGroup.Item>A second item</ListGroup.Item>,
    <ListGroup.Item>A third item</ListGroup.Item>,
    <ListGroup.Item>A fourth item</ListGroup.Item>,
    <ListGroup.Item>And a fifth one</ListGroup.Item>,
  ],
};

export const ActiveItem = Template.bind({});
ActiveItem.args = {
  children: [
    <ListGroup.Item isActive>An active item</ListGroup.Item>,
    <ListGroup.Item>A second item</ListGroup.Item>,
    <ListGroup.Item>A third item</ListGroup.Item>,
    <ListGroup.Item>A fourth item</ListGroup.Item>,
    <ListGroup.Item>And a fifth one</ListGroup.Item>,
  ],
};
ActiveItem.storyName = 'Active item';

export const DisabledItem = Template.bind({});
DisabledItem.args = {
  children: [
    <ListGroup.Item isDisabled>A disabled item</ListGroup.Item>,
    <ListGroup.Item>A second item</ListGroup.Item>,
    <ListGroup.Item>A third item</ListGroup.Item>,
    <ListGroup.Item>A fourth item</ListGroup.Item>,
    <ListGroup.Item>And a fifth one</ListGroup.Item>,
  ],
};
DisabledItem.storyName = 'Disabled item';

export const Links = Template.bind({});
Links.args = {
  children: [
    <ListGroup.Item as="a" isActive>
      The current link item
    </ListGroup.Item>,
    <ListGroup.Item as="a">A second link item</ListGroup.Item>,
    <ListGroup.Item as="a">A third link item</ListGroup.Item>,
    <ListGroup.Item as="a">A fourth link item</ListGroup.Item>,
    <ListGroup.Item as="a">And a fifth link one</ListGroup.Item>,
  ],
};

export const Buttons = Template.bind({});
Buttons.args = {
  children: [
    <ListGroup.Item as="button" isActive>
      The current button
    </ListGroup.Item>,
    <ListGroup.Item as="button">A second button</ListGroup.Item>,
    <ListGroup.Item as="button">A third button</ListGroup.Item>,
    <ListGroup.Item as="button">A fourth button</ListGroup.Item>,
    <ListGroup.Item as="button">And a fifth button</ListGroup.Item>,
  ],
};

export const Flush = Template.bind({});
Flush.args = {
  children: [
    <ListGroup.Item>An item</ListGroup.Item>,
    <ListGroup.Item>A second item</ListGroup.Item>,
    <ListGroup.Item>A third item</ListGroup.Item>,
    <ListGroup.Item>A fourth item</ListGroup.Item>,
    <ListGroup.Item>And a fifth one</ListGroup.Item>,
  ],
  isFlush: true,
};

export const Numbered = Template.bind({});
Numbered.args = {
  children: [
    <ListGroup.Item>A list item</ListGroup.Item>,
    <ListGroup.Item>A list item</ListGroup.Item>,
    <ListGroup.Item>A list item</ListGroup.Item>,
  ],
  isNumbered: true,
};

export const CustomNumbered = Template.bind({});
CustomNumbered.args = {
  children: [
    <ListGroup.Item className="d-flex justify-content-center align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Content for list item
      </div>
      <Badge isRounded>14</Badge>
    </ListGroup.Item>,
    <ListGroup.Item className="d-flex justify-content-center align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Content for list item
      </div>
      <Badge isRounded>14</Badge>
    </ListGroup.Item>,
    <ListGroup.Item className="d-flex justify-content-center align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Content for list item
      </div>
      <Badge isRounded>14</Badge>
    </ListGroup.Item>,
  ],
  isNumbered: true,
};
CustomNumbered.storyName = 'Custom numbered';

export function Horizontal() {
  return (
    <>
      <ListGroup isHorizontal>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
      <ListGroup isHorizontal="sm">
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
      <ListGroup isHorizontal="md">
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
      <ListGroup isHorizontal="lg">
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
      <ListGroup isHorizontal="xl">
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
      <ListGroup isHorizontal="xxl">
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export function ContextualClasses() {
  const themes = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  return (
    <ListGroup style={{ maxWidth: '400px' }}>
      <ListGroup.Item>A simple default list group item</ListGroup.Item>
      {themes.map((theme) => (
        <ListGroup.Item theme={theme}>
          A simple
          {' '}
          {theme}
          {' '}
          list group item
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
ContextualClasses.storyName = 'Contextual classes';

export const WithBadge = Template.bind({});
WithBadge.args = {
  children: [
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      A list item
      {' '}
      <Badge isRounded>14</Badge>
    </ListGroup.Item>,
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      A second list item
      <Badge isRounded>2</Badge>
    </ListGroup.Item>,
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      A third list item
      <Badge isRounded>1</Badge>
    </ListGroup.Item>,
  ],
};

export function CustomContent() {
  return (
    <ListGroup style={{ maxWidth: '400px' }}>
      <ListGroup.Item as="a" isActive>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Some placeholder content in a parahraph.
        </p>
        <small>
          And some small print.
        </small>
      </ListGroup.Item>
      <ListGroup.Item as="a">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Some placeholder content in a parahraph.
        </p>
        <small className="text-muted">
          And some muted small print.
        </small>
      </ListGroup.Item>
      <ListGroup.Item as="a">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Some placeholder content in a parahraph.
        </p>
        <small className="text-muted">
          And some muted small print.
        </small>
      </ListGroup.Item>
    </ListGroup>
  );
}

export const Checkbox = Template.bind({});
Checkbox.args = {
  children: [
    <ListGroup.Item>
      <input type="checkbox" className="form-check-input me-2" />
      First checkbox
    </ListGroup.Item>,
    <ListGroup.Item>
      <input type="checkbox" className="form-check-input me-2" />
      Second checkbox
    </ListGroup.Item>,
    <ListGroup.Item>
      <input type="checkbox" className="form-check-input me-2" />
      Third checkbox
    </ListGroup.Item>,
    <ListGroup.Item>
      <input type="checkbox" className="form-check-input me-2" />
      Fourth checkbox
    </ListGroup.Item>,
    <ListGroup.Item>
      <input type="checkbox" className="form-check-input me-2" />
      Fifth checkbox
    </ListGroup.Item>,
  ],
};

export const Labels = Template.bind({});
Labels.args = {
  children: [
    <ListGroup.Item as="label">
      <input type="checkbox" className="form-check-input me-2" />
      First checkbox
    </ListGroup.Item>,
    <ListGroup.Item as="label">
      <input type="checkbox" className="form-check-input me-2" />
      Second checkbox
    </ListGroup.Item>,
    <ListGroup.Item as="label">
      <input type="checkbox" className="form-check-input me-2" />
      Third checkbox
    </ListGroup.Item>,
    <ListGroup.Item as="label">
      <input type="checkbox" className="form-check-input me-2" />
      Fourth checkbox
    </ListGroup.Item>,
    <ListGroup.Item as="label">
      <input type="checkbox" className="form-check-input me-2" />
      Fifth checkbox
    </ListGroup.Item>,
  ],
};
