const parseData = ({data, column}) => {
  const keys = column.map(obj => obj.name);
  const obj = []
  data.map(info => {
      const values = {};
      info.map((item,index) => { 
        values[keys[index]] = item})
        obj.push(values)
        })
   return obj;
}
      
export { parseData };
