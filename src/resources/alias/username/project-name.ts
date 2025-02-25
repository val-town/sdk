// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class ProjectName extends APIResource {
  /**
   * Get a project
   */
  retrieve(
    username: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectNameRetrieveResponse> {
    return this._client.get(`/v1/alias/projects/${username}/${projectName}`, options);
  }
}

/**
 * A Project
 */
export interface ProjectNameRetrieveResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectNameRetrieveResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectNameRetrieveResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectNameRetrieveResponse {
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

export declare namespace ProjectName {
  export { type ProjectNameRetrieveResponse as ProjectNameRetrieveResponse };
}
