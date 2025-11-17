export async function getServerSideProps({ req }) {
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
