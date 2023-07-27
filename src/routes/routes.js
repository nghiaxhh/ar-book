import { Suspense } from 'react';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from './route.constant';
import ModelViewer from '~/pages/ModelViewer';
import PageNotFound from '~/pages/PageNotFound';
import HomePage from '~/pages/HomePage';

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
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.CHARACTER,
            element: (
              <Suspense fallback={null}>
                <ModelViewer />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);
