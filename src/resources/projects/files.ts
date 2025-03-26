// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';
import { type Response } from '../../_shims/index';

export class Files extends APIResource {
  /**
   * [BETA] Create a new file, project val or directory
   */
  create(
    projectId: string,
    params: FileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileCreateResponse> {
    const { path, branch_id, ...body } = params;
    return this._client.post(`/v1/projects/${projectId}/files`, {
      query: { path, branch_id },
      body,
      ...options,
    });
  }

  /**
   * Get metadata for files and directories in a project. If path is an empty string,
   * returns files at the root directory.
   */
  retrieve(
    projectId: string,
    query: FileRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FileRetrieveResponsesPageCursorURL, FileRetrieveResponse> {
    return this._client.getAPIList(`/v1/projects/${projectId}/files`, FileRetrieveResponsesPageCursorURL, {
      query,
      ...options,
    });
  }

  /**
   * [BETA] Update a file's content
   */
  update(
    projectId: string,
    params: FileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUpdateResponse> {
    const { path, branch_id, ...body } = params;
    return this._client.put(`/v1/projects/${projectId}/files`, {
      query: { path, branch_id },
      body,
      ...options,
    });
  }

  /**
   * [BETA] Deletes a file or a directory. To delete a directory and all of its
   * children, use the recursive flag. To delete all files, pass in an empty path and
   * the recursive flag.
   */
  delete(projectId: string, params: FileDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path, branch_id, recursive } = params;
    return this._client.delete(`/v1/projects/${projectId}/files`, {
      query: { path, branch_id, recursive },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download file content
   */
  getContent(
    projectId: string,
    params: FileGetContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const {
      'Cache-Control': cacheControl,
      'If-Match': ifMatch,
      'If-Modified-Since': ifModifiedSince,
      'If-None-Match': ifNoneMatch,
      'If-Unmodified-Since': ifUnmodifiedSince,
      ...query
    } = params;
    return this._client.get(`/v1/projects/${projectId}/files/content`, {
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

export class FileRetrieveResponsesPageCursorURL extends PageCursorURL<FileRetrieveResponse> {}

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
 * A File or Directory's Metadata
 */
export interface FileRetrieveResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileRetrieveResponse.Links;

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

export namespace FileRetrieveResponse {
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

export type FileCreateParams = FileCreateParams.Variant0 | FileCreateParams.Variant1;

export declare namespace FileCreateParams {
  export interface Variant0 {
    /**
     * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
     * empty string to represent the root directory.
     */
    path: string;

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
     * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
     * empty string to represent the root directory.
     */
    path: string;

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

export interface FileRetrieveParams extends PageCursorURLParams {
  /**
   * Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string
   * to represent the root directory.
   */
  path: string;

  /**
   * Id to query
   */
  branch_id?: string;

  /**
   * Whether to recursively act on all files in the project
   */
  recursive?: boolean;

  /**
   * Specific branch version to query
   */
  version?: number;
}

export interface FileUpdateParams {
  /**
   * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
   * empty string to represent the root directory.
   */
  path: string;

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

export interface FileDeleteParams {
  /**
   * Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string
   * to represent the root directory.
   */
  path: string;

  /**
   * The specified branch of the resource. Defaults to main if not provided.
   */
  branch_id?: string;

  /**
   * Whether to recursively act on all files in the project
   */
  recursive?: boolean;
}

export interface FileGetContentParams {
  /**
   * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
   * empty string to represent the root directory.
   */
  path: string;

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

Files.FileRetrieveResponsesPageCursorURL = FileRetrieveResponsesPageCursorURL;

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    FileRetrieveResponsesPageCursorURL as FileRetrieveResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetContentParams as FileGetContentParams,
  };
}
