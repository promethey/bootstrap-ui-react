import React from 'react';
import { Container, Row, Col } from 'components';

export default {
  title: 'Layout/Column',
  component: Col,
  subcomponents: { 'Col.Break': Col.Break, Container, Row },
};

export function VerticalAlignment() {
  return (
    <Container>
      <Row alignItems="start" mb={3} bgColor="light" isBorder style={{ height: '200px' }}>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
      </Row>
      <Row alignItems="center" mb={3} bgColor="light" isBorder style={{ height: '200px' }}>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
      </Row>
      <Row alignItems="end" mb={3} bgColor="light" isBorder style={{ height: '200px' }}>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
      </Row>
      <Row bgColor="light" isBorder style={{ height: '200px' }}>
        <Col alignSelf="start" padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col alignSelf="center" padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
        <Col alignSelf="end" padding={3} bgColor="light" isBorder>
          One of three columns
        </Col>
      </Row>
    </Container>
  );
}
VerticalAlignment.storyName = 'Vertical alignment';

export function HorizontalAlignment() {
  return (
    <Container>
      <Row justifyContent="start" mb={3}>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
      <Row justifyContent="center" mb={3}>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
      <Row justifyContent="end" mb={3}>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
      <Row justifyContent="around" mb={3}>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
      <Row justifyContent="between" mb={3}>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
      <Row justifyContent="evenly">
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          One of two columns
        </Col>
      </Row>
    </Container>
  );
}
HorizontalAlignment.storyName = 'Horizontal alignment';

export function ColumnWrapping() {
  return (
    <Container>
      <Row>
        <Col xs={9} padding={3} bgColor="light" isBorder>
          .col-9
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          .col-4
          <br />
          Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto
          a new line as one contiguous unit.
        </Col>
        <Col xs={6} padding={3} bgColor="light" isBorder>
          .col-6
          <br />
          Subsequent columns continue along the new line.
        </Col>
      </Row>
    </Container>
  );
}
ColumnWrapping.storyName = 'Column wrapping';

export function ColumnBreaks() {
  return (
    <>
      <Container mb={3}>
        <Row>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col.Break />
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col.Break display="none" displayMd="block" />
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
          <Col xs={6} sm={3} padding={3} bgColor="light" isBorder>
            .col-6 .col-sm-3
          </Col>
        </Row>
      </Container>
    </>
  );
}
ColumnBreaks.storyName = 'Column breaks';

export function OrderClasses() {
  return (
    <>
      <Container mb={3}>
        <Row>
          <Col padding={3} bgColor="light" isBorder>
            First in DOM, no order applied
          </Col>
          <Col order={5} padding={3} bgColor="light" isBorder>
            Second in DOM, with a larger order
          </Col>
          <Col order={1} padding={3} bgColor="light" isBorder>
            Third in DOM, with an order of 1
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col order="last" padding={3} bgColor="light" isBorder>
            First in DOM, no order applied
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Second in DOM, with a larger order
          </Col>
          <Col order="first" padding={3} bgColor="light" isBorder>
            Third in DOM, with an order of 1
          </Col>
        </Row>
      </Container>
    </>
  );
}
OrderClasses.storyName = 'Order classes';

export function OffsetClasses() {
  return (
    <Container>
      <Row mb={3}>
        <Col
          xs={false}
          md={4}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-4
        </Col>
        <Col
          xs={false}
          md={4}
          offsetMd={4}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-4 .offset-md-4
        </Col>
      </Row>
      <Row mb={3}>
        <Col
          xs={false}
          md={3}
          offsetMd={3}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-3 .offset-md-3
        </Col>
        <Col
          xs={false}
          md={3}
          offsetMd={3}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-3 .offset-md-3
        </Col>
      </Row>
      <Row>
        <Col
          xs={false}
          md={6}
          offsetMd={3}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-6 .offset-md-3
        </Col>
      </Row>
    </Container>
  );
}
OffsetClasses.storyName = 'Offset classes';

export function OffsetClasses2() {
  return (
    <Container>
      <Row mb={3}>
        <Col
          xs={false}
          sm={5}
          md={6}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-sm-5 .col-md-6
        </Col>
        <Col
          xs={false}
          sm={5}
          offsetSm={2}
          md={6}
          offsetMd={0}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
        </Col>
      </Row>
      <Row>
        <Col
          xs={false}
          sm={6}
          md={5}
          lg={6}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-sm-6 .col-md-5 .col-lg-6
        </Col>
        <Col
          xs={false}
          sm={6}
          md={5}
          offsetMd={2}
          lg={6}
          offsetLg={0}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
        </Col>
      </Row>
    </Container>
  );
}
OffsetClasses2.storyName = 'Offset classes 2';

export function MarginUtilities() {
  return (
    <Container>
      <Row mb={3}>
        <Col
          xs={false}
          md={4}
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-4
        </Col>
        <Col
          xs={false}
          md={4}
          ms="auto"
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-4 .ms-auto
        </Col>
      </Row>
      <Row mb={3}>
        <Col
          xs={false}
          md={3}
          ms="auto"
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-3 .ms-auto
        </Col>
        <Col
          xs={false}
          md={3}
          ms="auto"
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-md-3 .ms-auto
        </Col>
      </Row>
      <Row>
        <Col
          xs="auto"
          me="auto"
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-auto .me-auto
        </Col>
        <Col
          xs="auto"
          padding={3}
          bgColor="light"
          isBorder
        >
          .col-auto
        </Col>
      </Row>
    </Container>
  );
}
MarginUtilities.storyName = 'Margin utilities';

export function StandaloneColumnClasses() {
  return (
    <Container>
      <Col xs={3} padding={3} bgColor="light" isBorder>
        .col-3: width of 25%
      </Col>
      <Col xs={false} sm={9} padding={3} bgColor="light" isBorder>
        .col-sm-9: width of 75% above sm breakpoint
      </Col>
    </Container>
  );
}
StandaloneColumnClasses.storyName = 'Standalone column classes';
