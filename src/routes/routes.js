import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '~/pages/HomePage';
import ModelCharacter from '~/pages/ModalCharacter';
import ModelViewer from '~/pages/ModelViewer';
import PageNotFound from '~/pages/PageNotFound';
import { ROUTE_PATH } from './route.constant';
import { IntlProvider } from 'react-intl';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';
import AppLocale from '~/common/langs';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
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

export const Routes = () => {
  const {
    data: { locale, direction }
  } = useTheme();

  const currentAppLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ConfigProvider
        locale={currentAppLocale.antd}
        direction={direction}
        autoInsertSpaceInButton={false}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </IntlProvider>
  );
};
