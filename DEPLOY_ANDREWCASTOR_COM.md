# Publish the portfolio at andrewcastor.com

This guide uses Cloudflare Pages for hosting and keeps Namecheap as the domain registrar. You do not need to transfer the domain away from Namecheap.

## Files you need

Upload `andrew-castor-deploy.zip`. It contains only the production website.

## Important: preserve email forwarding

The domain currently uses Namecheap email forwarding. When the nameservers move to Cloudflare, confirm that Cloudflare contains these records before relying on email:

| Type | Name | Priority | Target / value |
|---|---|---:|---|
| MX | `@` | 10 | `eforward1.registrar-servers.com` |
| MX | `@` | 10 | `eforward2.registrar-servers.com` |
| MX | `@` | 10 | `eforward3.registrar-servers.com` |
| MX | `@` | 15 | `eforward4.registrar-servers.com` |
| MX | `@` | 20 | `eforward5.registrar-servers.com` |
| TXT | `@` | — | `v=spf1 include:spf.efwd.registrar-servers.com ~all` |

If you have added any other email, verification, or service records in Namecheap, copy those as well.

## Part 1 — Deploy the website

1. Sign in at `https://dash.cloudflare.com/` and create a free Cloudflare account if needed.
2. Open **Workers & Pages**.
3. Select **Create application** → **Get started** → **Drag and drop your files**.
4. Enter a project name such as `andrew-castor-portfolio`.
5. Upload `andrew-castor-deploy.zip`.
6. Select **Deploy site**.
7. Open the new `*.pages.dev` address and test the homepage, project pages, images, academic plan, résumé download, and mobile layout.

Do not continue until the `pages.dev` version works correctly.

## Part 2 — Add the domain to Cloudflare DNS

1. In the Cloudflare dashboard, select **Add a domain** or **Onboard a domain**.
2. Enter `andrewcastor.com` without `www` or `https://`.
3. Select the **Free** plan.
4. Cloudflare will scan the existing DNS records.
5. Verify that all five MX records and the SPF TXT record listed above appear. Add any missing records before continuing.
6. Cloudflare will display two assigned nameservers. They will look similar to:
   - `example-one.ns.cloudflare.com`
   - `example-two.ns.cloudflare.com`

Use the exact nameservers shown in your account; the examples above will not work.

## Part 3 — Change the nameservers in Namecheap

1. Open `https://ap.www.namecheap.com/` and sign in.
2. Select **Domain List** in the left sidebar.
3. Find `andrewcastor.com` and select **Manage**.
4. Stay on the **Domain** tab.
5. Find **Nameservers**.
6. Open the dropdown and select **Custom DNS**.
7. Paste the first Cloudflare nameserver into Nameserver 1.
8. Paste the second Cloudflare nameserver into Nameserver 2.
9. Select the green checkmark to save.
10. Return to Cloudflare and select **Check nameservers now**.

Activation often occurs quickly, but DNS caches can take up to 24–48 hours in uncommon cases. Do not purchase Namecheap hosting; the domain registration is enough.

## Part 4 — Remove the old website records

After Cloudflare reports the domain as **Active**, open **DNS** → **Records** for `andrewcastor.com`.

Delete these old ChatGPT-site records if Cloudflare imported them:

| Type | Name | Current content |
|---|---|---|
| A | `@` | `162.159.143.30` |
| A | `@` | `172.66.3.26` |
| CNAME | `www` | `custom-domains.chatgpt.site` |

Do not delete the MX or SPF records used for email forwarding.

## Part 5 — Attach andrewcastor.com to the Pages project

1. Open **Workers & Pages**.
2. Select the portfolio Pages project.
3. Open **Custom domains**.
4. Select **Set up a domain**.
5. Enter `andrewcastor.com`.
6. Select **Continue** and then **Activate domain** if prompted.
7. Cloudflare should create the required proxied DNS record automatically.
8. Wait until the domain status becomes **Active** and the certificate status is ready.
9. Open `https://andrewcastor.com` in a private/incognito browser window.

Do not manually create an A record pointing at a random Pages IP address. Cloudflare Pages uses a managed CNAME/flattened record.

## Part 6 — Redirect www to the root domain

Use `andrewcastor.com` as the canonical address and redirect `www.andrewcastor.com` to it.

1. In Cloudflare, open **Bulk Redirects**.
2. Create a redirect list with:
   - Source: `www.andrewcastor.com`
   - Target: `https://andrewcastor.com`
   - Status: `301`
   - Enable **Preserve query string**.
   - Enable **Subpath matching**.
   - Enable **Preserve path suffix**.
3. Create and enable a Bulk Redirect rule using that list.
4. Open **DNS** → **Records**.
5. Add this record:
   - Type: `A`
   - Name: `www`
   - IPv4 address: `192.0.2.1`
   - Proxy status: **Proxied** (orange cloud)
6. Test both `https://www.andrewcastor.com` and a path such as `https://www.andrewcastor.com/eagle-scout.html`. They should redirect to the equivalent root-domain address.

## Part 7 — Final checks

- `https://andrewcastor.com` loads without a certificate warning.
- `http://andrewcastor.com` upgrades to HTTPS.
- `https://www.andrewcastor.com` redirects to the root domain.
- Project pages and images load.
- The résumé downloads.
- The academic-plan search and accordions work.
- Email forwarding still receives test messages.

## Updating the site later

1. Create an updated deployment ZIP.
2. Open Cloudflare **Workers & Pages** → the project → **Deployments**.
3. Select **Create deployment**.
4. Upload the new ZIP as the production deployment.

The custom domain remains attached automatically.
