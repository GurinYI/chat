import {HomePage} from './pages/Home';
import Link from './components/link'
import {registerComponent} from "./utils/registerComponents";
import {render} from "./utils/render";
import Card from "./components/Card";
import { Button } from "./components/Button";

registerComponent('Button', Button);
registerComponent('Card', Card);


window.addEventListener('DOMContentLoaded', () => {
  render('home')
});