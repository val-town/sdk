// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as ValsAPI from './vals';
import * as VersionsAPI from './versions';

export class Vals extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new val
   */
  create(body: ValCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/vals/', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a val by id
   */
  retrieve(valId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/vals/${valId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update an existing val
   */
  update(valId: string, body?: ValUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(valId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    valId: string,
    body: ValUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(valId, {}, body);
    }
    return this._client.put(`/v1/vals/${valId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete a val
   */
  delete(valId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/vals/${valId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Run an existing val or create a new one
   */
  createOrUpdate(body: ValCreateOrUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/v1/vals/', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Run a val, with arguments in the request body
   */
  run(valname: string, body?: ValRunParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  run(valname: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  run(
    valname: string,
    body: ValRunParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.run(valname, {}, body);
    }
    return this._client.post(`/v1/run/${valname}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ValCreateParams {
  code: string;

  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;
}

export interface ValUpdateParams {
  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;
}

export interface ValCreateOrUpdateParams {
  code: string;

  name: string;
}

export interface ValRunParams {
  args?: Array<unknown>;
}

export namespace Vals {
  export import ValCreateParams = ValsAPI.ValCreateParams;
  export import ValUpdateParams = ValsAPI.ValUpdateParams;
  export import ValCreateOrUpdateParams = ValsAPI.ValCreateOrUpdateParams;
  export import ValRunParams = ValsAPI.ValRunParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionRetrieveParams = VersionsAPI.VersionRetrieveParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
}
