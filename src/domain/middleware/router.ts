/*
 * Exodev React kit
 *
 * Copyright © 2016 Exodev, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import page from 'page';
const logger = getLogger('Middleware/router');
import { getLogger } from 'domain/logger';
import { updateCurrentPage } from 'domain/store/reducers/main';
import { getUser } from 'domain/store/selectors/main';

type Context = { params: { name: string } };
type OnRoute = (ctx: Context) => void;

function authMiddleware(ctx, next) {
  const userId = getUser().id;
  if (userId) {
    logger.info('User authenticated', userId);
    next();
  } else {
    logger.info('User not authenticated');
    page('/login');
  }
}

function loginRouter(onRoute: OnRoute) {
  page('/login', onRoute);
}

function homeRouter(onRoute: OnRoute) {
  page('/', authMiddleware, onRoute);
}

export default function startRouters() {
  loginRouter(ctx => {
    logger.debug('Login route');
    updateCurrentPage({ name: 'LOGIN_PAGE', value: null });
  });

  homeRouter(ctx => {
    logger.debug('Home route');
    updateCurrentPage({ name: 'HOME_PAGE', value: 0 });
  });

  page();
}

export function navigate(route: string, event: any) {
  if (event) event.preventDefault();
  page(route);
}
