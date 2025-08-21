// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import type * as Core from '../../core';
import type * as Shared from '../shared';
import type { StreamParams, Telemetry } from '../telemetry';
import { streamTelemetryData } from './';

export class Traces extends APIResource {
  /**
   * Get OpenTelemetry traces within a specified time window with flexible pagination
   * options: Pass in only the end time to paginate backwards from there. Pass in a
   * start time to paginate backwards from now until the start time. Pass in both to
   * get resources within the time window. Choose to return in end_time order instead
   * to view traces that completed in a window or since a time. Filter additionally
   * by branch_ids or file_id.
   */
  list(query: TraceListParams, options?: Core.RequestOptions): Core.APIPromise<TraceListResponse> {
    return this._client.get('/v1/telemetry/traces', { query, ...options });
  }

  /**
   * Stream OpenTelemetry traces, accessing new ones live as they come in.
   *
   * @example
   * ```ts
   * const traces = await client.telemetry.traces.stream({
   *   frequency: 1000,
   * });
   *
   * for await (const trace of traces) {
   *   console.log(trace);
   * }
   * ```
   */
  async *stream(
    query: Omit<TraceListParams, 'limit'> & StreamParams,
    options?: Core.RequestOptions,
  ): AsyncGenerator<Telemetry.Traces.TraceListResponse.Data> {
    yield* streamTelemetryData(this, query, options);
  }
}

/**
 * A paginated result set
 */
export interface TraceListResponse {
  data: Array<TraceListResponse.Data>;

  /**
   * Links to use for pagination
   */
  links: Shared.PaginationLinks;
}

export namespace TraceListResponse {
  export interface Data {
    attributes: Array<Data.Attribute>;

    /**
     * 0 if trace is unfinished
     */
    endTimeUnixNano: string;

    name: string;

    startTimeUnixNano: string;

    status: Data.Status;

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

    export interface Status {
      code: number;

      message: string;
    }
  }
}

export interface TraceListParams {
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
   * When set to end_time, traces are sorted by their end time, and pending traces
   * are omitted. When set to start_time, all traces are included, with pending
   * traces given "0" for their end time.
   */
  order_by?: 'start_time' | 'end_time';

  /**
   * Start date of the time window (earliest time)
   */
  start?: string;
}

export declare namespace Traces {
  export type { TraceListResponse, TraceListParams };
}
