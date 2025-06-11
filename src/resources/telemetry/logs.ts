// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Logs extends APIResource {
  /**
   * Get OpenTelemetry logs within a specified time window with flexible pagination
   * options: Pass in only the end time to paginate backwards from there. Pass in a
   * start time to paginate backwards from now until the start time. Pass in both to
   * get resources within the time window. Filter additionally by branch_ids or
   * file_id.
   */
  list(query: LogListParams, options?: Core.RequestOptions): Core.APIPromise<LogListResponse> {
    return this._client.get('/v1/telemetry/logs', { query, ...options });
  }
}

/**
 * A paginated result set
 */
export interface LogListResponse {
  data: Array<LogListResponse.Data>;

  /**
   * Links to use for pagination
   */
  links: Shared.PaginationLinks;
}

export namespace LogListResponse {
  export interface Data {
    attributes: Array<Data.Attribute>;

    body: Data.Body;

    severityText: string;

    timeUnixNano: string;

    traceId: string;
  }

  export namespace Data {
    export interface Attribute {
      key: string;

      value: Attribute.Value;
    }

    export namespace Attribute {
      export interface Value {
        arrayValue?: unknown;

        boolValue?: boolean;

        bytesValue?: string;

        doubleValue?: number;

        intValue?: string;

        kvlistValue?: unknown;

        stringValue?: string;
      }
    }

    export interface Body {
      arrayValue?: unknown;

      boolValue?: boolean;

      bytesValue?: string;

      doubleValue?: number;

      intValue?: string;

      kvlistValue?: unknown;

      stringValue?: string;
    }
  }
}

export interface LogListParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  trace_ids: Array<string>;

  /**
   * Branch IDs to filter by
   */
  branch_ids?: Array<string>;

  /**
   * End date of the time window (latest time)
   */
  end?: string;

  /**
   * Include only resources from a given file identified by its ID
   */
  file_id?: string;

  /**
   * Start date of the time window (earliest time)
   */
  start?: string;
}

export declare namespace Logs {
  export { type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
