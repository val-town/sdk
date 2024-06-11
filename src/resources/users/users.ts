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
 * User information
 */
export interface UserRetrieveResponse {
  id: string;

  /**
   * The user’s biography, if they have provided one
   */
  bio: string | null;

  /**
   * URL that points to the user’s profile image, if one exists
   */
  profileImageUrl: string | null;

  /**
   * The user’s handle that they chose for themselves. Does not include the @ symbol
   */
  username: string | null;
}

export namespace Users {
  export import UserRetrieveResponse = UsersAPI.UserRetrieveResponse;
  export import Vals = ValsAPI.Vals;
  export import ValListParams = ValsAPI.ValListParams;
}
