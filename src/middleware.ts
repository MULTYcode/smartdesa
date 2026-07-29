import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * Daftar hostname yang diizinkan untuk aplikasi frontend-2.
 */
const DEFAULT_ALLOWED_HOSTS = [
  'localhost',
  '127.0.0.1',
];

function getAllowedHosts(): string[] {
  const envHosts = process.env.ALLOWED_HOSTS;
  if (envHosts) {
    const extraHosts = envHosts
      .split(',')
      .map((h) => h.trim().toLowerCase())
      .filter(Boolean);
    return [...DEFAULT_ALLOWED_HOSTS, ...extraHosts];
  }
  return DEFAULT_ALLOWED_HOSTS;
}

/**
 * Memvalidasi apakah hostname request berasal dari sumber yang diizinkan.
 * Mencegah serangan Host Header Injection / Open Redirect via X-Forwarded-Host.
 */
function isHostAllowed(request: NextRequest): boolean {
  const allowedHosts = getAllowedHosts();

  const requestHost = request.nextUrl.hostname.toLowerCase();
  const hostHeader = request.headers.get('host')?.split(':')[0]?.toLowerCase();

  const isRequestHostValid = allowedHosts.some(
    (allowed) => requestHost === allowed || requestHost.endsWith(`.${allowed}`)
  );

  const isHostHeaderValid = !hostHeader || allowedHosts.some(
    (allowed) => hostHeader === allowed || hostHeader.endsWith(`.${allowed}`)
  );

  return isRequestHostValid && isHostHeaderValid;
}

function safeRedirect(request: NextRequest, pathname: string): NextResponse {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url);
}

export async function middleware(request: NextRequest) {
  // 1. Validasi Host Header (Anti-Injection)
  if (!isHostAllowed(request)) {
    return new NextResponse('Bad Request: Invalid Host', { status: 400 });
  }

  // 2. Proteksi Autentikasi /admin
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return safeRedirect(request, '/signin');
  }

  // 3. Tambahkan Security Headers
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  );

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
