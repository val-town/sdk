// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as LikesAPI from '@valtown/sdk/resources/me/likes';
import { PageCursorURL, type PageCursorURLParams } from '@valtown/sdk/pagination';

export class Likes extends APIResource {
  /**
   * Get vals liked by the current user
   */
  list(
    query: LikeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LikeListResponsesPageCursorURL, LikeListResponse> {
    return this._client.getAPIList('/v1/me/likes', LikeListResponsesPageCursorURL, { query, ...options });
  }
}

export class LikeListResponsesPageCursorURL extends PageCursorURL<LikeListResponse> {}

/**
 * A Val
 */
export interface LikeListResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: LikeListResponse.Author | null;

  code: string | null;

  createdAt: string;

  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  public: boolean;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  version: number;
}

export namespace LikeListResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

export interface LikeListParams extends PageCursorURLParams {}

export namespace Likes {
  export import LikeListResponse = LikesAPI.LikeListResponse;
  export import LikeListResponsesPageCursorURL = LikesAPI.LikeListResponsesPageCursorURL;
  export import LikeListParams = LikesAPI.LikeListParams;
}
