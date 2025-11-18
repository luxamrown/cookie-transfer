// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.rewrite("https://sub-cookie-transfer.vercel.app/");

  response.cookies.set('rewrite_cookie', 'METS11223344', {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    path: '/',
    domain: ".sub-cookie-transfer.vercel.app"
  });

    response.cookies.set('rewrite_cookie', 'MATS11223344', {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    path: '/',
    domain: "sub-cookie-transfer.vercel.app"
  });


    response.cookies.set('rewrite_cookie_int', 'LATS123123213321', {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    path: '/',
    domain: "cookie-transfer.vercel.app"
  });
  


  return response;
}

export const config = {
  matcher: '/sub',
};