// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

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
  /**
   * The comment’s id
   */
  id: string;

  author: CommentListResponse.Author;

  /**
   * Text of the given comment, in Markdown
   */
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

    /**
     * Name of the val that is being commented on
     */
    name: string;

    /**
     * This resource's privacy setting. Unlisted resources do not appear on profile
     * pages or elsewhere, but you can link to them.
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

Comments.CommentListResponsesPageCursorURL = CommentListResponsesPageCursorURL;

export declare namespace Comments {
  export {
    type CommentListResponse as CommentListResponse,
    CommentListResponsesPageCursorURL as CommentListResponsesPageCursorURL,
    type CommentListParams as CommentListParams,
  };
}
