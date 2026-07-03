/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import * as actionTypes from './types';

export const startLoading = (actionName) => async (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING,
    payload: actionName,
  });
};

export const finishLoading = (actionName) => async (dispatch) => {
  dispatch({
    type: actionTypes.FINISH_LOADING,
    payload: actionName,
  });
};
