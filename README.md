# **Bootstrap-UI**

React component library basis on [Bootstrap](https://getbootstrap.com/) for fast creating web application. Documentation generate by [Storybook](storybook.js.org). Bootstrap [v5.1.3](https://www.npmjs.com/package/bootstrap)

![BootstrapUILogo](./img/bootstrap-ui.png)

### **Features**
+ 💥 Install library via [`npm`](https://www.npmjs.com) or [`yarn`](https://classic.yarnpkg.com/)
+ 🔥 Support latest version of [Bootstrap](https://github.com/twbs/bootstrap/releases/tag/v5.1.3)
+ 🧾 Documents generate by [Storybook](https://www.storybook.js.org)
+ 📖 Many informative, original and honest examples
+ ✨ Clean JavaScript (without TypeScript)

### **Preparation**

If you have not created a project yet, I advise you to create it through [`create-react-app`](https://create-react-app.dev). This is most simple way.

> Via npx
```shell
npx create-react-app [project-name]
```

This components library usage [**Boostrap**](https://getbootstrap.com) package. Before install library you need
install original [**Boostrap**](https://getbootstrap.com) package via `npm` or `yarn`

> Via npm
```shell
npm i bootstrap
```

> Via yarn
```shell
yarn add bootstrap
```

and you need import Bootstrap styles and script in `index.js` or `App.[js|jsx]` file (to your notice):

> Import styles
```shell
import 'bootstrap/dist/css/bootstrap.min.css';
```

> Import scripts
```shell
import 'bootstrap/dist/css/bootstrap.min.css';
```

### **Instalation**
If you successed complete Preparation block, go to install components library:

> Via npm
```shell
npm i bootstrap-ui
```

> Via yarn
```shell
yarn add bootstrap-ui
```

### **Import components**
```js
import { Badge } from 'bootstrap-ui';
import Badge from 'bootstrap-ui/Badge';
```

### **Usage Grid**
```js
import { Container, Row, Col } from 'bootstrap-ui';
// equivalent usage object Grid
// import { Grid } from 'bootstrap-ui'
// <Grid.Container /> === <Container>,
// <Grid.Row /> === <Row />
// <Grid.Col /> === <Col />

export default function Example() {
  return (
    <Container>
      <Row cols={2}>
        <Col>Column #1</Col>
        <Col>Column #2</Col>
        <Col>Column #3</Col>
        <Col>Column #4</Col>
      </Row>
    </Container>
  )
}
```

### **Components support**
+ ⬜ Accordion
+ ✅ Alert
+ ✅ Badge
+ ✅ Breadcrumb
+ ✅ Button
+ ✅ ButtonGroup
+ ✅ Card
+ ✅ Carousel
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
+ ✅ Box
+ ✅ Flex
+ ✅ Heading
+ ✅ Text

Good luck! The end...