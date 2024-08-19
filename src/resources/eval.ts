// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EvalAPI from './eval';

export class Eval extends APIResource {
  /**
   * Run JavaScript or TypeScript without saving it permanently as a val
   */
  run(body: EvalRunParams, options?: Core.RequestOptions): Core.APIPromise<EvalRunResponse | null> {
    return this._client.post('/v1/eval', { body, ...options });
  }
}

export type EvalRunResponse = string | number | Record<string, unknown> | Array<unknown> | boolean;

export interface EvalRunParams {
  /**
   * TypeScript source code
   */
  code: string;

  /**
   * Array of arguments passed to the given function. If this is present, the default
   * export should be a function and will be called with these arguments, and the
   * function result will be returned. If `args` is not present, no function calls
   * are made, but you can still return a value using `export default myVariable`.
   */
  args?: Array<unknown>;
}

export namespace Eval {
  export import EvalRunResponse = EvalAPI.EvalRunResponse;
  export import EvalRunParams = EvalAPI.EvalRunParams;
}
