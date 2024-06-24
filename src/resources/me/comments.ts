// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as CommentsAPI from '@valtown/sdk/resources/me/comments';
import { PageCursorURL, type PageCursorURLParams } from '@valtown/sdk/pagination';

export class Comments extends APIResource {
  /**
   * Get comments related to current user, either given or received
   */
  list(
    query: CommentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CommentListResponsesPageCursorURL, CommentListResponse> {
    return this._client.getAPIList('/v1/me/comments', CommentListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class CommentListResponsesPageCursorURL extends PageCursorURL<CommentListResponse> {}

export interface CommentListResponse {
  id: string;

  author: CommentListResponse.Author;

  comment: string;

  createdAt: string;

  val: CommentListResponse.Val;
}

export namespace CommentListResponse {
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

    /**
     * This val’s privacy setting. Unlisted vals do not appear on profile pages or
     * elsewhere, but you can link to them.
     */
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

export interface CommentListParams extends PageCursorURLParams {
  /**
   * Whether to get comments you have received, given, or both
   */
  relationship: 'any' | 'received' | 'given';

  /**
   * Include items created after this date
   */
  since?: string;

  /**
   * Include items created before this date
   */
  until?: string;
}

export namespace Comments {
  export import CommentListResponse = CommentsAPI.CommentListResponse;
  export import CommentListResponsesPageCursorURL = CommentsAPI.CommentListResponsesPageCursorURL;
  export import CommentListParams = CommentsAPI.CommentListParams;
}
