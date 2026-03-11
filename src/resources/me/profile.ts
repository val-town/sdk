// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * These endpoints
 * give access to details and data from the requesting user.
 */
export class Profile extends APIResource {
  /**
   * Get profile information for the current user
   */
  retrieve(options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/v1/me', options);
  }
}

/**
 * Your user information, with tier and email included
 */
export interface ProfileRetrieveResponse extends Shared.User {
  /**
   * Your email address
   */
  email: string | null;

  /**
   * Your account tier
   */
  tier: 'free' | 'pro' | null;
}

export declare namespace Profile {
  export { type ProfileRetrieveResponse as ProfileRetrieveResponse };
}
