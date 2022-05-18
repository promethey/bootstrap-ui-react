import React from 'react';
import { Breadcrumb } from 'components';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

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
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Library
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
