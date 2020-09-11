const inject = (items, sections) => {
    const contents = sections.map(obj => obj.content);
    const position = sections.map(obj => obj.index);

    contents.map((c,index) => {
       items.splice(position[index]+index,0,c);
      }
    )
    return items;
}

export { inject };
