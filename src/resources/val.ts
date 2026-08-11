// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Look up the identity of viewers of app-authenticated vals
 */
export class Val extends APIResource {
  /**
   * Look up the identity of the viewer of an app-authenticated (intranet) val,
   * given the X-Val-Town-User header value that Fastify forwarded to the val.
   * Authenticated with the val's own API token (bearer auth). The projectId
   * inside the signed header must match the caller's own project.
   *
   * @example
   * ```ts
   * const viewer = await client.val.viewer({
   *   'x-val-town-user': 'x_val_town_user',
   * });
   * ```
   */
  viewer(params: ValViewerParams, options?: RequestOptions): APIPromise<ValViewerResponse> {
    const { 'x-val-town-user': xValTownUser } = params;
    return this._client.get('/v3/val/viewer', {
      ...options,
      headers: buildHeaders([{ 'x-val-town-user': xValTownUser }, options?.headers]),
    });
  }
}

/**
 * Public identity of the viewer derived from a verified X-Val-Town-User header.
 * Only safe, public profile fields are returned — no email or tier.
 */
export interface ValViewerResponse {
  /**
   * The viewer's user id
   */
  id: string;

  /**
   * The viewer's bio, if any
   */
  bio: string | null;

  links: ValViewerResponse.Links;

  /**
   * URL to the viewer's profile image, if any
   */
  profileImageUrl: string | null;

  /**
   * Whether the viewer is a user or an organization
   */
  type: 'user' | 'org' | null;

  /**
   * The viewer's profile URL on val.town
   */
  url: string;

  /**
   * The viewer's handle, without the @ symbol
   */
  username: string | null;
}

export namespace ValViewerResponse {
  export interface Links {
    /**
     * URL of this viewer on this API
     */
    self: string;
  }
}

export interface ValViewerParams {
  /**
   * The signed X-Val-Town-User header value Fastify forwarded to the val.
   */
  'x-val-town-user': string;
}

export declare namespace Val {
  export { type ValViewerParams as ValViewerParams, type ValViewerResponse as ValViewerResponse };
}
