import { defineConfig } from 'tinacms';

const branch = process.env.CF_PAGES_BRANCH || process.env.HEAD || 'tina-cms';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'uploads', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'site',
        label: 'Website text and Spotify',
        path: 'content',
        format: 'json',
        match: { include: 'site' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'hero_description', label: 'Hero description', ui: { component: 'textarea' } },
          { type: 'string', name: 'releases_intro', label: 'Releases introduction', ui: { component: 'textarea' } },
          { type: 'string', name: 'contact_intro', label: 'Contact introduction', ui: { component: 'textarea' } },
          { type: 'string', name: 'spotify_embed_url', label: 'Spotify link (track, album, playlist or show)' },
          { type: 'string', name: 'spotify_heading', label: 'Spotify heading' },
          { type: 'string', name: 'spotify_note', label: 'Internal note', ui: { component: 'textarea' } },
        ],
      },
    ],
  },
});
