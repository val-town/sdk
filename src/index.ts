// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageCursorURLParams, PageCursorURLResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { BlobListParams, BlobListResponse, BlobStoreParams, Blobs } from './resources/blobs';
import { EmailSendParams, EmailSendResponse, Emails } from './resources/emails';
import { Sqlite, SqliteBatchParams, SqliteBatchResponse, SqliteExecuteParams } from './resources/sqlite';
import { Alias } from './resources/alias/alias';
import { Me } from './resources/me/me';
import { Search } from './resources/search/search';
import { Users } from './resources/users/users';
import {
  ValCancelEvaluationResponse,
  ValCreateOrUpdateParams,
  ValCreateParams,
  ValUpdateParams,
  Vals,
} from './resources/vals/vals';

export interface ClientOptions {
  /**
   * Defaults to process.env['VAL_TOWN_API_KEY'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['VAL_TOWN_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Val Town API.
 */
export class ValTown extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Val Town API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['VAL_TOWN_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['VAL_TOWN_BASE_URL'] ?? https://api.val.town] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('VAL_TOWN_BASE_URL'),
    bearerToken = Core.readEnv('VAL_TOWN_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.ValTownError(
        "The VAL_TOWN_API_KEY environment variable is missing or empty; either provide it, or instantiate the ValTown client with an bearerToken option, like new ValTown({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.val.town`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  /**
   * Search endpoint for vals
   */
  search: API.Search = new API.Search(this);
  /**
   * Methods to translate between human-readable names and IDs
   */
  alias: API.Alias = new API.Alias(this);
  /**
   * Methods to get information about your own profile and resources
   */
  me: API.Me = new API.Me(this);
  /**
   * Blob storage lets you store larger objects, including binary data
   */
  blobs: API.Blobs = new API.Blobs(this);
  /**
   * Access public user information and list other people’s vals
   */
  users: API.Users = new API.Users(this);
  /**
   * Vals access a shared SQLite database
   */
  sqlite: API.Sqlite = new API.Sqlite(this);
  /**
   * Vals are runnable JavaScript, TypeScript, and JSX modules
   */
  vals: API.Vals = new API.Vals(this);
  /**
   * Val Town supports sending emails from vals
   */
  emails: API.Emails = new API.Emails(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static ValTown = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static ValTownError = Errors.ValTownError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const ValTownError = Errors.ValTownError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

ValTown.Search = Search;
ValTown.Alias = Alias;
ValTown.Me = Me;
ValTown.Blobs = Blobs;
ValTown.Users = Users;
ValTown.Sqlite = Sqlite;
ValTown.Vals = Vals;
ValTown.Emails = Emails;

export declare namespace ValTown {
  export type RequestOptions = Core.RequestOptions;

  export import PageCursorURL = Pagination.PageCursorURL;
  export {
    type PageCursorURLParams as PageCursorURLParams,
    type PageCursorURLResponse as PageCursorURLResponse,
  };

  export { Search as Search };

  export { Alias as Alias };

  export { Me as Me };

  export {
    Blobs as Blobs,
    type BlobListResponse as BlobListResponse,
    type BlobListParams as BlobListParams,
    type BlobStoreParams as BlobStoreParams,
  };

  export { Users as Users };

  export {
    Sqlite as Sqlite,
    type SqliteBatchResponse as SqliteBatchResponse,
    type SqliteBatchParams as SqliteBatchParams,
    type SqliteExecuteParams as SqliteExecuteParams,
  };

  export {
    Vals as Vals,
    type ValCancelEvaluationResponse as ValCancelEvaluationResponse,
    type ValCreateParams as ValCreateParams,
    type ValUpdateParams as ValUpdateParams,
    type ValCreateOrUpdateParams as ValCreateOrUpdateParams,
  };

  export {
    Emails as Emails,
    type EmailSendResponse as EmailSendResponse,
    type EmailSendParams as EmailSendParams,
  };

  export type BasicVal = API.BasicVal;
  export type ExtendedVal = API.ExtendedVal;
  export type PaginationLinks = API.PaginationLinks;
  export type ResultSet = API.ResultSet;
  export type User = API.User;
}

export default ValTown;
