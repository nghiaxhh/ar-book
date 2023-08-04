import { useMemo } from 'react';

import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import commonActions from '../actions/common';

export const useCommon = () => {
  const data = useSelector((state) => {
    return get(state, 'app.commonManagement');
  });

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(commonActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
