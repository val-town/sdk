// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ProfileAPI from './profile';

export class Profile extends APIResource {
  /**
   * Get profile information for the current user
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/v1/me/', options);
  }
}

export interface ProfileRetrieveResponse {
  id: string;

  bio: string | null;

  profileImageUrl: string | null;

  tier: 'free' | 'pro' | null;

  username: string | null;
}

export namespace Profile {
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
}
