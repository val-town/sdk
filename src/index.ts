// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageCursorURLParams, PageCursorURLResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { BlobListParams, BlobListResponse, BlobStoreParams, Blobs } from './resources/blobs';
import { EmailSendParams, EmailSendResponse, Emails } from './resources/emails';
import { FileRetrieveResponse, Files } from './resources/files';
import { OrgListParams, OrgListResponse, OrgListResponsesPageCursorURL, Orgs } from './resources/orgs';
import { Sqlite, SqliteBatchParams, SqliteBatchResponse, SqliteExecuteParams } from './resources/sqlite';
import { Users } from './resources/users';
import { Alias } from './resources/alias/alias';
import { Me } from './resources/me/me';
import { Search } from './resources/search/search';
import { Telemetry } from './resources/telemetry/telemetry';
import { ValCreateParams, ValListParams, ValListResponse, Vals } from './resources/vals/vals';

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
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
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
      baseURLOverridden: baseURL ? baseURL !== 'https://api.val.town' : false,
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
   * Get information about organizations you belong to
   */
  orgs: API.Orgs = new API.Orgs(this);
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
   * OpenTelemetry traces and logs for your val executions
   */
  telemetry: API.Telemetry = new API.Telemetry(this);
  /**
   * Vals are a collaborative folder of runnable JavaScript, TypeScript, and JSX modules
   */
  vals: API.Vals = new API.Vals(this);
  /**
   * Access files, which are the items within Vals
   */
  files: API.Files = new API.Files(this);
  /**
   * Val Town supports sending emails from vals
   */
  emails: API.Emails = new API.Emails(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.val.town';
  }

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

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'repeat' });
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

ValTown.Search = Search;
ValTown.Alias = Alias;
ValTown.Me = Me;
ValTown.Orgs = Orgs;
ValTown.OrgListResponsesPageCursorURL = OrgListResponsesPageCursorURL;
ValTown.Blobs = Blobs;
ValTown.Users = Users;
ValTown.Sqlite = Sqlite;
ValTown.Telemetry = Telemetry;
ValTown.Vals = Vals;
ValTown.Files = Files;
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
    Orgs as Orgs,
    type OrgListResponse as OrgListResponse,
    OrgListResponsesPageCursorURL as OrgListResponsesPageCursorURL,
    type OrgListParams as OrgListParams,
  };

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

  export { Telemetry as Telemetry };

  export {
    Vals as Vals,
    type ValListResponse as ValListResponse,
    type ValCreateParams as ValCreateParams,
    type ValListParams as ValListParams,
  };

  export { Files as Files, type FileRetrieveResponse as FileRetrieveResponse };

  export {
    Emails as Emails,
    type EmailSendResponse as EmailSendResponse,
    type EmailSendParams as EmailSendParams,
  };

  export type PaginationLinks = API.PaginationLinks;
  export type ResultSet = API.ResultSet;
  export type User = API.User;
  export type Val = API.Val;
}

export { toFile, fileFromPath } from './uploads';
export {
  ValTownError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default ValTown;
