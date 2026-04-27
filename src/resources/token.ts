// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Connect to other services
 */
export class Token extends APIResource {
  /**
   * Get a valid Google access token for a connected Google account. Automatically
   * refreshes the token if expired.
   */
  google(body: TokenGoogleParams, options?: RequestOptions): APIPromise<TokenGoogleResponse> {
    return this._client.post('/v3/connections/google-docs/token', { body, ...options });
  }

  /**
   * Get a valid Slack access token for a connected workspace. Automatically
   * refreshes the token if expired.
   */
  slack(body: TokenSlackParams, options?: RequestOptions): APIPromise<TokenSlackResponse> {
    return this._client.post('/v3/connections/slack/token', { body, ...options });
  }
}

export interface TokenGoogleResponse {
  /**
   * A valid Google access token
   */
  access_token: string;

  /**
   * The scopes granted by the user during OAuth (may be a subset of requested
   * scopes)
   */
  granted_scopes?: Array<string>;
}

export interface TokenSlackResponse {
  /**
   * A valid Slack access token
   */
  access_token: string;
}

export interface TokenGoogleParams {
  /**
   * The Google account email
   */
  email: string;
}

export interface TokenSlackParams {
  /**
   * The Slack team/workspace ID (e.g., 'T9TK3CUKW')
   */
  team_id: string;
}

export declare namespace Token {
  export {
    type TokenGoogleResponse as TokenGoogleResponse,
    type TokenSlackResponse as TokenSlackResponse,
    type TokenGoogleParams as TokenGoogleParams,
    type TokenSlackParams as TokenSlackParams,
  };
}
