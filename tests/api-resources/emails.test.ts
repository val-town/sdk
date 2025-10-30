// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emails', () => {
  test('send', async () => {
    const responsePromise = client.emails.send();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('send: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emails.send(
        {
          attachments: [
            {
              content: 'content',
              filename: 'filename',
              contentId: 'contentId',
              disposition: 'disposition',
              type: 'type',
            },
          ],
          bcc: 'string',
          cc: 'string',
          from: 'string',
          headers: { foo: 'string' },
          html: 'Hello <strong>world</strong>',
          replyToList: { email: 'email', name: 'name' },
          subject: 'An important message',
          text: 'Hello world',
          to: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
