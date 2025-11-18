import { serialize } from 'cookie';


export async function getServerSideProps({ req, res }) {


    // Serialize the cookie

    // Set the 'Set-Cookie' header in the response
    res.setHeader('Set-Cookie', serialize('builtin_cookie', 'VD123123', {
      httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
      maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
      path: '/', // The path for which the cookie is valid
      sameSite: 'Lax', // Controls when cookies are sent with cross-site requests
      domain: '.vercel.app'
    }));

    // res.setHeader('Set-Cookie', serialize('builtin_cookie', 'VDS123123', {
    //   httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
    //   maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
    //   path: '/', // The path for which the cookie is valid
    //   sameSite: 'Lax', // Controls when cookies are sent with cross-site requests
    //   domain: ".cookie-transfer.vercel.app"
    // }));

    //     res.setHeader('Set-Cookie', serialize('builtin_cookie', 'VDSL123123', {
    //   httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
    //   maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
    //   path: '/', // The path for which the cookie is valid
    //   sameSite: 'Lax', // Controls when cookies are sent with cross-site requests
    //   domain: "cookie-transfer.vercel.app"
    // }));

  return {
    props: {
      cookies: req.headers.cookie || "NO_COOKIES",
    },
  };
}

export default function Sub({ cookies }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Sub Web</h1>
      <p>Incoming cookies: {cookies}</p>
    </div>
  );
}
