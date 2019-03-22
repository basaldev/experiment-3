/*
 * Exodev React kit
 *
 * Copyright © 2016 Exodev, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  updateCurrentUser,
} from 'domain/store/reducers/main';
import page from 'page';

export function onChangeCurrentUser(user) {
  console.log(user);
  updateCurrentUser(user);
  page('/');
}
