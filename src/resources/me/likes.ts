// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { BasicValsPageCursorURL } from '../shared';
import { type PageCursorURLParams } from '../../pagination';

export class Likes extends APIResource {
  /**
   * Get vals liked by the current user
   */
  list(
    query: LikeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BasicValsPageCursorURL, Shared.BasicVal> {
    return this._client.getAPIList('/v1/me/likes', BasicValsPageCursorURL, { query, ...options });
  }
}

export interface LikeListParams extends PageCursorURLParams {}

export declare namespace Likes {
  export { type LikeListParams as LikeListParams };
}

export { BasicValsPageCursorURL };
