import { sendApiRequest } from "./sendApiRequest";
import type { IContactMessageInput } from "../interfaces/contactMessage.interface";

export const sendContactMessage = (payload: IContactMessageInput) =>
  sendApiRequest<void>("/contact", { method: "POST", body: payload });
