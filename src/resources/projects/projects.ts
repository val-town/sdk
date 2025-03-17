// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BranchesAPI from './branches';
import {
  BranchCreateParams,
  BranchCreateResponse,
  BranchListParams,
  BranchListResponse,
  BranchListResponsesPageCursorURL,
  BranchRetrieveResponse,
  Branches,
} from './branches';
import * as FilesAPI from './files';
import {
  FileCreateParams,
  FileCreateResponse,
  FileDeleteParams,
  FileGetContentParams,
  FileListParams,
  FileListResponse,
  FileListResponsesPageCursorURL,
  FileRetrieveParams,
  FileRetrieveResponse,
  FileUpdateParams,
  FileUpdateResponse,
  Files,
} from './files';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

/**
 * Projects let you organize multiple files and collaborate with pull requests
 */
export class Projects extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * [BETA] Create a new project
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectCreateResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * [BETA] Get a project by id
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/v1/projects/${projectId}`, options);
  }

  /**
   * [BETA] Lists all public projects
   */
  list(
    query: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesPageCursorURL, ProjectListResponse> {
    return this._client.getAPIList('/v1/projects', ProjectListResponsesPageCursorURL, { query, ...options });
  }

  /**
   * [BETA] Delete a project
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/projects/${projectId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class ProjectListResponsesPageCursorURL extends PageCursorURL<ProjectListResponse> {}

/**
 * A Project
 */
export interface ProjectCreateResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectCreateResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectCreateResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectCreateResponse {
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

/**
 * A Project
 */
export interface ProjectRetrieveResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectRetrieveResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectRetrieveResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectRetrieveResponse {
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

/**
 * A Project
 */
export interface ProjectListResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectListResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectListResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectListResponse {
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

export interface ProjectCreateParams {
  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  description?: string;
}

export interface ProjectListParams extends PageCursorURLParams {}

Projects.ProjectListResponsesPageCursorURL = ProjectListResponsesPageCursorURL;
Projects.Branches = Branches;
Projects.BranchListResponsesPageCursorURL = BranchListResponsesPageCursorURL;
Projects.Files = Files;
Projects.FileListResponsesPageCursorURL = FileListResponsesPageCursorURL;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesPageCursorURL as ProjectListResponsesPageCursorURL,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Branches as Branches,
    type BranchCreateResponse as BranchCreateResponse,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchCreateParams as BranchCreateParams,
    type BranchListParams as BranchListParams,
  };

  export {
    Files as Files,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    FileListResponsesPageCursorURL as FileListResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetContentParams as FileGetContentParams,
  };
}
