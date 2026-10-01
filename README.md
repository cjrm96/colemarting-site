# colemarting.com — post-cycle site

Static site for GitHub Pages. Do not point DNS here until after Election Day, November 3, 2026.

## What this is

An incumbency page. The job is the list: name, email, mobile, zip. Donations are a button out to WinRed, and that button comes off when the 2026 committee terminates.

- List: EmailOctopus form embed in `index.html` (replace the placeholder).
- Texts: export mobile from EmailOctopus into Politexts. EmailOctopus does not send texts.
- Donate: WinRed only while FPPC #1479857 is open. Remove the `.donate` block in `index.html` when the treasurer files termination.

## Pages

- `/` updates form + donate
- `/updates.html` clips and notes
- `/privacy.html` privacy and text terms

## GitHub Pages

Settings → Pages → Deploy from branch `main` / root. Public repo so Pages works on the free plan.

After the election, add a `CNAME` file with `colemarting.com` and point DNS:

- `www` CNAME to `cjrm96.github.io`
- apex A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

Export the Google Site before the cutover.
