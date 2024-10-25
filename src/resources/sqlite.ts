// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SqliteAPI from './sqlite';
import * as Shared from './shared';

/**
 * Vals access a shared SQLite database
 */
export class Sqlite extends APIResource {
  /**
   * Execute a batch of SQLite statements and return results for all of them
   */
  batch(body: SqliteBatchParams, options?: Core.RequestOptions): Core.APIPromise<SqliteBatchResponse> {
    return this._client.post('/v1/sqlite/batch', { body, ...options });
  }

  /**
   * Execute a single SQLite statement and return results
   */
  execute(body: SqliteExecuteParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ResultSet> {
    return this._client.post('/v1/sqlite/execute', { body, ...options });
  }
}

/**
 * Array of results from the statements executed
 */
export type SqliteBatchResponse = Array<Shared.ResultSet>;

export interface SqliteBatchParams {
  statements: Array<string | SqliteBatchParams.ParameterizedQuery>;

  mode?: 'write' | 'read' | 'deferred';
}

export namespace SqliteBatchParams {
  /**
   * A parameterized SQL query. See
   * https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference
   */
  export interface ParameterizedQuery {
    /**
     * List of arguments to be used in the given statement
     */
    args: Array<unknown> | Record<string, unknown>;

    /**
     * SQL statement, with ? placeholders for arguments
     */
    sql: string;
  }
}

export interface SqliteExecuteParams {
  /**
   * Simple SQL statement to run in SQLite
   */
  statement: string | SqliteExecuteParams.ParameterizedQuery;
}

export namespace SqliteExecuteParams {
  /**
   * A parameterized SQL query. See
   * https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference
   */
  export interface ParameterizedQuery {
    /**
     * List of arguments to be used in the given statement
     */
    args: Array<unknown> | Record<string, unknown>;

    /**
     * SQL statement, with ? placeholders for arguments
     */
    sql: string;
  }
}

export namespace Sqlite {
  export type SqliteBatchResponse = SqliteAPI.SqliteBatchResponse;
  export type SqliteBatchParams = SqliteAPI.SqliteBatchParams;
  export type SqliteExecuteParams = SqliteAPI.SqliteExecuteParams;
}
