// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as SqliteAPI from '@valtown/sdk/resources/sqlite';

export class Sqlite extends APIResource {
  batch(body: SqliteBatchParams, options?: Core.RequestOptions): Core.APIPromise<SqliteBatchResponse> {
    return this._client.post('/v1/sqlite/batch', { body, ...options });
  }

  execute(body: SqliteExecuteParams, options?: Core.RequestOptions): Core.APIPromise<SqliteExecuteResponse> {
    return this._client.post('/v1/sqlite/execute', { body, ...options });
  }
}

/**
 * Array of result sets from each of the queries in order
 */
export type SqliteBatchResponse = Array<SqliteBatchResponse.SqliteBatchResponseItem>;

export namespace SqliteBatchResponse {
  /**
   * Result of executing an SQL statement.
   */
  export interface SqliteBatchResponseItem {
    /**
     * Names of columns.
     *
     * Names of columns can be defined using the `AS` keyword in SQL:
     *
     * ```sql
     * SELECT author AS author, COUNT(*) AS count FROM books GROUP BY author
     * ```
     */
    columns: Array<string>;

    /**
     * Types of columns.
     *
     * The types are currently shown for types declared in a SQL table. For column
     * types of function calls, for example, an empty string is returned.
     */
    columnTypes: Array<string>;

    /**
     * Rows produced by the statement.
     */
    rows: Array<unknown>;

    /**
     * Number of rows that were affected by an UPDATE, INSERT or DELETE operation.
     *
     * This value is not specified for other SQL statements.
     */
    rowsAffected: number;

    /**
     * ROWID of the last inserted row.
     *
     * This value is not specified if the SQL statement was not an INSERT or if the
     * table was not a ROWID table.
     */
    lastInsertRowid?: string | number | null;
  }
}

/**
 * Result set from the given request
 */
export interface SqliteExecuteResponse {
  /**
   * Names of columns.
   *
   * Names of columns can be defined using the `AS` keyword in SQL:
   *
   * ```sql
   * SELECT author AS author, COUNT(*) AS count FROM books GROUP BY author
   * ```
   */
  columns: Array<string>;

  /**
   * Types of columns.
   *
   * The types are currently shown for types declared in a SQL table. For column
   * types of function calls, for example, an empty string is returned.
   */
  columnTypes: Array<string>;

  /**
   * Rows produced by the statement.
   */
  rows: Array<unknown>;

  /**
   * Number of rows that were affected by an UPDATE, INSERT or DELETE operation.
   *
   * This value is not specified for other SQL statements.
   */
  rowsAffected: number;

  /**
   * ROWID of the last inserted row.
   *
   * This value is not specified if the SQL statement was not an INSERT or if the
   * table was not a ROWID table.
   */
  lastInsertRowid?: string | number | null;
}

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
  export import SqliteExecuteResponse = SqliteAPI.SqliteExecuteResponse;
  export import SqliteBatchParams = SqliteAPI.SqliteBatchParams;
  export import SqliteExecuteParams = SqliteAPI.SqliteExecuteParams;
}
