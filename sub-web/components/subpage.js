// components/SubPage.js

export default function SubPage({ cookies }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Sub Web</h1>
      <p>Incoming cookies:</p>
      <pre>{cookies || "NO_COOKIES"}</pre>
    </div>
  );
}
