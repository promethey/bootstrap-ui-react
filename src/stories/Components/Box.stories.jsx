import React from 'react';
import { Box } from 'components';

export default {
  title: 'Components/Box',
  component: Box,
};

export function Positions() {
  const examples = [
    {
      top: 0, end: null, bottom: null, start: 0,
    },
    {
      top: 0, end: 0, bottom: null, start: null,
    },
    {
      top: 50, end: null, bottom: null, start: 50,
    },
    {
      top: null, end: 50, bottom: 50, start: null,
    },
    {
      top: null, end: null, bottom: 0, start: 0,
    },
    {
      top: null, end: 0, bottom: 0, start: null,
    },
  ];

  return (
    <Box
      position="relative"
      bgColor="light"
      border
      rounded={3}
      style={{ height: '200px' }}
    >
      {examples.map(({
        top, end, bottom, start,
      }) => (
        <Box
          position="absolute"
          top={top}
          end={end}
          bottom={bottom}
          start={start}
          style={{ width: '2rem', height: '2rem' }}
          bgColor="dark"
          border
          rounded={3}
        />
      ))}
    </Box>
  );
}
