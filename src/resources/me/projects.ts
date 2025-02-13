// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class Projects extends APIResource {
  /**
   * [BETA] List all of a user's projects for authenticated users
   */
  list(
    query: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesPageCursorURL, ProjectListResponse> {
    return this._client.getAPIList('/v1/me/projects', ProjectListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class ProjectListResponsesPageCursorURL extends PageCursorURL<ProjectListResponse> {}

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

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * The URL of this resource on the Val Town website
   */
  valTownUrl: string;
}

export namespace ProjectListResponse {
  export interface Author {
    id: string;

    username: string | null;
  }
}

export interface ProjectListParams extends PageCursorURLParams {}

Projects.ProjectListResponsesPageCursorURL = ProjectListResponsesPageCursorURL;

export declare namespace Projects {
  export {
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesPageCursorURL as ProjectListResponsesPageCursorURL,
    type ProjectListParams as ProjectListParams,
  };
}
