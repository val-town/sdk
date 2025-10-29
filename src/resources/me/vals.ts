// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { ValsPageCursorURL } from '../shared';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Vals extends APIResource {
  /**
   * [BETA] List all of a user's vals for authenticated users
   */
  list(query: ValListParams, options?: RequestOptions): PagePromise<ValsPageCursorURL, Shared.Val> {
    return this._client.getAPIList('/v2/me/vals', PageCursorURL<Shared.Val>, { query, ...options });
  }
}

export interface ValListParams extends PageCursorURLParams {}

export declare namespace Vals {
  export { type ValListParams as ValListParams };
}

export { type ValsPageCursorURL };
