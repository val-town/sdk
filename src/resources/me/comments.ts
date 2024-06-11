// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CommentsAPI from './comments';

export class Comments extends APIResource {
  /**
   * Get comments related to current user, either given or received
   */
  list(query: CommentListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/me/comments', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
  export import CommentListParams = CommentsAPI.CommentListParams;
}
