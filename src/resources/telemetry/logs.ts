// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import type * as Core from '../../core';
import type * as Shared from '../shared';
import { type StreamParams, streamTelemetryData } from './';

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

  /**
   * Stream OpenTelemetry logs, accessing new ones live as they come in.
   *
   * @example
   * ```ts
   * const logs = await client.telemetry.logs.stream({
   *   frequency: 1000,
   *   file_id: '530e8400-e29b-41d4-a716-446655440001',
   * });
   *
   * for await (const log of logs) {
   *   console.log(log);
   * }
   * ```
   */
  async *stream(
    query: Omit<LogListParams, 'limit'> & StreamParams,
    options?: Core.RequestOptions,
  ): AsyncGenerator<LogListResponse.Data> {
    yield* streamTelemetryData(this, query, options);
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
   * Sort direction for the traces. Defaults to descending order of timestamp.
   */
  direction: 'asc' | 'desc';

  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

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

  trace_ids?: Array<string>;
}

export declare namespace Logs {
  export type { LogListResponse, LogListParams };
}
