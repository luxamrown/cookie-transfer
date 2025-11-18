export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Main Web</h1>
      
      <div style={{display: "flex", flexDirection: "column", "gap": "20px"}}>
        <a href="/api/set-cookie?domain=.sub-cookie-transfer.vercel.app">
          <button>Set Cookie .sub-cookie-transfer.vercel.app</button>
        </a>

        <a href="/api/set-cookie?domain=sub-cookie-transfer.vercel.app">
          <button>Set Cookie sub-cookie-transfer.vercel.app</button>
        </a>

        <a href="/api/set-cookie?domain=cookie-transfer.vercel.app">
          <button>Set Cookie cookie-transfer.vercel.app</button>
        </a>

        <a href="/api/set-cookie?domain=.cookie-transfer.vercel.app">
          <button>Set Cookie .cookie-transfer.vercel.app</button>
        </a>

        <a href="/api/set-cookie?domain=google.com">
          <button>Set Cookie google.com</button>
        </a>

        <a href="/api/check-cookie">
          <button style={{ marginLeft: 20 }}>Check Cookie</button>
        </a>
      </div>


      <div style={{ marginTop: 20 }}>
        <a href="/sub">
          <button>Go to SUB via Rewrite</button>
        </a>
      </div>
    </div>
  );
}
