// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ValsAPI from './vals';

/**
 * Access public user information and list other people’s vals
 */
export class Users extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);

  /**
   * Get basic information about a user
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/users/${userId}`, options);
  }
}

export namespace Users {
  export import Vals = ValsAPI.Vals;
  export import ValListParams = ValsAPI.ValListParams;
}
