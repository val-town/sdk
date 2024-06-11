// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as LikesAPI from './likes';

export class Likes extends APIResource {
  /**
   * Get vals liked by the current user
   */
  list(query: LikeListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/me/likes', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface LikeListParams {
  limit: number;

  offset: number;
}

export namespace Likes {
  export import LikeListParams = LikesAPI.LikeListParams;
}
