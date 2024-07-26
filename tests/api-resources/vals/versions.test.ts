// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vals.versions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'console.log(1);',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.vals.versions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'console.log(1);',
      name: 'myVal',
      privacy: 'public',
      readme: '# My Val',
      type: 'script',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.vals.versions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 0, {
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
    const response = await client.vals.versions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 0, {
      limit: 1,
      offset: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.vals.versions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.vals.versions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.vals.versions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vals.versions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 0, {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
