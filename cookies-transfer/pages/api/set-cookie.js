export default function handler(req, res) {

  const cookieDomain = req.query?.domain || null

  res.setHeader("Set-Cookie", [
    `new_cookie=ETS1234; Path=/; Domain=${cookieDomain || "localhost"}; HttpOnly; SameSite=Lax; Secure`,
  ]);

  return res.status(200).json({
    ok: true,
    message: "Cookie has been set",
    domainDetected: cookieDomain,
  });
}
