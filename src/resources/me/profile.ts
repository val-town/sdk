// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as ProfileAPI from '@valtown/sdk/resources/me/profile';

export class Profile extends APIResource {
  /**
   * Get profile information for the current user
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/v1/me', options);
  }
}

/**
 * User information, with tier included
 */
export interface ProfileRetrieveResponse {
  id: string;

  /**
   * The user’s biography, if they have provided one
   */
  bio: string | null;

  /**
   * URL that points to the user’s profile image, if one exists
   */
  profileImageUrl: string | null;

  tier: 'free' | 'pro' | null;

  /**
   * The user’s handle that they chose for themselves. Does not include the @ symbol
   */
  username: string | null;
}

export namespace Profile {
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
}
