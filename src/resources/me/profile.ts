// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Profile extends APIResource {
  /**
   * Get profile information for the current user
   */
  retrieve(options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/v1/me', options);
  }
}

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
  email: string | null;

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
   * Whether this is a user or an organization
   */
  type: 'user' | 'org';

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

export declare namespace Profile {
  export { type ProfileRetrieveResponse as ProfileRetrieveResponse };
}
