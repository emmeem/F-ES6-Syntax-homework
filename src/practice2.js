// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO contents与position 没有太大必要
    const contents = sections.map(obj => obj.content);
    const position = sections.map(obj => obj.index);

    // TODO 不是map的使用场景
    contents.map((c,index) => {
       items.splice(position[index]+index,0,c);
      }
    )
    return items;
}

export { inject };
