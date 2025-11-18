// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req, res) {
    console.log(req.nextUrl.searchParams.get('id'))
    
    const id = req.nextUrl.searchParams.get('id')
    const jwt = req.nextUrl.searchParams.get('jwt')
    const chturl = req.nextUrl.searchParams.get('chturl')

  const response = NextResponse.rewrite(`https://${chturl}/?data=${id}`);

//   response.cookies.set('rewrite_cookie', 'METS11223344', {
//     maxAge: 60 * 60 * 24, // 1 day
//     httpOnly: true,
//     path: '/',
//     domain: ".sub-cookie-transfer.vercel.app"
//   });

    response.cookies.set('member_jwt', jwt, {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: "none"
  });


//     response.cookies.set('rewrite_cookie_int', 'LATS123123213321', {
//     maxAge: 60 * 60 * 24, // 1 day
//     httpOnly: true,
//     path: '/',
//     domain: "cookie-transfer.vercel.app"
//   });
  


  return response;
}

export const config = {
  matcher: '/sub',
};