import React from 'react';
import {
  Carousel, Flex, Heading, Text,
} from '../src';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  subcomponents: {
    'Carousel.Inner': Carousel.Inner,
    'Carousel.Item': Carousel.Item,
    'Carousel.Caption': Carousel.Caption,
  },
  parameters: {
    docs: {
      description: {
        component: `A slideshow component for cycling through
        elements-images or slides of text-like a carousel.`,
      },
    },
  },
};

function Story(args) {
  const slides = [
    'First slide',
    'Second slide',
    'Third slide',
  ];

  return (
    <Carousel {...args}>
      {slides.map((slide, index) => (
        <Carousel.Item key={slide} active={index === 0}>
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor="secondary"
            textColor="white-50"
          >
            <Heading banner={3}>{slide}</Heading>
          </Flex>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

// eslint-disable-next-line
function StoryWidthCaptions({ dark, ...args }) {
  const slides = [
    'First slide',
    'Second slide',
    'Third slide',
  ];

  return (
    <Carousel dark={dark} {...args}>
      {slides.map((slide, index) => (
        <Carousel.Item key={slide} active={index === 0}>
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor={dark ? 'light' : 'secondary'}
            textColor={dark ? 'black-50' : 'white-50'}
          >
            <Heading banner={3}>{slide}</Heading>
          </Flex>
          <Carousel.Caption d={{ xs: 'none', md: 'block' }}>
            <Heading as="h5">
              {slide}
              {' '}
              label
            </Heading>
            <Text>
              Some representative placeholder
              content for the first slide.
            </Text>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export const SlidesOnly = Story.bind({});
SlidesOnly.args = {
  id: 'CarouselExampleSlidesOnly',
};
SlidesOnly.storyName = 'Slides only';

export const WidthControls = Story.bind({});
WidthControls.args = {
  id: 'CarouselExampleControls',
  controls: true,
};
WidthControls.storyName = 'Width controls';

export const WidthIndicators = Story.bind({});
WidthIndicators.args = {
  id: 'CarouselExampleIndiacators',
  controls: true,
  indicators: true,
  ride: true,
};
WidthIndicators.storyName = 'Width indicators';

export const WidthCaptions = StoryWidthCaptions.bind({});
WidthCaptions.args = {
  id: 'CarouselExampleCaptions',
  controls: true,
  indicators: true,
  ride: false,
};
WidthCaptions.storyName = 'Width captions';

export const Crossfade = Story.bind({});
Crossfade.args = {
  id: 'CarouselExampleCrossfade',
  controls: true,
  indicators: true,
  fade: true,
};

export function IndividualIntervals() {
  const slides = [
    'First slide',
    'Second slide',
    'Third slide',
  ];

  const intervals = [10000, 2000, null];

  return (
    <Carousel id="CarouselCustomIntervals" controls indicators>
      {slides.map((slide, index) => (
        <Carousel.Item
          key={slide}
          active={index === 0}
          interval={intervals[index]}
        >
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor="secondary"
            textColor="white-50"
          >
            <Heading banner={3}>{slide}</Heading>
          </Flex>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
IndividualIntervals.storyName = 'Individual intervals';

export const DisableTouchSwiping = Story.bind({});
DisableTouchSwiping.args = {
  id: 'carouselExampleControlsNoTouching',
  controls: true,
  indicators: true,
  touch: false,
  interval: false,
};
DisableTouchSwiping.storyName = 'Disable touch swiping';

export const Dark = StoryWidthCaptions.bind({});
Dark.args = {
  id: 'carouselExampleDark',
  controls: true,
  indicators: true,
  dark: true,
};
