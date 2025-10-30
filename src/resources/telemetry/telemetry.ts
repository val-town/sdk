// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, Logs } from './logs';
import * as TracesAPI from './traces';
import { TraceListParams, TraceListResponse, Traces } from './traces';

/**
 * OpenTelemetry traces and logs for your val executions
 */
export class Telemetry extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Telemetry.Traces = Traces;
Telemetry.Logs = Logs;

export declare namespace Telemetry {
  export {
    Traces as Traces,
    type TraceListResponse as TraceListResponse,
    type TraceListParams as TraceListParams,
  };

  export { Logs as Logs, type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
