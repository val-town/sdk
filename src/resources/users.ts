// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Access public user information and list other people’s vals
 */
export class Users extends APIResource {
  /**
   * Get basic information about a user
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<Shared.User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }
}
