# Jewel B. Octa — portfolio

A responsive, static portfolio using the supplied photographs, palette, learning artifacts, and content research. No framework installation is required.

## Local development

Run `npm run dev` in this directory, then visit `http://127.0.0.1:4173`.

Run `npm run build` to verify JavaScript syntax, local references, section anchors, and fonts. The deployable site is already in `dist/`.

## Files

- `dist/index.html`: portfolio homepage.
- `dist/work.html` and `dist/work.js`: four artifact/field-note stories.
- `dist/styles.css`: palette, typography, layout, and responsive/reduced-motion behavior.
- `dist/app.js`: navigation, field-note disclosure groups, and copy-email action.
- `dist/fx.js`: shared motion layer (scroll progress, reveals, split-word headings, parallax, magnetic buttons, card tilt, cursor, counters). Respects reduced-motion.
- `dist/episodes.html` and `dist/episodes.js`: Field Study 1 compilation — cover, manifesto, and an opener (reflection + quote) for each of the 16 episodes, with an in-page PDF viewer.
- `dist/assets/episodes/`: the 16 episode PDFs.
- `dist/assets/thesis/`: Periodic Table Explorer logo, mascots, and team photo (from the thesis app).
- `dist/assets/`: original supplied portraits, two extracted coursework graphics, favicon, and locally served fonts.
- `.openai/hosting.json`: Sites identity and static-directory configuration.

The contact address is `jewelbocta09@gmail.com`, supplied by the user. There is no contact backend: the contact link opens the visitor's email app; the copy action places the address on their clipboard.

Only selected visual artifacts are included. Original PDFs and their identifying records are retained outside the deployable directory. Classroom lesson authorship, observed work, proposals, and future intentions are distinguished in the artifact stories.

Fonts: Anton, Instrument Serif, and DM Sans, served locally from Google Fonts. See `dist/assets/fonts/` for licenses.
