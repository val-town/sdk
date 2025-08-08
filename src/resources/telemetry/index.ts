// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export { Logs, type LogListResponse, type LogListParams } from './logs';
export { Telemetry } from './telemetry';
export { Traces, type TraceListResponse, type TraceListParams } from './traces';
import type * as Core from '../../core';
import type * as Shared from '../shared';

export interface BaseListParams {
  limit: number;
  start?: string;
  end?: string;
}

export interface StreamableResource<TData, TParams extends BaseListParams> {
  list(
    query: TParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<{
    data: Array<TData>;
    links: Shared.PaginationLinks;
  }>;
}

export interface StreamParams {
  frequency?: number;
}

export async function* streamTelemetryData<TData, TParams extends BaseListParams>(
  resource: StreamableResource<TData, TParams>,
  query: StreamParams,
  options?: Core.RequestOptions,
): AsyncGenerator<TData> {
  const { frequency = 1000 } = query;

  while (true) {
    let startTime = new Date(Date.now() - frequency);
    let endTime = new Date();

    // Gather the range startTime:=(now - frequency) --> now
    let prevNextLink = '';
    while (true) {
      const listParams = {
        limit: 20,
        start: startTime.toISOString(),
        end: endTime.toISOString(),
        ...query,
      } as TParams;

      const { links: newLinks, data: newData } = await resource.list(listParams, options);

      if (newLinks.next === prevNextLink) break; // No new data, stop

      if (!newLinks.next) break;
      prevNextLink = newLinks.next;

      // The tail of the range we just received is the start of the new range
      // biome-ignore lint/style/noNonNullAssertion: we know it's there
      const newStartTime = new Date(new URL(newLinks.next).searchParams.get('end')!);
      if (newStartTime.getTime() === startTime.getTime()) break; // No new data, stop

      for (const item of newData) {
        yield item;
      }

      startTime = newStartTime; // Update startTime to the new start time
    }

    await new Promise((resolve) => setTimeout(resolve, frequency));

    endTime = new Date(); // Reassign endTime to the current time
  }
}
