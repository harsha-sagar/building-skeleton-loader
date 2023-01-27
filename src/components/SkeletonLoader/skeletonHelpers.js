import React, { Fragment } from 'react';
import { SkeletonElement, CollectionBlock } from './skeletonStyles';

export const getSkeleton = elemArr => {
  let i = 0;
  return elemArr.map(elemInfo => (
    <Fragment key={i++}>{prepareSkeleton(elemInfo)}</Fragment>
  ));
};

const prepareSkeleton = elemInfo => {
  const { elemCategory, arrangeDirection, children } = elemInfo;

  switch (elemCategory) {
    case 'collection':
      return (
        <CollectionBlock arrangeDirection={arrangeDirection}>
          {getSkeleton(children)}
        </CollectionBlock>
      );
    default:
      return prepareSkeletonElem(elemInfo);
  }
};

const prepareSkeletonElem = elemArr => {
  const { elemCategory, repeat = 1, width, height } = elemArr;

  let j = 0;
  const skeletonElement = Array(repeat)
    .fill('')
    .map(() => (
      <SkeletonElement
        key={j++}
        elemCategory={elemCategory}
        width={width}
        height={height}
      />
    ));

  return <div>{skeletonElement}</div>;
};
