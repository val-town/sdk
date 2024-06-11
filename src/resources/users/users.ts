// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as UsersAPI from './users';
import * as ValsAPI from './vals';

export class Users extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);

  /**
   * Get basic information about a user
   */
  retrieve(userid: string, options?: Core.RequestOptions): Core.APIPromise<UserRetrieveResponse> {
    return this._client.get(`/v1/users/${userid}`, options);
  }
}

/**
 * User object
 */
export interface UserRetrieveResponse {
  id: string;

  bio: string | null;

  profileImageUrl: string | null;

  username: string | null;
}

export namespace Users {
  export import UserRetrieveResponse = UsersAPI.UserRetrieveResponse;
  export import Vals = ValsAPI.Vals;
  export import ValListParams = ValsAPI.ValListParams;
}
