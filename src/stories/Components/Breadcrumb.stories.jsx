import React from 'react';
import { Breadcrumb, Link } from 'components';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

function Story(args) {
  return <Breadcrumb {...args} />;
}

export function Default() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item isActive>
          Home
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>
          Library
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>Library</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>
          Data
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export const Divider = Story.bind({});
Divider.args = {
  children: [
    <Breadcrumb.Item>
      <Link>Home</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item isActive>
      Library
    </Breadcrumb.Item>,
  ],
  divider: '>',
};

export const EmptyDivider = Story.bind({});
EmptyDivider.args = {
  children: [
    <Breadcrumb.Item>
      <Link>Home</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item isActive>
      Library
    </Breadcrumb.Item>,
  ],
  divider: '',
};
EmptyDivider.storyName = 'Empty divider';
