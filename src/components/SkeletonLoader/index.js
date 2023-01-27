import React, { useEffect, useState } from 'react';

import { LoaderWrapper, Loader } from './skeletonStyles';
import { getSkeleton } from './skeletonHelpers';

export default function SkeletonLoader({
  loading = true,
  skeletonBlueprint,
  children
}) {
  const [skeleton, setSkeleton] = useState(null);

  useEffect(() => {
    setSkeleton(getSkeleton(skeletonBlueprint));
  }, [skeletonBlueprint]);

  return loading ? (
    <LoaderWrapper>
      {skeleton}
      <Loader />
    </LoaderWrapper>
  ) : (
    <>{children}</>
  );
}
