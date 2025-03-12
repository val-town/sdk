// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource branches', () => {
  test('create: only required params', async () => {
    const responsePromise = client.projects.branches.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'my-branch',
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
    const response = await client.projects.branches.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'my-branch',
      branchId: '00000000-0000-0000-0000-000000000000',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.projects.branches.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.branches.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.projects.branches.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.projects.branches.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.projects.branches.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
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
      client.projects.branches.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
