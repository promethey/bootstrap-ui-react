# **Bootstrap-UI**

ReactJS component library basis on [Bootstrap](https://getbootstrap.com/) for fast creating web application.

Documentation generate by [Storybook](storybook.js.org)

Currenlty: v1.0.0 | Bootstrap: [v5.1.3](https://www.npmjs.com/package/bootstrap)

![BootstrapUILogo](./img/bootstrap-ui.png)

### **Instalation**
```shell
npm i bootstrap-ui
```

### **Features**
+ 💥 Install library via [npm](https://www.npmjs.com)
+ 🔥 Support latest version of [Bootstrap](https://github.com/twbs/bootstrap/releases/tag/v5.1.3)
+ 🧾 Documents generate by [Storybook](https://www.storybook.js.org)
+ 📖 Many informative, original and honest examples
+ ✨ Clean JavaScript (without TS)

### **Import Example**
```js
import { Badge } from 'bootstrap-ui';
```

### **Usage Grid**
```js
import { Container, Row, Col } from 'bootstrap-ui';

export default function Example() {
  return (
    <Container>
      <Row cols={2}>
        <Col>
          Column #1
        </Col>
        <Col>
          Column #2
        </Col>
        <Col>
          Column #3
        </Col>
        <Col>
          Column #4
        </Col>
      </Row>
    </Container>
  )
}
```

### **Components Support**
+ ⬜ Accordion
+ ✅ Alert
+ ✅ Badge
+ ⬜ Breadcrumb
+ ✅ Button
+ ✅ ButtonGroup
+ ✅ Card
+ ⬜ Carousel
+ ✅ CloseButton
+ ⬜ Collapse
+ ✅ Dropdown
+ ✅ ListGroup
+ ⬜ Modal
+ ⬜ Nav
+ ⬜ Tab
+ ⬜ Navbar
+ ⬜ Offcanvas
+ ⬜ Pagination
+ ⬜ Placeholder
+ ✅ Progress
+ ✅ Spinner
+ ⬜ Toast
+ ✅ Flex
+ ✅ Text