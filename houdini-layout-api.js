registerLayout('block-like', class {
  static layoutOptions = {
    childDisplay: 'block',
    sizing: 'manual',
  };

  static childInputProperties = [
    'height',
    'width',
  ];

  async intrinsicSizes(children, edges, styleMap) {}

  async layout(children, edges, constraints, styleMap) {
    const childFragments = await Promise.all(
      children.map((child) => {
        return child.layoutNextFragment({
          fixedBlockSize: child.styleMap.get('height').value,
          fixedInlineSize: child.styleMap.get('width').value,
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
