// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';
import { type Response } from '../../_shims/index';

export class Files extends APIResource {
  /**
   * [BETA] Create a new file, project val or directory
   */
  create(
    projectId: string,
    path: string,
    params: FileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileCreateResponse> {
    const { branch_id, ...body } = params;
    return this._client.post(`/v1/projects/${projectId}/files/${path}`, {
      query: { branch_id },
      body,
      ...options,
    });
  }

  /**
   * Get metadata for files and directories in a project at the specified path
   */
  retrieve(
    projectId: string,
    path: string,
    query: FileRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileRetrieveResponse> {
    return this._client.get(`/v1/projects/${projectId}/files/${path}`, { query, ...options });
  }

  /**
   * [BETA] Update a file's content
   */
  update(
    projectId: string,
    path: string,
    params?: FileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUpdateResponse>;
  update(projectId: string, path: string, options?: Core.RequestOptions): Core.APIPromise<FileUpdateResponse>;
  update(
    projectId: string,
    path: string,
    params: FileUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUpdateResponse> {
    if (isRequestOptions(params)) {
      return this.update(projectId, path, {}, params);
    }
    const { branch_id, ...body } = params;
    return this._client.put(`/v1/projects/${projectId}/files/${path}`, {
      query: { branch_id },
      body,
      ...options,
    });
  }

  /**
   * Get metadata for files and directories in a project at the root directory
   */
  list(
    projectId: string,
    query: FileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FileListResponsesPageCursorURL, FileListResponse> {
    return this._client.getAPIList(`/v1/projects/${projectId}/files`, FileListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }

  /**
   * Download file content
   */
  getContent(
    projectId: string,
    path: string,
    params?: FileGetContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  getContent(projectId: string, path: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  getContent(
    projectId: string,
    path: string,
    params: FileGetContentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(params)) {
      return this.getContent(projectId, path, {}, params);
    }
    const {
      'Cache-Control': cacheControl,
      'If-Match': ifMatch,
      'If-Modified-Since': ifModifiedSince,
      'If-None-Match': ifNoneMatch,
      'If-Unmodified-Since': ifUnmodifiedSince,
      ...query
    } = params;
    return this._client.get(`/v1/projects/${projectId}/files/${path}/content`, {
      query,
      ...options,
      headers: {
        Accept: 'application/octet-stream',
        ...(cacheControl != null ? { 'Cache-Control': cacheControl } : undefined),
        ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined),
        ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
        ...(ifNoneMatch != null ? { 'If-None-Match': ifNoneMatch } : undefined),
        ...(ifUnmodifiedSince != null ? { 'If-Unmodified-Since': ifUnmodifiedSince } : undefined),
        ...options?.headers,
      },
      __binaryResponse: true,
    });
  }
}

export class FileListResponsesPageCursorURL extends PageCursorURL<FileListResponse> {}

/**
 * A File or Directory's Metadata
 */
export interface FileCreateResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileCreateResponse.Links;

  name: string;

  /**
   * The id of the parent resource
   */
  parentId: string | null;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileCreateResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource's source code as a module
     */
    module: string;

    /**
     * The URL of this resource on this API
     */
    self: string;

    /**
     * This resource's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

/**
 * A paginated result set
 */
export interface FileRetrieveResponse {
  data: Array<FileRetrieveResponse.Data>;

  /**
   * Links to use for pagination
   */
  links: Shared.PaginationLinks;
}

export namespace FileRetrieveResponse {
  /**
   * A File or Directory's Metadata
   */
  export interface Data {
    /**
     * The id of the resource
     */
    id: string;

    links: Data.Links;

    name: string;

    /**
     * The id of the parent resource
     */
    parentId: string | null;

    path: string;

    type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

    updatedAt: string;

    version: number;
  }

  export namespace Data {
    export interface Links {
      /**
       * The URL of this resource on Val Town
       */
      html: string;

      /**
       * The URL of this resource's source code as a module
       */
      module: string;

      /**
       * The URL of this resource on this API
       */
      self: string;

      /**
       * This resource's web endpoint, where it serves a website or API
       */
      endpoint?: string;
    }
  }
}

/**
 * A File or Directory's Metadata
 */
export interface FileUpdateResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileUpdateResponse.Links;

  name: string;

  /**
   * The id of the parent resource
   */
  parentId: string | null;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileUpdateResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource's source code as a module
     */
    module: string;

    /**
     * The URL of this resource on this API
     */
    self: string;

    /**
     * This resource's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

/**
 * A File or Directory's Metadata
 */
export interface FileListResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileListResponse.Links;

  name: string;

  /**
   * The id of the parent resource
   */
  parentId: string | null;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileListResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource's source code as a module
     */
    module: string;

    /**
     * The URL of this resource on this API
     */
    self: string;

    /**
     * This resource's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

export type FileCreateParams = FileCreateParams.Variant0 | FileCreateParams.Variant1;

export declare namespace FileCreateParams {
  export interface Variant0 {
    /**
     * Body param:
     */
    type: 'directory';

    /**
     * Query param: The specified branch of the resource. Defaults to main if not
     * provided.
     */
    branch_id?: string;

    /**
     * Body param:
     */
    content?: null;
  }

  export interface Variant1 {
    /**
     * Body param: Project file and val content. An empty string will create an empty
     * file. When creating a directory, the content should be null or undefined.
     */
    content: string;

    /**
     * Body param:
     */
    type: 'file' | 'interval' | 'http' | 'email' | 'script';

    /**
     * Query param: The specified branch of the resource. Defaults to main if not
     * provided.
     */
    branch_id?: string;
  }
}

export interface FileRetrieveParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  /**
   * Number of items to skip in order to deliver paginated results
   */
  offset: number;

  /**
   * Id to query
   */
  branch_id?: string;

  /**
   * Specific branch version to query
   */
  version?: number;
}

export interface FileUpdateParams {
  /**
   * Query param: The specified branch of the resource. Defaults to main if not
   * provided.
   */
  branch_id?: string;

  /**
   * Body param: Project file and val content. An empty string will create an empty
   * file. When creating a directory, the content should be null or undefined.
   */
  content?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param: Id of the parent directory
   */
  parent_id?: string | null;

  /**
   * Body param:
   */
  type?: 'file' | 'interval' | 'http' | 'email' | 'script';
}

export interface FileListParams extends PageCursorURLParams {
  /**
   * Id to query
   */
  branch_id?: string;

  /**
   * Whether to recursively list all files in the project
   */
  recursive?: boolean;

  /**
   * Specific branch version to query
   */
  version?: number;
}

export interface FileGetContentParams {
  /**
   * Query param: Id to query
   */
  branch_id?: string;

  /**
   * Query param: Specific branch version to query
   */
  version?: number;

  /**
   * Header param:
   */
  'Cache-Control'?: string;

  /**
   * Header param:
   */
  'If-Match'?: string;

  /**
   * Header param:
   */
  'If-Modified-Since'?: string;

  /**
   * Header param:
   */
  'If-None-Match'?: string;

  /**
   * Header param:
   */
  'If-Unmodified-Since'?: string;
}

Files.FileListResponsesPageCursorURL = FileListResponsesPageCursorURL;

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    FileListResponsesPageCursorURL as FileListResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileGetContentParams as FileGetContentParams,
  };
}
