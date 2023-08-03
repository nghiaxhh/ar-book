import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '~/pages/PageNotFound';
import { ROUTE_PATH } from './route.constant';
import HomePage from '~/pages/HomePage';
import ModelCharacter from '~/pages/ModalCharacter';
import PreviewModel from '~/pages/PreviewModel';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        // element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.HOME,
            element: (
              <Suspense fallback={null}>
                <HomePage />
                {/* <PreviewModel /> */}
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.PREVIEW_MODEL,
            element: (
              <Suspense fallback={null}>
                <PreviewModel />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.CHARACTER,
            element: (
              <Suspense fallback={null}>
                <ModelCharacter />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);
