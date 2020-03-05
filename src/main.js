import Vue from "vue";
import App from "./App.vue";
import {
  Tab,
  Tabs,
  IndexBar,
  Tabbar,
  TabbarItem,
  IndexAnchor,
  Step,
  Steps,
  NavBar,
  Toast,
  Field,
  Icon,
  Checkbox,
  Popup,
  CheckboxGroup,
  DropdownItem,
  DropdownMenu,
  DatetimePicker,
  Row,
  Col,
  Cell,
  CellGroup,
  Button,
  Form
} from "vant";
Vue.use(Form)
  .use(Checkbox)
  .use(Popup)
  .use(CheckboxGroup)
  .use(Tab)
  .use(Tabs)
  .use(Steps)
  .use(Step)
  .use(NavBar)
  .use(Toast)
  .use(Field)
  .use(Icon)
  .use(DropdownMenu)
  .use(DatetimePicker)
  .use(DropdownItem)
  .use(Row)
  .use(Col)
  .use(Cell)
  .use(Button)
  .use(CellGroup)
  .use(IndexBar)
  .use(TabbarItem)
  .use(Tabbar)
  .use(IndexAnchor);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
