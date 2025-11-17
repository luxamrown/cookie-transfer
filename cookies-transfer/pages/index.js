export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Main Web</h1>

      <a href="/api/set-cookie">
        <button>Set Cookie</button>
      </a>

      <a href="/api/check-cookie">
        <button style={{ marginLeft: 20 }}>Check Cookie</button>
      </a>

      <div style={{ marginTop: 20 }}>
        <a href="/sub">
          <button>Go to SUB via Rewrite</button>
        </a>
      </div>
    </div>
  );
}
