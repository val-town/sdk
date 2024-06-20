// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as ValsAPI from '@valtown/sdk/resources/users/vals';
import { PageCursorURL, type PageCursorURLParams } from '@valtown/sdk/pagination';

export class Vals extends APIResource {
  /**
   * List a user's vals
   */
  list(
    userId: string,
    query: ValListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ValListResponsesPageCursorURL, ValListResponse> {
    return this._client.getAPIList(`/v1/users/${userId}/vals`, ValListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class ValListResponsesPageCursorURL extends PageCursorURL<ValListResponse> {}

/**
 * A Val
 */
export interface ValListResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: ValListResponse.Author | null;

  code: string | null;

  createdAt: string;

  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  public: boolean;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  version: number;
}

export namespace ValListResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

export interface ValListParams extends PageCursorURLParams {}

export namespace Vals {
  export import ValListResponse = ValsAPI.ValListResponse;
  export import ValListResponsesPageCursorURL = ValsAPI.ValListResponsesPageCursorURL;
  export import ValListParams = ValsAPI.ValListParams;
}
