// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as Pagination from '@valtown/sdk/pagination';
import * as API from '@valtown/sdk/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['VAL_TOWN_BEARER_TOKEN'].
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

/** API Client for interfacing with the Val Town API. */
export class ValTown extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Val Town API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['VAL_TOWN_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['VAL_TOWN_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('VAL_TOWN_BASE_URL'),
    bearerToken = Core.readEnv('VAL_TOWN_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.ValTownError(
        "The VAL_TOWN_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the ValTown client with an bearerToken option, like new ValTown({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://localhost:8080/test-api`,
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

  search: API.Search = new API.Search(this);
  alias: API.Alias = new API.Alias(this);
  me: API.Me = new API.Me(this);
  blobs: API.Blobs = new API.Blobs(this);
  users: API.Users = new API.Users(this);
  sqlite: API.Sqlite = new API.Sqlite(this);
  evals: API.Evals = new API.Evals(this);
  vals: API.Vals = new API.Vals(this);
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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace ValTown {
  export import RequestOptions = Core.RequestOptions;

  export import PageCursorURL = Pagination.PageCursorURL;
  export import PageCursorURLParams = Pagination.PageCursorURLParams;
  export import PageCursorURLResponse = Pagination.PageCursorURLResponse;

  export import Search = API.Search;

  export import Alias = API.Alias;

  export import Me = API.Me;

  export import Blobs = API.Blobs;

  export import Users = API.Users;

  export import Sqlite = API.Sqlite;
  export import SqliteBatchParams = API.SqliteBatchParams;
  export import SqliteExecuteParams = API.SqliteExecuteParams;

  export import Evals = API.Evals;
  export import EvalRunCodeResponse = API.EvalRunCodeResponse;
  export import EvalRunCodeParams = API.EvalRunCodeParams;

  export import Vals = API.Vals;
  export import ValCreateResponse = API.ValCreateResponse;
  export import ValRetrieveResponse = API.ValRetrieveResponse;
  export import ValRunAnonymousResponse = API.ValRunAnonymousResponse;
  export import ValCreateParams = API.ValCreateParams;
  export import ValUpdateParams = API.ValUpdateParams;
  export import ValCreateOrUpdateParams = API.ValCreateOrUpdateParams;
  export import ValRunParams = API.ValRunParams;
  export import ValRunAnonymousParams = API.ValRunAnonymousParams;
  export import ValRunGetParams = API.ValRunGetParams;

  export import Emails = API.Emails;
  export import EmailSendResponse = API.EmailSendResponse;
  export import EmailSendParams = API.EmailSendParams;

  export import User = API.User;
}

export default ValTown;
