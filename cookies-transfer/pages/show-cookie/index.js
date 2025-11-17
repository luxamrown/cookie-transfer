import { useEffect, useState } from "react";

export default function ShowCookie() {
  const [cookies, setCookies] = useState("");

  useEffect(() => {
    // ini selalu menampilkan cookie yang bener2 disimpan browser
    setCookies(document.cookie);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Cookies Stored in Browser</h1>
      <pre>{cookies || "(no cookies stored)"}</pre>

      <p style={{ marginTop: 20 }}>
        1️⃣ Buka <code>/api/set-cookie</code> (via browser).<br />
        2️⃣ Lalu buka halaman ini.<br /><br />
        Hasilnya: cookie <b>externalCookie</b> tidak akan pernah muncul.
      </p>
    </div>
  );
}
