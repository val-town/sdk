// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource telemetry', () => {
  test('list: only required params', async () => {
    const responsePromise = client.telemetry.list({
      end_timestamp: '2019-12-27T18:11:19.117Z',
      limit: 1,
      offset: 0,
      start_timestamp: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.telemetry.list({
      end_timestamp: '2019-12-27T18:11:19.117Z',
      limit: 1,
      offset: 0,
      start_timestamp: '2019-12-27T18:11:19.117Z',
      branch_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
