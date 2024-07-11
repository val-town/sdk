// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as EvalAPI from '@valtown/sdk/resources/eval';

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
   * Array of arguments passed to the given function
   */
  args?: Array<unknown>;
}

export namespace Eval {
  export import EvalRunResponse = EvalAPI.EvalRunResponse;
  export import EvalRunParams = EvalAPI.EvalRunParams;
}
