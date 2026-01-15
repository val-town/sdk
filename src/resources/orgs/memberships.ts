// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * List all memberships of an org
   */
  list(orgID: string, options?: RequestOptions): APIPromise<MembershipListResponse> {
    return this._client.get(path`/v2/orgs/${orgID}/memberships`, options);
  }
}

export type MembershipListResponse = Array<MembershipListResponse.MembershipListResponseItem>;

export namespace MembershipListResponse {
  /**
   * A Membership
   */
  export interface MembershipListResponseItem {
    /**
     * The id of the membership
     */
    id: string;

    /**
     * The role of the member
     */
    role: 'owner' | 'member' | null;

    user: MembershipListResponseItem.User;
  }

  export namespace MembershipListResponseItem {
    export interface User {
      /**
       * The id of the user
       */
      id: string;

      /**
       * The username of the user
       */
      username: string | null;
    }
  }
}

export declare namespace Memberships {
  export { type MembershipListResponse as MembershipListResponse };
}
