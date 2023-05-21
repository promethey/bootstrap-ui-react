import React from 'react';
import PropTypes from 'prop-types';
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
        <Carousel.Item key={slide} isActive={index === 0}>
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor="secondary"
            textColor="white-50"
          >
            <Heading>{slide}</Heading>
          </Flex>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function StoryWidthCaptions({ isDark, ...args }) {
  const slides = [
    'First slide',
    'Second slide',
    'Third slide',
  ];

  return (
    <Carousel isDark={isDark} {...args}>
      {slides.map((slide, index) => (
        <Carousel.Item key={slide} isActive={index === 0}>
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor={isDark ? 'light' : 'secondary'}
            textColor={isDark ? 'black-50' : 'white-50'}
          >
            <Heading>{slide}</Heading>
          </Flex>
          <Carousel.Caption display="none" displayMd="block">
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
StoryWidthCaptions.propTypes = {
  isDark: PropTypes.bool,
};
StoryWidthCaptions.defaultProps = {
  isDark: false,
};

export const SlidesOnly = Story.bind({});
SlidesOnly.args = {
  id: 'CarouselExampleSlidesOnly',
};
SlidesOnly.storyName = 'Slides only';

export const WidthControls = Story.bind({});
WidthControls.args = {
  id: 'CarouselExampleControls',
  isControls: true,
};
WidthControls.storyName = 'Width controls';

export const WidthIndicators = Story.bind({});
WidthIndicators.args = {
  id: 'CarouselExampleIndiacators',
  isControls: true,
  isIndicators: true,
  isRide: true,
};
WidthIndicators.storyName = 'Width indicators';

export const WidthCaptions = StoryWidthCaptions.bind({});
WidthCaptions.args = {
  id: 'CarouselExampleCaptions',
  isControls: true,
  isIndicators: true,
  isRide: false,
};
WidthCaptions.storyName = 'Width captions';

export const Crossfade = Story.bind({});
Crossfade.args = {
  id: 'CarouselExampleCrossfade',
  isControls: true,
  isIndicators: true,
  isFade: true,
};

export function IndividualIntervals() {
  const slides = [
    'First slide',
    'Second slide',
    'Third slide',
  ];

  const intervals = [10000, 2000, null];

  return (
    <Carousel id="CarouselCustomIntervals" isControls isIndicators>
      {slides.map((slide, index) => (
        <Carousel.Item
          key={slide}
          isActive={index === 0}
          interval={intervals[index]}
        >
          <Flex
            style={{ height: '400px' }}
            justifyContent="center"
            alignItems="center"
            bgColor="secondary"
            textColor="white-50"
          >
            <Heading>{slide}</Heading>
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
  isControls: true,
  isIndicators: true,
  isTouch: false,
  interval: false,
};
DisableTouchSwiping.storyName = 'Disable touch swiping';

export const Dark = StoryWidthCaptions.bind({});
Dark.args = {
  id: 'carouselExampleDark',
  isControls: true,
  isIndicators: true,
  isDark: true,
};
