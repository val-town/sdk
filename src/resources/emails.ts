// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import { isRequestOptions } from '@valtown/sdk/core';
import * as EmailsAPI from '@valtown/sdk/resources/emails';

export class Emails extends APIResource {
  /**
   * Send emails
   */
  send(body?: EmailSendParams, options?: Core.RequestOptions): Core.APIPromise<EmailSendResponse>;
  send(options?: Core.RequestOptions): Core.APIPromise<EmailSendResponse>;
  send(
    body: EmailSendParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailSendResponse> {
    if (isRequestOptions(body)) {
      return this.send({}, body);
    }
    return this._client.post('/v1/email', { body, ...options });
  }
}

/**
 * Successfully sent email
 */
export interface EmailSendResponse {
  message: string;
}

export interface EmailSendParams {
  attachments?: Array<EmailSendParams.Attachment>;

  bcc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  cc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  from?: string | EmailSendParams.EmailNameAndAddress;

  html?: string;

  replyToList?: EmailSendParams.EmailNameAndAddress | Array<EmailSendParams.EmailList>;

  subject?: string;

  text?: string;

  to?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;
}

export namespace EmailSendParams {
  export interface Attachment {
    content: string;

    filename: string;

    contentId?: string;

    disposition?: string;

    type?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailList {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }
}

export namespace Emails {
  export import EmailSendResponse = EmailsAPI.EmailSendResponse;
  export import EmailSendParams = EmailsAPI.EmailSendParams;
}
