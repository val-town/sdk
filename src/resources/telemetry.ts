// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { PageCursorURL, type PageCursorURLParams } from '../pagination';

/**
 * OpenTelemetry traces for your val executions
 */
export class Telemetry extends APIResource {
  /**
   * Get OpenTelemetry traces for a given time window and filter by branch_id or
   * file_id
   */
  list(
    query: TelemetryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TelemetryListResponsesPageCursorURL, TelemetryListResponse> {
    return this._client.getAPIList('/v1/telemetry/traces', TelemetryListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class TelemetryListResponsesPageCursorURL extends PageCursorURL<TelemetryListResponse> {}

export interface TelemetryListResponse {
  attributes: Array<TelemetryListResponse.Attribute>;

  endTimeUnixNano: string;

  name: string;

  startTimeUnixNano: string;

  status: TelemetryListResponse.Status;

  traceId: string;
}

export namespace TelemetryListResponse {
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

export interface TelemetryListParams extends PageCursorURLParams {
  /**
   * End date of the time window
   */
  end_timestamp: string;

  /**
   * Start date of the time window
   */
  start_timestamp: string;

  /**
   * Branch IDs to filter by
   */
  branch_ids?: Array<string>;

  /**
   * Include only traces from a given file identified by its ID
   */
  file_id?: string;
}

Telemetry.TelemetryListResponsesPageCursorURL = TelemetryListResponsesPageCursorURL;

export declare namespace Telemetry {
  export {
    type TelemetryListResponse as TelemetryListResponse,
    TelemetryListResponsesPageCursorURL as TelemetryListResponsesPageCursorURL,
    type TelemetryListParams as TelemetryListParams,
  };
}
