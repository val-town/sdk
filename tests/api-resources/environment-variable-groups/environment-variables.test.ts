// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environmentVariables', () => {
  test('create: only required params', async () => {
    const responsePromise = client.environmentVariableGroups.environmentVariables.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { key: 'key', value: 'value' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.environmentVariableGroups.environmentVariables.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { key: 'key', value: 'value', description: 'description' },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.environmentVariableGroups.environmentVariables.update('key', {
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      value: 'value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.environmentVariableGroups.environmentVariables.update('key', {
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      value: 'value',
      description: 'description',
    });
  });

  test('list', async () => {
    const responsePromise = client.environmentVariableGroups.environmentVariables.list(
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

  test('delete: only required params', async () => {
    const responsePromise = client.environmentVariableGroups.environmentVariables.delete('key', {
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.environmentVariableGroups.environmentVariables.delete('key', {
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
