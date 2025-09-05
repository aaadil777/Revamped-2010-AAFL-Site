// /functions/api/contact.js
export async function onRequestPost(context) {
  const { request, env } = context;
  const { to_email, from_email, RESEND_API_KEY } = env; // or TO_EMAIL/FROM_EMAIL

  const form = await request.formData();
  const name = form.get('name') || 'Website Visitor';
  const email = form.get('email') || '';
  const message = form.get('message') || '';

  // Example: send via Resend (replace with your provider if needed)
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: from_email,
      to: [to_email],
      reply_to: email || undefined,
      subject: `New contact from ${name}`,
      text: message
    })
  });

  if (!res.ok) {
    return new Response("Failed to send email", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
