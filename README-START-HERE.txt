ILIAS VAFEIADIS — TINACMS INTEGRATION (INITIAL WORKING SCOPE)
===============================================================

WHAT THIS PACKAGE DOES
- Keeps the V7 visual site in public/index.html (including embedded images).
- Sets up TinaCMS schema for content/site.json: hero, releases, contact, Spotify.
- Adds the build scripts to generate /admin/ via Tina CLI.
- Publishes edited content/site.json to public/content/site.json during builds.

IMPORTANT LIMITATIONS
- This is not yet a visual drag-and-drop editor for layout.
- Works, Releases cards, Live, and Videos are NOT yet Tina collections.
- The Tina CLI build and login are NOT tested in this environment.
- Do not merge tina-cms into main before successful build, login and content edit tests.
- A TinaCloud project alone is not enough; Cloudflare needs build variables and a build step.

UPLOAD ON IPHONE TO THE EXISTING tina-cms BRANCH (NOT main)
1. Download ZIP, unzip in iOS Files.
2. In GitHub select tina-cms > Add file > Upload files.
3. Upload package.json and README-START-HERE.txt in repository root.
4. Create tina/config.ts and scripts/publish.mjs via GitHub's 'Create new file'
   using their contents from this ZIP (mobile GitHub file upload may flatten folders).
5. Upload public/index.html to the 'public' folder, and content/site.json to 'content'.
   Note: the previous root index.html may remain; Cloudflare must publish 'public'.

CLOUDFLARE PAGES SETTINGS FOR THIS BRANCH ONLY
Framework preset: None
Build command: npm run build
Build output directory: public
Environment variables (set separately for preview and production if ever merged):
NEXT_PUBLIC_TINA_CLIENT_ID = your TinaCloud project Client ID
TINA_TOKEN = a read/write token created in TinaCloud for this project
CF_PAGES_BRANCH = automatically supplied by Cloudflare Pages

Do not change production build settings before creating a separate Pages test
project or otherwise protecting the main deployment. Pages build settings may
apply to ALL branches and break production if changed prematurely.

TinaCloud authorized Site URL(s): add the EXACT preview origin for the Tina CMS
preview URL if needed. Login callback requires allowed origin.

Verify after successful preview build:
- preview /admin/ loads and can sign in
- editor shows Website text and Spotify > site.json
- edit a text field and save: commit goes to tina-cms
- preview build updates and new text appears

Spotify embeds require a valid https://open.spotify.com/track/ID,
/album/ID, /playlist/ID or similar Spotify URL.
