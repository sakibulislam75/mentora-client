import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function proxy(request) {
   // Get the server-side session from the Better Auth server
   const session = await auth.api.getSession({
      headers: await headers(), // you need to pass the headers object.
   });
   // If the user is not authenticated, redirect to the sign-in page
   if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
   }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
   matcher: ['/dashboard', '/courses/:id', '/add-course'], // Adjust the paths you want to protect
};
