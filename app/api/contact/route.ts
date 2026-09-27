import { NextRequest, NextResponse } from 'next/server';
import ApiError from '../../../lib/ApiError';
import { requireString, requireEmail } from '../../../lib/validators';
import { appendContactRow } from '../../../lib/googleSheets.service';
import { IContactMessage } from '../../../interfaces/contactMessage.interface';

/**
 * POST /api/contact (public)
 * Anyone can submit the contact form; each submission is appended as a row
 * to a private Google Sheet - there is no database and no admin API.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, message } = body as Partial<IContactMessage>;

    const cleanName = requireString(name, 'Name');
    const cleanEmail = requireEmail(email);
    const cleanMessage = requireString(message, 'Message');

    await appendContactRow({ name: cleanName, email: cleanEmail, message: cleanMessage });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { success: false, message: error.message, errorCode: error.errorCode },
        { status: error.statusCode }
      );
    }
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error',
        errorCode: 'INTERNAL_SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}
