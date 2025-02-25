// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.projects.files.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'path', {
      limit: 1,
      offset: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.projects.files.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'path', {
      limit: 1,
      offset: 0,
      branch_id: 'branch_id',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.projects.files.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
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
    const response = await client.projects.files.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
      branch_id: 'branch_id',
      recursive: true,
      version: 0,
    });
  });

  test('content', async () => {
    const responsePromise = client.projects.files.content('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'path');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('content: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.files.content('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'path', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('content: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.files.content(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        'path',
        {
          branch_id: 'branch_id',
          version: 0,
          'Cache-Control': 'Cache-Control',
          'If-Match': 'If-Match',
          'If-Modified-Since': 'If-Modified-Since',
          'If-None-Match': 'If-None-Match',
          'If-Unmodified-Since': 'If-Unmodified-Since',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
