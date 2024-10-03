function MyMap(fn, context){
    let array = [...this];
    fn = context && fn.bind(context) || fn;
    for(let i = 0; i < array.length; i++)
    {
        let item = array[i];
        array[i] = fn(item, i, this);
    }
    return array;
}
Array.prototype.MyMap = MyMap;