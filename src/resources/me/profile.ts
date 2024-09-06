// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ProfileAPI from './profile';

export class Profile extends APIResource {
  /**
   * Get profile information for the current user
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/v1/me', options);
  }
}

/**
 * Your user information, with tier and email included
 */
export interface ProfileRetrieveResponse {
  /**
   * The ID of this user
   */
  id: string;

  /**
   * The user’s biography, if they have provided one
   */
  bio: string | null;

  /**
   * Your email address
   */
  email: string;

  links: ProfileRetrieveResponse.Links;

  /**
   * URL that points to the user’s profile image, if one exists
   */
  profileImageUrl: string | null;

  /**
   * Your account tier
   */
  tier: 'free' | 'pro' | null;

  /**
   * URL of this user’s profile on Val Town’s website
   */
  url: string;

  /**
   * The user’s handle that they chose for themselves. Does not include the @ symbol
   */
  username: string | null;
}

export namespace ProfileRetrieveResponse {
  export interface Links {
    /**
     * URL of this user on this API
     */
    self: string;
  }
}

export namespace Profile {
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
}
