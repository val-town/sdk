// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as ReferencesAPI from '@valtown/sdk/resources/me/references';

export class References extends APIResource {
  /**
   * Get vals that depend on any of the user's vals
   */
  list(query: ReferenceListParams, options?: Core.RequestOptions): Core.APIPromise<ReferenceListResponse> {
    return this._client.get('/v1/me/references', { query, ...options });
  }
}

export interface ReferenceListResponse {
  data: Array<ReferenceListResponse.Data>;

  links: ReferenceListResponse.Links;
}

export namespace ReferenceListResponse {
  export interface Data {
    dependsOn: Data.DependsOn;

    reference: Data.Reference;

    referencedAt: string;
  }

  export namespace Data {
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

  export interface Links {
    self: string;

    nextUrl?: string;

    prevUrl?: string;
  }
}

export interface ReferenceListParams {
  limit: number;

  offset: number;

  since?: string;

  until?: string;
}

export namespace References {
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
  export import ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
