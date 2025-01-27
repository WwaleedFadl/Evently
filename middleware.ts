import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// export default clerkMiddleware({
//   publicRoutes: [
//     '/',
//     '/events/:id',
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing',
//   ],
//   ignoredRoutes: [
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing',
//   ],
// });
const isProtectedRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
]);
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
