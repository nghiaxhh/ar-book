import { ConfigProvider } from 'antd';
import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLocale from '~/common/langs';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';
import HomePage from '~/pages/HomePage';
import Introduce from '~/pages/Introduce';
import PageNotFound from '~/pages/PageNotFound';
import { ROUTE_PATH } from './route.constant';

const ModelBrain = React.lazy(() => import('~/pages/ModelBrain'));
const ModelIntestine = React.lazy(() => import('~/pages/ModelIntestine'));
const ModelStomach = React.lazy(() => import('~/pages/ModelStomach'));
const ModalCharacter = React.lazy(() => import('~/pages/ModalCharacter'));

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
            path: ROUTE_PATH.INTRODUCE,
            element: (
              <Suspense fallback={null}>
                <Introduce />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.MODEL_BRAIN,
            element: (
              <Suspense fallback={null}>
                <ModelBrain />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.MODEL_BRAIN,
            element: (
              <Suspense fallback={null}>
                <ModelBrain />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.MODEL_STOMACH,
            element: (
              <Suspense fallback={null}>
                <ModelStomach />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.MODEL_INTESTINE,
            element: (
              <Suspense fallback={null}>
                <ModelIntestine />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.MODEL_CHARACTER,
            element: (
              <Suspense fallback={null}>
                <ModalCharacter />
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
