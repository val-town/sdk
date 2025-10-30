// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { BasicValsPageCursorURL } from '../shared';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Vals extends APIResource {
  /**
   * Search for vals across the platform
   */
  list(query: ValListParams, options?: RequestOptions): PagePromise<BasicValsPageCursorURL, Shared.BasicVal> {
    return this._client.getAPIList('/v1/search/vals', PageCursorURL<Shared.BasicVal>, { query, ...options });
  }
}

export interface ValListParams extends PageCursorURLParams {
  /**
   * Search query
   */
  query: string;
}

export declare namespace Vals {
  export { type ValListParams as ValListParams };
}

export { type BasicValsPageCursorURL };
