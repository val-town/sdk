// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as LikesAPI from '@valtown/sdk/resources/me/likes';
import * as Shared from '@valtown/sdk/resources/shared';
import { BasicValsPageCursorURL } from '@valtown/sdk/resources/shared';
import { type PageCursorURLParams } from '@valtown/sdk/pagination';

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

export namespace Likes {
  export import LikeListParams = LikesAPI.LikeListParams;
}

export { BasicValsPageCursorURL };
