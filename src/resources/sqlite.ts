// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Vals access a shared SQLite database
 */
export class Sqlite extends APIResource {
  /**
   * Execute a batch of SQLite statements and return results for all of them
   *
   * @example
   * ```ts
   * const resultSets = await client.sqlite.batch({
   *   statements: ['SELECT 1;'],
   *   mode: 'read',
   * });
   * ```
   */
  batch(body: SqliteBatchParams, options?: RequestOptions): APIPromise<SqliteBatchResponse> {
    return this._client.post('/v1/sqlite/batch', { body, ...options });
  }

  /**
   * Execute a single SQLite statement and return results
   *
   * @example
   * ```ts
   * const resultSet = await client.sqlite.execute({
   *   statement: 'SELECT 1;',
   * });
   * ```
   */
  execute(body: SqliteExecuteParams, options?: RequestOptions): APIPromise<Shared.ResultSet> {
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
    args: Array<unknown> | { [key: string]: unknown };

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
    args: Array<unknown> | { [key: string]: unknown };

    /**
     * SQL statement, with ? placeholders for arguments
     */
    sql: string;
  }
}

export declare namespace Sqlite {
  export {
    type SqliteBatchResponse as SqliteBatchResponse,
    type SqliteBatchParams as SqliteBatchParams,
    type SqliteExecuteParams as SqliteExecuteParams,
  };
}
