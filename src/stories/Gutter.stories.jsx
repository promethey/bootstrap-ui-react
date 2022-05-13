import React from 'react';
import {
  Container, Row, Col, Flex,
} from '../components';

export default {
  title: 'Layout/Gutter',
  component: Row,
};

export function HorizontalGutters() {
  return (
    <Container>
      <Row gutterX={5}>
        <Col>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}
HorizontalGutters.storyName = 'Horizontal gutters';

export function OverflowHidden() {
  return (
    <Container overflow="hidden">
      <Row gutterX={5}>
        <Col>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}
OverflowHidden.storyName = 'Overflow hidden';

export function VerticalGutters() {
  return (
    <Container overflow="hidden">
      <Row gutterY={5}>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}
VerticalGutters.storyName = 'Vertical gutters';

export function HorizontalAndVerticalGutters() {
  return (
    <Container>
      <Row gutter={2}>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
        <Col xs={6}>
          <Flex padding={3} bgColor="light" isBorder>
            Custom column padding
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}
HorizontalAndVerticalGutters.storyName = 'Horizontal and vertical gutters';

export function RowColumnsGutters() {
  return (
    <Container>
      <Row cols={2} colsLg={5} gutter={2} gutterLg={3}>
        {[...new Array(10)].map(() => (
          <Col>
            <Flex padding={3} bgColor="light" isBorder>
              Row column
            </Flex>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
RowColumnsGutters.storyName = 'Row columns gutters';

export function NoGutters() {
  return (
    <Container>
      <Row gutter={0}>
        <Col xs={false} sm={6} md={8} padding={3} bgColor="light" isBorder>
          .col-sm-6 .col-md-8
        </Col>
        <Col xs={6} md={4} padding={3} bgColor="light" isBorder>
          .col-6 .col-md-4
        </Col>
      </Row>
    </Container>
  );
}
