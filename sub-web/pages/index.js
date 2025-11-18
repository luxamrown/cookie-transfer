import Cookies from 'cookies'

export async function getServerSideProps({ req }) {

	const cookies = new Cookies(req, res)

	cookies.set('builtin_cookie', 'ELS1232121321', {
		httpOnly: true, 
	})
  
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
