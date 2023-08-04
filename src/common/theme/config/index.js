import {
  SIDE_NAV_LIGHT,
  NAV_TYPE_SIDE,
  DIR_LTR
} from '~/common/constants/ThemeConstant';

export const THEME_CONFIG = {
  navCollapsed: false,
  sideNavTheme: SIDE_NAV_LIGHT,
  locale: sessionStorage.getItem('lang') === 'en' ? 'en' : 'ja',
  navType: NAV_TYPE_SIDE,
  topNavColor: '#3e82f7',
  headerNavColor: '',
  mobileNav: false,
  currentTheme: 'light',
  direction: DIR_LTR
};
