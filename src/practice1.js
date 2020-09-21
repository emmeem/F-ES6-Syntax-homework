const parseData = ({data, column}) => {
  // TODO keys 没必要
  const keys = column.map(obj => obj.name);
  // TODO 使用map做数组与数组的转化，不用声明obj，查查map的使用
  const obj = []
  data.map(info => {
    const values = {};
    info.map((item,index) => { 
      values[keys[index]] = item})
      obj.push(values)})
  return obj;
}
      
export { parseData };
