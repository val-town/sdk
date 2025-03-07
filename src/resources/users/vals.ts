// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { BasicValsPageCursorURL } from '../shared';
import { type PageCursorURLParams } from '../../pagination';

export class Vals extends APIResource {
  /**
   * List a user's vals
   */
  list(
    userId: string,
    query: ValListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BasicValsPageCursorURL, Shared.BasicVal> {
    return this._client.getAPIList(`/v1/users/${userId}/vals`, BasicValsPageCursorURL, { query, ...options });
  }
}

export interface ValListParams extends PageCursorURLParams {}

export declare namespace Vals {
  export { type ValListParams as ValListParams };
}

export { BasicValsPageCursorURL };
