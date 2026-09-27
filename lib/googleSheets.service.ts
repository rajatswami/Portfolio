import { google } from 'googleapis';
import config from './config';
import ApiError from './ApiError';
import { IContactMessage } from '../interfaces/contactMessage.interface';

let cachedSheets: ReturnType<typeof google.sheets> | null = null;

const getSheetsClient = () => {
  if (cachedSheets) return cachedSheets;

  const { clientEmail, privateKey, sheetId } = config.google;

  if (!clientEmail || !privateKey || !sheetId) {
    throw new ApiError(
      500,
      'GOOGLE_SHEETS_NOT_CONFIGURED',
      'The contact form is not fully configured yet - Google Sheets credentials are missing on the server.'
    );
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  cachedSheets = google.sheets({ version: 'v4', auth });
  return cachedSheets;
};

/**
 * Appends one row - [timestamp, name, email, message] - to the "Sheet1" tab
 * of the configured spreadsheet. The sheet must already be shared with the
 * service account's email (as Editor) for this to succeed.
 */
export const appendContactRow = async (entry: IContactMessage): Promise<void> => {
  const sheets = getSheetsClient();

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.google.sheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), entry.name, entry.email, entry.message]],
      },
    });
  } catch (error) {
    console.error('Google Sheets append failed:', error);
    throw new ApiError(
      502,
      'GOOGLE_SHEETS_WRITE_FAILED',
      'Could not save your message right now. Please try again shortly.'
    );
  }
};
