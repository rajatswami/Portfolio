import api from "./axios";
import type { IApiResponse } from "../interfaces/apiResponse.interface";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method?: Method;
  body?: unknown;
}

/** Pulls a readable message out of any axios/API error. */
export const extractErrorMessage = (error: unknown): string => {
  const data = (error as { response?: { data?: IApiResponse } })?.response?.data;
  return data?.message || (error as Error)?.message || "Something went wrong";
};

/**
 * Thin wrapper around the shared axios instance: one place that sets the
 * HTTP method/body, unwraps the API route's `{ success, data }` envelope,
 * and turns failures into a plain `Error` with a message safe to show in
 * the UI.
 */
export const sendApiRequest = async <T = void>(
  url: string,
  { method = "GET", body }: RequestOptions = {}
): Promise<T> => {
  try {
    const response = await api.request<IApiResponse<T>>({
      url,
      method,
      data: method !== "GET" ? body : undefined,
    });
    return response.data.data as T;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
};
