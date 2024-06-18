// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as LikesAPI from '@valtown/sdk/resources/me/likes';

export class Likes extends APIResource {
  /**
   * Get vals liked by the current user
   */
  list(query: LikeListParams, options?: Core.RequestOptions): Core.APIPromise<LikeListResponse> {
    return this._client.get('/v1/me/likes', { query, ...options });
  }
}

export interface LikeListResponse {
  data: Array<LikeListResponse.Data>;

  links: LikeListResponse.Links;
}

export namespace LikeListResponse {
  /**
   * A Val
   */
  export interface Data {
    id: string;

    /**
     * The user who created this val
     */
    author: Data.Author | null;

    code: string | null;

    createdAt: string;

    name: string;

    privacy: 'public' | 'unlisted' | 'private';

    public: boolean;

    type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

    version: number;
  }

  export namespace Data {
    /**
     * The user who created this val
     */
    export interface Author {
      id: string;

      username: string | null;
    }
  }

  export interface Links {
    self: string;

    next?: string;

    prev?: string;
  }
}

export interface LikeListParams {
  limit: number;

  offset: number;
}

export namespace Likes {
  export import LikeListResponse = LikesAPI.LikeListResponse;
  export import LikeListParams = LikesAPI.LikeListParams;
}
