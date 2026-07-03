/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import { createSelector } from 'reselect';
const authSelect = (state) => state.auth;

export const selectAuth = createSelector([authSelect], (auth) => auth);
export const selectCurrentAdmin = createSelector([authSelect], (auth) => auth.current);

export const isLoggedIn = createSelector([authSelect], (auth) => auth.isLoggedIn);
