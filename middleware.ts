import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    // '/api/uploadthing',
    '/test',
])

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        auth().protect()
    }
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

// export default authMiddleware({
//     publicRoutes: [
//       '/',
//       '/events/:id',
//       '/api/webhook/clerk',
//       '/api/webhook/stripe',
//       '/api/uploadthing'
//     ],
//     ignoredRoutes: [
//       '/api/webhook/clerk',
//       '/api/webhook/stripe',
//       '/api/uploadthing'
//     ]
//   });
