// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { ValsPageCursorURL } from '../shared';
import { type PageCursorURLParams } from '../../pagination';

export class Vals extends APIResource {
  /**
   * [BETA] List all of a user's vals for authenticated users
   */
  list(query: ValListParams, options?: Core.RequestOptions): Core.PagePromise<ValsPageCursorURL, Shared.Val> {
    return this._client.getAPIList('/v2/me/vals', ValsPageCursorURL, { query, ...options });
  }
}

export interface ValListParams extends PageCursorURLParams {}

export declare namespace Vals {
  export { type ValListParams as ValListParams };
}

export { ValsPageCursorURL };
