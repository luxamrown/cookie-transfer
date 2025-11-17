export default function handler(req, res) {
  const cookies = req.headers.cookie || "NO_COOKIES";

  return res.status(200).json({
    ok: true,
    cookies,
  });
}
