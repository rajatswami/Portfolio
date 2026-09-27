export interface IContactMessageInput {
  name: string;
  email: string;
  message: string;
}

/** Server-side alias - same shape, used by the API route/Google Sheets service. */
export type IContactMessage = IContactMessageInput;
