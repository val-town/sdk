// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as ValsAPI from '@valtown/sdk/resources/users/vals';

export class Vals extends APIResource {
  /**
   * List a user's vals
   */
  list(
    userId: string,
    query: ValListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValListResponse> {
    return this._client.get(`/v1/users/${userId}/vals`, { query, ...options });
  }
}

export interface ValListResponse {
  data: Array<ValListResponse.Data>;

  links: ValListResponse.Links;
}

export namespace ValListResponse {
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

export interface ValListParams {
  limit: number;

  offset: number;
}

export namespace Vals {
  export import ValListResponse = ValsAPI.ValListResponse;
  export import ValListParams = ValsAPI.ValListParams;
}
