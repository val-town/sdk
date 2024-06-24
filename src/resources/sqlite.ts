// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as SqliteAPI from '@valtown/sdk/resources/sqlite';
import * as Shared from '@valtown/sdk/resources/shared';

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
 * Array of result sets from each of the queries in order
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
    args: Array<string | number | boolean | null> | Record<string, string | number | boolean | null>;

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
    args: Array<string | number | boolean | null> | Record<string, string | number | boolean | null>;

    /**
     * SQL statement, with ? placeholders for arguments
     */
    sql: string;
  }
}

export namespace Sqlite {
  export import SqliteBatchResponse = SqliteAPI.SqliteBatchResponse;
  export import SqliteBatchParams = SqliteAPI.SqliteBatchParams;
  export import SqliteExecuteParams = SqliteAPI.SqliteExecuteParams;
}
