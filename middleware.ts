import {NextRequest, NextResponse} from 'next/server';
import {SESSION_COOKIE} from './consts';
import {DataStorage} from './utils/DataStorage';

export const config = {
  matcher: ['/admin', '/admin/auth'],
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith('/admin')) {
    const cookieSession = request.cookies.get(SESSION_COOKIE)?.value;

    if (!cookieSession) {
      return NextResponse.redirect(new URL('/admin/auth', request.url));
    }

    const storageSession = await new DataStorage().get(`session-${cookieSession}`);

    if (!storageSession) {
      return NextResponse.redirect(new URL('/admin/auth', request.url));
    }
  }

  if (request.nextUrl.pathname.endsWith('/admin/auth')) {
    const cookieSession = request.cookies.get(SESSION_COOKIE)?.value;

    const storageSessionKey = `session-${cookieSession}`
    const storage = new DataStorage();

    const storageSession = await storage.get(storageSessionKey);

    if (storageSession && cookieSession) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
 }
