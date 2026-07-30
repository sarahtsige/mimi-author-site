# Handoff: Mimi Veshi Author Website

## Overview
A single-page author website for Mimi Veshi, a personal-essay/creative-nonfiction writer (immigrant experience, motherhood, identity, culture/current events). Sections: nav, hero, About, Essays & Writing, What I'm Reading, Contact/newsletter signup, footer.

## About the Design Files
The bundled file (`Mimi Veshi Author Site.dc.html`) is a **design reference built in HTML** — a high-fidelity prototype of layout, color, type, and copy, not production code to copy verbatim. It runs in a proprietary component runtime (custom `<x-dc>`/`<helmet>` tags, a `support.js` loader, `{{ }}` template holes) that will NOT work outside that environment — recreate the visual design and behavior in the target codebase's actual stack (plain HTML/CSS/JS, React, or whatever framework the project uses), not by copying this markup directly.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final as shown. Recreate pixel-perfectly using the target codebase's own component/styling conventions.

## Screens / Views
Single scrolling page, one view. Sections top to bottom:

1. **Nav** — sticky-less top bar, max-width 1180px centered, `padding: 28px 64px`. Left: wordmark "Mimi Veshi" (italic display font, 26px) linking to `#top`. Right: 4 uppercase nav links (About, Essays, Reading, Contact), 13px, letter-spacing 0.06em, font-weight 500, gap 48px between items.

2. **Hero (`#top`)** — full-width band, background `--sage-dark`, padding `88px 64px 96px`, `overflow:hidden`. Decorative blurred-free circle: 420×420px, `border-radius:50%`, positioned `top:-120px; right:-120px`, fill = gold at 22% opacity mixed over transparent. Inner content: max-width 1180px, 2-column grid (`1.25fr 1fr`), gap 64px, vertically centered.
   - Left column: eyebrow "Essays & Creative Nonfiction" (uppercase, 13px, letter-spacing 0.14em, gold, weight 600, margin-bottom 18px) → H1 "Mimi Veshi" (italic display font, 96px, line-height 0.98, weight 400, color = bg/cream, max-width 10ch) → tagline paragraph (22px italic, 88%-opacity cream, max-width 36ch) → supporting paragraph (17px, 70%-opacity cream, max-width 46ch).
   - Right column: photo, `aspect-ratio:4/5`, `border-radius:6px`, drop shadow `0 24px 48px` sage-tinted black at 22%, sage color-multiply overlay tint on top of the photo (`mix-blend-mode:multiply` at ~30% sage).

3. **About (`#about`)** — max-width 1180px, padding 110px 64px, 2-column grid (`0.8fr 1.2fr`), gap 64px.
   - Left: H2 "About" (italic display, 52px).
   - Right: pull-quote paragraph (italic display, 30px, line-height 1.3, sage-dark color, left border 3px solid rust, padding-left 28px, max-width 22ch): "Her essays are humorous by instinct, but they don't look away from what's underneath." Below it, two body paragraphs (18px, max-width 56ch) covering her bio: essays on growing up between two cultures, race/identity/culture and current events; lives in the Washington DC area; wife, mother, yoga teacher, aspiring guitar player.

4. **Essays & Writing (`#essays`)** — max-width 1180px, padding `0 64px 110px`. H2 "Essays & Writing" (italic display, 52px) + intro line (17px, muted). Below: 3-column grid, gap 28px, of essay cards:
   - Card style: background = page bg, `border-top: 4px solid` (alternating sage / rust / sage), `border-radius:4px`, padding 28px, subtle shadow, hover lifts `translateY(-3px)` with a stronger shadow (transition 0.2s).
   - Card contents: uppercase kicker tag (11px, colored to match the border), italic display title (26px), body copy (15px, muted).
   - Card 1 — Identity / "On being asked 'where are you really from'" / lifelong-question copy.
   - Card 2 — Motherhood / "Raising a kid who corrects my accent" / passing-down-culture copy.
   - Card 3 — Culture & Current Events / "The news cycle, from the yoga mat" / yoga-mat-and-headlines copy.

5. **What I'm Reading (`#reading`)** — max-width 1180px, padding `0 64px 110px`. H2 + intro line, same style as Essays. Below: a simple divided list (top border rule between rows, `oklch(24% 0.018 90 / 0.14)`), each row a grid `56px 1fr auto`, gap 24px, `align-items:baseline`:
   - Numeral (italic display, 28px, gold-dark) — title (italic display, 24px) + author (13px sans, muted) — right-aligned status label (12px uppercase sans).
   - Rows: 01 "Crying in H Mart" — Michelle Zauner — "Currently reading" (gold-dark label). 02 "Minor Feelings" — Cathy Park Hong — "Just finished" (muted label). 03 "The Yoga of Breath" — Richard Rosen — "On the nightstand" (muted label). Last row also has a bottom border to close the list.

6. **Contact (`#contact`)** — full-width band, background `--sage-dark`, color = bg/cream, padding 100px 64px. Inner max-width 1180px, 2-column grid, gap 64px.
   - Left: uppercase eyebrow "No spam, ever" (12px, warm/gold-ish tint) → H2 "Stay in touch" (italic display, 52px, cream) → paragraph (17px, 82%-opacity cream, max-width 44ch): "No book to sell yet, no event to promote — just new essays, sent occasionally, straight from the DC suburbs."
   - Right: simple signup form, max-width 380px, column layout, gap 16px: Name field (text input), Email field (required), Submit button.
     - Inputs: full width, padding `12px 14px`, 15px font, translucent cream fill (`oklch(97% .012 95 / 0.08)`) over translucent cream border, `border-radius:4px`, cream text.
     - Button: full width of form, padding `13px 24px`, sans-serif, weight 600, 14px, letter-spacing 0.03em, background = rust, cream text, `border-radius:4px`.
     - Behavior: on submit, prevent default and swap button label from "Sign up" to "Thank you!" (no real backend — client-side only placeholder state).

7. **Footer** — max-width 1180px, padding `32px 64px`, 12px muted sans text: "© 2026 Mimi Veshi".

## Interactions & Behavior
- Nav links are in-page anchor scrolls to each section id (`#top`, `#about`, `#essays`, `#reading`, `#contact`).
- Essay cards: hover lift + shadow (see above), 0.2s ease transition on `transform`/`box-shadow`.
- Newsletter form: client-side only. On submit, prevent page reload and toggle button text to "Thank you!". No real email capture is wired up — the target implementation should connect this to whatever email/newsletter service the project uses (Mailchimp, ConvertKit, custom API, etc.) and show a proper success/error state.
- No other JS-driven interactions (no modals, no client routing — it's a single static-feeling page).

## State Management
Minimal: only one piece of UI state, `subscribed` (boolean), toggled on newsletter form submit to change the button label. No other page state, no data fetching in the prototype.

## Design Tokens

**Colors** (defined as CSS custom properties in OKLCH; hex equivalents approximate):
- `--bg`: oklch(97% 0.012 95) — warm cream, ≈ #F4F1EC
- `--text`: oklch(24% 0.018 90) — near-black warm, ≈ #2B2622
- `--text-soft`: same as text at 68% opacity
- `--sage`: oklch(56% 0.07 150) ≈ #6E8A6E
- `--sage-dark`: oklch(36% 0.055 150) ≈ #40543F — used for the hero/contact band backgrounds
- `--sage-light`: oklch(90% 0.035 145) ≈ #DCE7DA
- `--rust`: oklch(58% 0.10 45) ≈ #B4703D
- `--rust-dark`: oklch(40% 0.09 42) ≈ #7A4A22
- `--gold`: oklch(72% 0.13 82) ≈ #D9A441
- `--gold-dark`: oklch(46% 0.10 78) ≈ #8A6420

**Typography:**
- Display/heading font: "Instrument Serif" (italic style used throughout for headings, eyebrow-adjacent display moments), regular weight 400. Loaded from Google Fonts.
- Body font: "Newsreader" serif, weights 400/500/600, italic available. Loaded from Google Fonts.
- UI/label font (nav, kickers, tags, form labels, button): "Work Sans" sans-serif, weights 400/500/600.
- Scale used: H1 96px / H2 52px / card titles 26px / reading-list titles 24px / pull-quote 30px / body 17-18px / small labels 11-13px.

**Spacing:** section horizontal padding 64px; section vertical padding ~100-110px; card padding 28px; gaps mostly 16-64px depending on context (see per-section notes above). Max content width 1180px, centered.

**Radius:** 4px (cards, inputs, buttons), 6px (hero photo).

**Shadows:** hero photo `0 24px 48px` sage-tinted black @22%; cards resting `0 6px 16px` black @8%, hover `0 14px 28px` black @14%.

## Assets
- `assets/mimi-author-photo.jpg` — the author photo used in the hero, user-supplied (real photo, not a placeholder). Displayed at `aspect-ratio:4/5`, `object-fit:cover`, with a sage color-multiply tint overlay.
- No other images/icons are used in this design.

## Files
- `Mimi Veshi Author Site.dc.html` — the full design reference (single file, all sections, inline styles).
- `assets/mimi-author-photo.jpg` — hero photo asset.
