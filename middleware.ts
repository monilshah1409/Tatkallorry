
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protect /dashboard
    if (path.startsWith('/dashboard')) {
        // Check for auth cookie (simple hardcoded corporate security)
        const authCookie = request.cookies.get('admin_auth');

        // Validate value (in real app, this would be a JWT or signed token)
        // For corporate demo: value must be 'true' or hashed pass
        if (!authCookie || authCookie.value !== 'authenticated_corporate_user') {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
};
