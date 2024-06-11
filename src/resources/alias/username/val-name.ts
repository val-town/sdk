// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as ValNameAPI from './val-name';

export class ValName extends APIResource {
  /**
   * Get a val
   */
  retrieve(
    username: string,
    valName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValNameRetrieveResponse> {
    return this._client.get(`/v1/alias/${username}/${valName}`, options);
  }
}

/**
 * A Val
 */
export interface ValNameRetrieveResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: ValNameRetrieveResponse.Author | null;

  code: string | null;

  createdAt: string;

  likeCount: number;

  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  public: boolean;

  readme: string | null;

  referenceCount: number;

  version: number;
}

export namespace ValNameRetrieveResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

export namespace ValName {
  export import ValNameRetrieveResponse = ValNameAPI.ValNameRetrieveResponse;
}
