import styled, { css } from 'styled-components';

export const SkeletonElement = styled.div`
  margin: 10px auto;
  background: #c0c0c0;
  border-radius: 3px;

  ${({ elemCategory, width, height }) =>
    elemCategory == 'text' &&
    css`
      width: ${width};
      height: ${height};
    `}

  ${({ elemCategory, width, height }) =>
    elemCategory == 'circle' &&
    css`
      width: ${width};
      height: ${height};
      border-radius: 50%;
    `}
`;

export const CollectionBlock = styled.div`
  ${({ arrangeDirection }) =>
    (arrangeDirection === 'column' || arrangeDirection === 'row') &&
    css`
      display: flex;
      gap: 5px;
    `}
`;

export const LoaderWrapper = styled.div`
  position: relative;
`;

export const Loader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  animation: loader 1s infinite linear;
  @keyframes loader {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
