import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '~/pages/HomePage';
import ModelCharacter from '~/pages/ModalCharacter';
import ModelViewer from '~/pages/ModelViewer';
import PageNotFound from '~/pages/PageNotFound';
import { ROUTE_PATH } from './route.constant';

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
                <ModelViewer />
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
