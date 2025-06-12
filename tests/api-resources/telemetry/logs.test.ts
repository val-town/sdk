// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  test('list: only required params', async () => {
    const responsePromise = client.telemetry.logs.list({ limit: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.telemetry.logs.list({
      limit: 1,
      branch_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      end: '2019-12-27T18:11:19.117Z',
      file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      start: '2019-12-27T18:11:19.117Z',
      trace_ids: ['string'],
    });
  });
});
