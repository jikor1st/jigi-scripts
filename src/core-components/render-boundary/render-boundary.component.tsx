import React from 'react';

// lib
// import { useTheme } from '@mui/styles';

// hooks
// import { useRenderQuery } from '@/hooks/index';

// types
// import type { RenderBoundaryComponentsTypes } from './render-boundary.type';

/* 각 device 별 boundary 컴포넌트를 정의해줍니다. */
const RenderBoundary: any = {
  // Mobile: ({ children, boundary }) => {
  //   const { devicepoints } = useTheme();
  //   const isQuery = useRenderQuery(devicepoints.mobile, {
  //     boundary: boundary,
  //   });
  //   return <React.Fragment>{isQuery ? children : null}</React.Fragment>;
  // },
  // Tablet: ({ children, boundary }) => {
  //   const { devicepoints } = useTheme();
  //   const isQuery = useRenderQuery(devicepoints.tablet, {
  //     boundary: boundary,
  //   });
  //   return <React.Fragment>{isQuery ? children : null}</React.Fragment>;
  // },
  // Desktop: ({ children, boundary }) => {
  //   const { devicepoints } = useTheme();
  //   let isQuery = useRenderQuery(devicepoints.desktop, {
  //     boundary: boundary,
  //   });
  //   return <React.Fragment>{isQuery ? children : null}</React.Fragment>;
  // },
};

export { RenderBoundary };
