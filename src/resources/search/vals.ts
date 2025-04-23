// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class Vals extends APIResource {
  /**
   * Search for vals across the platform
   */
  list(
    query: ValListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ValListResponsesPageCursorURL, ValListResponse> {
    return this._client.getAPIList('/v1/search/vals', ValListResponsesPageCursorURL, { query, ...options });
  }
}

export class ValListResponsesPageCursorURL extends PageCursorURL<ValListResponse> {}

/**
 * A Val
 */
export interface ValListResponse {
  /**
   * This val's id
   */
  id: string;

  /**
   * The user who created this val
   */
  author: ValListResponse.Author | null;

  /**
   * TypeScript code associated with this val
   */
  code: string | null;

  createdAt: string;

  links: ValListResponse.Links;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  /**
   * The type of a val. HTTP can receive web requests, Email can receive emails, Cron
   * runs periodically, and Script can be used for libraries or one-off calculations
   */
  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc' | 'httpnext';

  updatedAt: string;

  /**
   * The URL of this resource on the Val Town website
   */
  url: string;

  /**
   * The version of this val, starting at zero
   */
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

  export interface Links {
    /**
     * The URL of this Val's source code as a module
     */
    module: string;

    /**
     * The URL of this val on this API
     */
    self: string;

    /**
     * The endpoint to retrieve this val's versions
     */
    versions: string;

    /**
     * This val's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

export interface ValListParams extends PageCursorURLParams {
  /**
   * Search query
   */
  query: string;
}

Vals.ValListResponsesPageCursorURL = ValListResponsesPageCursorURL;

export declare namespace Vals {
  export {
    type ValListResponse as ValListResponse,
    ValListResponsesPageCursorURL as ValListResponsesPageCursorURL,
    type ValListParams as ValListParams,
  };
}
