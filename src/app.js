import DataInfo from './js/info';
import Obj from './coffee/init.coffee';

((w, d) => {
    const obj = new Obj();
    const dataInfo = DataInfo;
    const name = 'Neil';
    console.log(obj.init());
    console.log(dataInfo);
    console.log(name);
    console.log(d);
})(window, document);
