
import Test from './coffee/init.coffee';
import './scss/app.scss';

const test = new Test();
const name = 'Web';
const dev = 'Developer';

console.log(`Hello, ${name} ${dev}!`);
console.log(test);
=======
import css from 'scss/app.scss'
import Info from 'coffee/init.coffee'

let info = new Info()
info.init();


let name = "Web";
let dev = "Developer"
console.log(`Hello, ${name} ${dev}!`);
