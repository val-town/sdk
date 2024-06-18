// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as CommentsAPI from '@valtown/sdk/resources/me/comments';

export class Comments extends APIResource {
  /**
   * Get comments related to current user, either given or received
   */
  list(query: CommentListParams, options?: Core.RequestOptions): Core.APIPromise<CommentListResponse> {
    return this._client.get('/v1/me/comments', { query, ...options });
  }
}

export interface CommentListResponse {
  data: Array<CommentListResponse.Data>;

  links: CommentListResponse.Links;
}

export namespace CommentListResponse {
  export interface Data {
    id: string;

    author: Data.Author;

    comment: string;

    createdAt: string;

    val: Data.Val;
  }

  export namespace Data {
    export interface Author {
      id: string;

      username: string | null;
    }

    export interface Val {
      id: string;

      /**
       * The user who created this val
       */
      author: Val.Author | null;

      name: string;

      privacy: 'public' | 'unlisted' | 'private';

      version: number;
    }

    export namespace Val {
      /**
       * The user who created this val
       */
      export interface Author {
        id: string;

        username: string | null;
      }
    }
  }

  export interface Links {
    self: string;

    next?: string;

    prev?: string;
  }
}

export interface CommentListParams {
  limit: number;

  offset: number;

  relationship: 'any' | 'received' | 'given';

  since?: string;

  until?: string;
}

export namespace Comments {
  export import CommentListResponse = CommentsAPI.CommentListResponse;
  export import CommentListParams = CommentsAPI.CommentListParams;
}
