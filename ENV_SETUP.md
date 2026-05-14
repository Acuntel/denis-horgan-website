# Environment Variables

Copy the block below into a `.env.local` file at the project root and fill in real values. `.env.local` is gitignored — never commit secrets.

```bash
# --- Anthropic (chatbot) ---
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929

# --- Resend (lead notification emails) ---
RESEND_API_KEY=re_...
# Address Denis receives leads at:
LEAD_TO_EMAIL=denis.horgan@redfin.com
# Verified Resend sender (must be a domain Brady verified in Resend):
LEAD_FROM_EMAIL=Denis Horgan Website <noreply@denishorgan.com>

# --- Supabase (properties + photos) ---
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
# Service role key — server-only, never expose. Used for admin writes.
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# --- Admin panel ---
# Password Denis uses to log into /admin
ADMIN_PASSWORD=change-me-to-something-strong
# Random 64-char hex string. Generate with:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
ADMIN_COOKIE_SECRET=replace-with-32-byte-hex-secret

# --- Site ---
NEXT_PUBLIC_SITE_URL=https://denishorgan.com
```

## One-time setup checklist

1. **Supabase project** (~5 min):
   - Go to supabase.com → New project → name it `denis-horgan-site`
   - Open SQL Editor → paste contents of `supabase-schema.sql` → Run
   - Project Settings → API → copy URL + anon key + service role key into env vars
   - Storage → create public bucket `property-photos`

2. **Resend** (~2 min): create API key at resend.com/api-keys. To send from a custom address (`noreply@denishorgan.com`), verify a domain in Resend → Domains. Until then, you can use `onboarding@resend.dev` as `LEAD_FROM_EMAIL` (Resend's sandbox sender).

3. **Anthropic key**: reuse Brady's existing key or create a new one for this project at console.anthropic.com.

4. **Vercel**: paste all env vars under Project → Settings → Environment Variables.
