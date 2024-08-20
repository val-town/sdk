// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as EmailsAPI from './emails';

/**
 * Val Town supports sending emails from vals
 */
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
  /**
   * A list of attachments to add to the email
   */
  attachments?: Array<EmailSendParams.Attachment>;

  /**
   * A single email or list of emails for one of the address fields
   */
  bcc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  /**
   * A single email or list of emails for one of the address fields
   */
  cc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  /**
   * An email address and name
   */
  from?: string | EmailSendParams.EmailNameAndAddress;

  /**
   * A set of headers to include the email that you send
   */
  headers?: Record<string, string>;

  /**
   * HTML content of the email. Can be specified alongside text
   */
  html?: string;

  /**
   * A reply-to list of email addresses
   */
  replyToList?: EmailSendParams.EmailNameAndAddress | Array<EmailSendParams.EmailList>;

  /**
   * The subject line of the email
   */
  subject?: string;

  /**
   * Text content of the email, for email clients that may not support HTML
   */
  text?: string;

  /**
   * A single email or list of emails for one of the address fields
   */
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

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailList {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }
}

export namespace Emails {
  export import EmailSendResponse = EmailsAPI.EmailSendResponse;
  export import EmailSendParams = EmailsAPI.EmailSendParams;
}
