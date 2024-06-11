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
  export interface UnionMember1 {
    args: Array<string | number | boolean | null> | Record<string, string | number | boolean | null>;

    sql: string;
  }
}

export interface SqliteExecuteParams {
  statement: string | SqliteExecuteParams.UnionMember1;
}

export namespace SqliteExecuteParams {
  export interface UnionMember1 {
    args: Array<string | number | boolean | null> | Record<string, string | number | boolean | null>;

    sql: string;
  }
}

export namespace Sqlite {
  export import SqliteBatchParams = SqliteAPI.SqliteBatchParams;
  export import SqliteExecuteParams = SqliteAPI.SqliteExecuteParams;
}
