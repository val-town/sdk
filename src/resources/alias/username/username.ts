// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as UsernameAPI from '@valtown/sdk/resources/alias/username/username';
import * as ValNameAPI from '@valtown/sdk/resources/alias/username/val-name';

export class Username extends APIResource {
  valName: ValNameAPI.ValName = new ValNameAPI.ValName(this._client);

  /**
   * Get basic details about a user, given their username
   */
  retrieve(username: string, options?: Core.RequestOptions): Core.APIPromise<UsernameRetrieveResponse> {
    return this._client.get(`/v1/alias/${username}`, options);
  }
}

/**
 * User information
 */
export interface UsernameRetrieveResponse {
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

export namespace Username {
  export import UsernameRetrieveResponse = UsernameAPI.UsernameRetrieveResponse;
  export import ValName = ValNameAPI.ValName;
  export import ValNameRetrieveResponse = ValNameAPI.ValNameRetrieveResponse;
}
