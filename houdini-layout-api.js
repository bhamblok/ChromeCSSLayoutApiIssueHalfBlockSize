registerLayout('block-like', class {
  static childInputProperties = [
    'height',
  ];

  async intrinsicSizes(children, edges, styleMap) {}

  async layout(children, edges, constraints, styleMap) {
    const childFragments = await Promise.all(
      children.map((child) => {
        return child.layoutNextFragment({
          fixedBlockSize: child.styleMap.get('height').value,
        })
      })
    );
    
    let autoBlockSize = 0;
    childFragments.forEach((fragment) => {
      fragment.blockOffset = autoBlockSize;
      autoBlockSize += fragment.blockSize;
    });

    return {
      autoBlockSize,
      childFragments,
    };
  }
});
