// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as SqliteAPI from './sqlite';

export class Sqlite extends APIResource {
  batch(body: SqliteBatchParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/sqlite/batch', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  execute(body: SqliteExecuteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/sqlite/execute', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SqliteBatchParams {
  statements: Array<string | SqliteBatchParams.UnionMember1>;

  mode?: 'write' | 'read' | 'deferred';
}

export namespace SqliteBatchParams {
  /**
   * A parameterized SQL query. See
   * https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference
   */
  export interface UnionMember1 {
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
  statement: string | SqliteExecuteParams.UnionMember1;
}

export namespace SqliteExecuteParams {
  /**
   * A parameterized SQL query. See
   * https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference
   */
  export interface UnionMember1 {
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
  export import SqliteBatchParams = SqliteAPI.SqliteBatchParams;
  export import SqliteExecuteParams = SqliteAPI.SqliteExecuteParams;
}
