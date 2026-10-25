# Raed Abumostafa — SWE 363 Assignment 2

A responsive, single-page portfolio extended for KFUPM SWE 363 Assignment 2. The original portfolio content and visual direction are retained, with project category filtering, more accessible client-side contact-form validation, and keyboard dismissal of the mobile navigation.

## Run locally

No package installation or build step is needed. Open `index.html` in a browser, or start a local static server from the project directory:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Assignment feature mapping

| Assignment category | Selected feature | Implementation |
|---|---|---|
| Dynamic Content | Project category filtering | Filter the two existing project cards by All, RF Sensing, or Computer Vision. |
| Data Handling | Validated contact form with confirmation | Validate trimmed input locally, provide correction feedback, and confirm validation without sending or storing data. |
| Animation and Transitions | Button hover transitions | Refine hover treatments for the existing buttons and apply a matching treatment to project filter buttons. |
| Error Handling and User Feedback | Accessible contact-form validation feedback | Associate field errors with controls, identify invalid fields, focus the first invalid field, and announce the result. |

The Skills & Expertise cards also have a restrained hover treatment, added after a separate request. This is an additional animation beyond the original one-feature scope; remove it if strict adherence to that scope is required.

## What changed and what was retained

The starting workspace already had the editorial portfolio layout and palette, the hero and profile image, About / Projects / Skills / Contact sections, two project cards and their expandable details, responsive navigation, active-section indication, and a local contact form with basic validation.

Assignment 2 adds category filters to the existing project cards, improves the existing form’s validation and accessible feedback, and lets keyboard users close the mobile menu with Escape. Existing project content and images, navigation, disclosures, layout, and form disclosure are retained. Existing transitions remain; their easing and button hover feedback were refined.

The named Assignment 1 archive was not present in the workspace when work began. The implementation and comparison above therefore use the portfolio already present in this workspace as the starting version.

On mobile, open the navigation using its menu button. Press Escape to close it and return focus to that button.

## Using the interactions

### Project filters

In **Projects**, choose **All**, **RF Sensing**, or **Computer Vision**. The matching existing cards are shown immediately without reloading. The selected button state and a short project count are announced to assistive technology. If JavaScript is unavailable, the controls remain hidden and both cards stay visible.

### Contact form

Enter a name of at least two non-space characters, a valid email address, and a message of at least ten non-space characters, then choose **Validate message**. Invalid fields show correction instructions and keep their values. When all fields are valid, the form confirms that validation succeeded and clears the fields.

**This is a demonstration form. It does not send, store, or log entered information.** A successful confirmation means only that the browser-side checks passed.

## Technology and limitations

- Semantic HTML, CSS, and vanilla JavaScript; no external runtime dependencies.
- The portfolio content and project cards are static.
- The contact form has no backend and does not deliver messages.
- No live deployment URL has been verified.

## AI-use summary

Copilot SDK assistance in VS Code supported implementation and review; ChatGPT/Codex supported Assignment 2 planning and an independent evidence review. The student directed the scope and requested review of button CSS and the Escape-key handler. The student confirmed the declaration dated 25 October 2026; the AI report records evidence limitations that still need resolution before submission. See the [AI-use report](docs/ai-usage-report.md) and [technical documentation](docs/technical-documentation.md).

## Project files

- [`index.html`](index.html) — page structure and content
- [`css/styles.css`](css/styles.css) — theme, layout, responsive rules, and interaction states
- [`js/script.js`](js/script.js) — navigation, project filters, and form validation
- [`docs/technical-documentation.md`](docs/technical-documentation.md) — implementation and verification notes
- [`docs/ai-usage-report.md`](docs/ai-usage-report.md) — AI-use record and declaration for review
