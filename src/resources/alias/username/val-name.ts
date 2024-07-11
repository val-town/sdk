// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as ValNameAPI from '@valtown/sdk/resources/alias/username/val-name';

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
  /**
   * This val’s id
   */
  id: string;

  /**
   * The user who created this val
   */
  author: ValNameRetrieveResponse.Author | null;

  /**
   * TypeScript code associated with this val
   */
  code: string | null;

  createdAt: string;

  /**
   * How many likes this val has received
   */
  likeCount: number;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This val’s privacy setting. Unlisted vals do not appear on profile pages or
   * elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  /**
   * This val’s readme, as Markdown
   */
  readme: string | null;

  referenceCount: number;

  /**
   * The type of a val. HTTP can receive web requests, Email can receive emails, Cron
   * runs periodically, and Script can be used for libraries or one-off calculations
   */
  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  /**
   * The URL of this val on the Val Town website
   */
  url: string;

  /**
   * The version of this val, starting at zero
   */
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
