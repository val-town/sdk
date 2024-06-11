// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ValsAPI from './vals';

export class Vals extends APIResource {
  /**
   * Search for vals across the platform
   */
  list(query: ValListParams, options?: Core.RequestOptions): Core.APIPromise<ValListResponse> {
    return this._client.get('/v1/search/vals', { query, ...options });
  }
}

export interface ValListResponse {
  data: Array<ValListResponse.Data>;

  links: ValListResponse.Links;
}

export namespace ValListResponse {
  export interface Data {
    id: string;

    author: Data.Author;

    code: string;

    createdAt: string;

    name: string;

    privacy: string;

    public: boolean;

    runEndAt: string | null;

    runStartAt: string | null;

    version: number;
  }

  export namespace Data {
    export interface Author {
      id: string;

      username: string | null;
    }
  }

  export interface Links {
    self: string;

    nextUrl?: string;

    prevUrl?: string;
  }
}

export interface ValListParams {
  limit: number;

  offset: number;

  query: string;
}

export namespace Vals {
  export import ValListResponse = ValsAPI.ValListResponse;
  export import ValListParams = ValsAPI.ValListParams;
}
