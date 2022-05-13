import React from 'react';
import { Container, Row, Col } from '../components';

export default {
  title: 'Layout/Grid',
  component: Row,
  subcomponents: { Container, Col },
  parameters: {
    docs: {
      description: {
        component: `Use our powerful mobile-first flexbox grid to
        build layouts of all shapes and sizes thanks to a twelve column
        system, six default responsive tiers, Sass variables and mixins,
        and dozens of predefined classes.`,
      },
    },
  },
};

export function Default() {
  return (
    <Container>
      <Row>
        <Col padding={3} bgColor="light" isBorder>
          Column
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          Column
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          Column
        </Col>
      </Row>
    </Container>
  );
}

export function EqualWidth() {
  return (
    <Container>
      <Row mb={3}>
        <Col padding={3} bgColor="light" isBorder>
          1 of 2
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          2 of 2
        </Col>
      </Row>
      <Row>
        <Col padding={3} bgColor="light" isBorder>
          1 of 3
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          2 of 3
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
EqualWidth.storyName = 'Equal-width';

export function ColumnWidth() {
  return (
    <Container>
      <Row mb={3}>
        <Col padding={3} bgColor="light" isBorder>
          1 of 3
        </Col>
        <Col xs={6} padding={3} bgColor="light" isBorder>
          2 of 3 (wider)
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col padding={3} bgColor="light" isBorder>
          1 of 3
        </Col>
        <Col xs={5} padding={3} bgColor="light" isBorder>
          2 of 3 (wider)
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
ColumnWidth.storyName = 'Setting one column width';

export function VariableWidthContent() {
  return (
    <Container>
      <Row justifyContentMd="center" mb={3}>
        <Col lg={2} padding={3} bgColor="light" isBorder>
          1 of 3
        </Col>
        <Col md="auto" padding={3} bgColor="light" isBorder>
          Variable width content
        </Col>
        <Col lg={2} padding={3} bgColor="light" isBorder>
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col padding={3} bgColor="light" isBorder>
          1 of 3
        </Col>
        <Col md="auto" padding={3} bgColor="light" isBorder>
          Variable width content
        </Col>
        <Col lg={2} padding={3} bgColor="light" isBorder>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
VariableWidthContent.storyName = 'Variable width content';

export function AllBreakpoints() {
  return (
    <Container>
      <Row mb={3}>
        <Col padding={3} bgColor="light" isBorder>
          col
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          col
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          col
        </Col>
        <Col padding={3} bgColor="light" isBorder>
          col
        </Col>
      </Row>
      <Row>
        <Col xs={8} padding={3} bgColor="light" isBorder>
          col-8
        </Col>
        <Col xs={4} padding={3} bgColor="light" isBorder>
          col-4
        </Col>
      </Row>
    </Container>
  );
}
AllBreakpoints.storyName = 'All breakpoints';

export function StackedToHorizontal() {
  return (
    <Container>
      <Row mb={3}>
        <Col xs={false} sm={8} padding={3} bgColor="light" isBorder>
          col-sm-8
        </Col>
        <Col xs={false} sm={4} padding={3} bgColor="light" isBorder>
          col-sm-4
        </Col>
      </Row>
      <Row>
        <Col xs={false} sm padding={3} bgColor="light" isBorder>
          col-sm
        </Col>
        <Col xs={false} sm padding={3} bgColor="light" isBorder>
          col-sm
        </Col>
        <Col xs={false} sm padding={3} bgColor="light" isBorder>
          col-sm
        </Col>
      </Row>
    </Container>
  );
}
StackedToHorizontal.storyName = 'Stacked to horizontal';

export function MixAndMatch() {
  return (
    <Container>
      <Row mb={3}>
        <Col xs={false} md={8} padding={3} bgColor="light" isBorder>
          .col-md-8
        </Col>
        <Col xs={6} md={4} padding={3} bgColor="light" isBorder>
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row mb={3}>
        <Col xs={6} md={4} padding={3} bgColor="light" isBorder>
          .col-6 .col-md-4
        </Col>
        <Col xs={6} md={4} padding={3} bgColor="light" isBorder>
          .col-6 .col-md-4
        </Col>
        <Col xs={6} md={4} padding={3} bgColor="light" isBorder>
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row>
        <Col xs={6} padding={3} bgColor="light" isBorder>
          .col-6
        </Col>
        <Col xs={6} padding={3} bgColor="light" isBorder>
          .col-6
        </Col>
      </Row>
    </Container>
  );
}
MixAndMatch.storyName = 'Mix and match';

export function RowColumns() {
  return (
    <>
      <Container mb={3}>
        <Row cols={2}>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
      <Container mb={3}>
        <Row cols={3}>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
      <Container mb={3}>
        <Row cols="auto">
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
      <Container mb={3}>
        <Row cols={4}>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
      <Container mb={3}>
        <Row cols={4}>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col xs={6} padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
      <Container mb={3}>
        <Row cols={1} sm={2} md={4}>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
          <Col padding={3} bgColor="light" isBorder>
            Column
          </Col>
        </Row>
      </Container>
    </>
  );
}
RowColumns.storyName = 'Row columns';

export function Nesting() {
  return (
    <Container>
      <Row>
        <Col xs={false} sm={3} padding={3} bgColor="light" isBorder>
          Level 1: .col-sm-3
        </Col>
        <Col xs={false} sm={9} padding={3} bgColor="light" isBorder>
          <Row>
            <Col xs={8} sm={6} padding={3} bgColor="light" isBorder>
              Level 2: .col-8 .col-sm-6
            </Col>
            <Col xs={4} sm={6} padding={3} bgColor="light" isBorder>
              Level 2: .col-4 .col-sm-6
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
