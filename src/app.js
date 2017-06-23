import Test from './coffee/init.coffee';
import './scss/app.scss';

const test = new Test();
const name = 'Web';
const dev = 'Developer';

console.log(`Hello, ${name} ${dev}!`);
console.log(test);
