// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as ValsAPI from '@valtown/sdk/resources/search/vals';
import * as Shared from '@valtown/sdk/resources/shared';
import { BasicValsPageCursorURL } from '@valtown/sdk/resources/shared';
import { type PageCursorURLParams } from '@valtown/sdk/pagination';

export class Vals extends APIResource {
  /**
   * Search for vals across the platform
   */
  list(
    query: ValListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BasicValsPageCursorURL, Shared.BasicVal> {
    return this._client.getAPIList('/v1/search/vals', BasicValsPageCursorURL, { query, ...options });
  }
}

export interface ValListParams extends PageCursorURLParams {
  /**
   * Search query
   */
  query: string;

  searchType?: 'exact' | 'semantic';
}

export namespace Vals {
  export import ValListParams = ValsAPI.ValListParams;
}

export { BasicValsPageCursorURL };
