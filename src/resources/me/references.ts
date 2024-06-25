// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as ReferencesAPI from '@valtown/sdk/resources/me/references';
import { PageCursorURL, type PageCursorURLParams } from '@valtown/sdk/pagination';

export class References extends APIResource {
  /**
   * Get vals that depend on any of the user's vals
   */
  list(
    query: ReferenceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReferenceListResponsesPageCursorURL, ReferenceListResponse> {
    return this._client.getAPIList('/v1/me/references', ReferenceListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class ReferenceListResponsesPageCursorURL extends PageCursorURL<ReferenceListResponse> {}

export interface ReferenceListResponse {
  dependsOn: ReferenceListResponse.DependsOn;

  reference: ReferenceListResponse.Reference;

  referencedAt: string;
}

export namespace ReferenceListResponse {
  export interface DependsOn {
    id: string;

    author_id: string | null;

    name: string;

    username: string | null;
  }

  export interface Reference {
    id: string;

    author_id: string | null;

    name: string;

    username: string | null;
  }
}

export interface ReferenceListParams extends PageCursorURLParams {
  /**
   * Include items created after this date
   */
  since?: string;

  /**
   * Include items created before this date
   */
  until?: string;
}

export namespace References {
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
  export import ReferenceListResponsesPageCursorURL = ReferencesAPI.ReferenceListResponsesPageCursorURL;
  export import ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
