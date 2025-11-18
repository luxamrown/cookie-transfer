export default async function handler(req, res) {

    const url = `https://sub-cookie-transfer.netlify.app/`;
    
    const upstream = await fetch(url, {
        method: "GET",
        headers: {
        ...req.headers,
        },
        body: req.method === "GET" ? null : req.body,
    });

    res.setHeader("Set-Cookie",
        `rewriteie=_cookETS123444442123 Path=/; Max-Age=${60 * 60 * 24 * 7}; Domain=vercel.app; HttpOnly; SameSite=Lax`
    );

    // res.setHeader("Set-Cookie",
    //     `rewrite_cookie=ATS123123213 Path=/; Max-Age=${60 * 60 * 24 * 7}; Domain=sub-cookie-transfer.vercel.app; HttpOnly; SameSite=Lax`
    // );

    // res.setHeader("Set-Cookie",
    //     `rewrite_cookie_int=LATS213123123 Path=/; Max-Age=${60 * 60 * 24 * 7}; Domain=cookie-transfer.vercel.app; HttpOnly; SameSite=Lax`
    // );

    const text = await upstream.text();

    res.status(upstream.status).setHeader("Content-Type", "text/html");
    res.send(text);
}