// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

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
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/users/${userId}`, options);
  }
}
