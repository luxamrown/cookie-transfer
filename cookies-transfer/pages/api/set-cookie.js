export default function handler(req, res) {
  // Detect domain otomatis
  let host = req.headers.host; // contoh: mainweb.com OR localhost:3000

  let bareDomain = host.replace(/:\d+$/, ""); // remove :3000

  // kalau local, domain cookie harus pakai .localhost (ga boleh .local)
  let cookieDomain =
    bareDomain.includes("localhost") ? bareDomain : `${bareDomain}`;

  res.setHeader("Set-Cookie", [
    `session_token=ABC123; Path=/; Domain=${cookieDomain}; HttpOnly; SameSite=Lax; Secure`,
  ]);

  return res.status(200).json({
    ok: true,
    message: "Cookie has been set",
    domainDetected: cookieDomain,
  });
}
