// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as EvalsAPI from './evals';

export class Evals extends APIResource {
  /**
   * Run JavaScript or TypeScript without saving it permanently as a val
   */
  runCode(
    code: string,
    query?: EvalRunCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvalRunCodeResponse | null>;
  runCode(code: string, options?: Core.RequestOptions): Core.APIPromise<EvalRunCodeResponse | null>;
  runCode(
    code: string,
    query: EvalRunCodeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvalRunCodeResponse | null> {
    if (isRequestOptions(query)) {
      return this.runCode(code, {}, query);
    }
    return this._client.get(`/v1/eval/${code}`, { query, ...options });
  }
}

export type EvalRunCodeResponse = string | number | unknown | Array<unknown> | boolean;

export interface EvalRunCodeParams {
  args?: string;
}

export namespace Evals {
  export import EvalRunCodeResponse = EvalsAPI.EvalRunCodeResponse;
  export import EvalRunCodeParams = EvalsAPI.EvalRunCodeParams;
}
