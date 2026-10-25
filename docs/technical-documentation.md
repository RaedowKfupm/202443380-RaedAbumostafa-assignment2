# Technical Documentation

## Architecture

The portfolio is a static single-page site:

- `index.html` contains semantic page sections, the two project articles, their existing expandable `<details>` content, navigation, and the contact form.
- `css/styles.css` defines the warm paper, near-black, rust, and sand palette; typography; responsive layout; focus states; and transitions.
- `js/script.js` updates the footer year, controls the mobile navigation and active navigation link, initializes project filters, and validates the existing form.

There is no framework, package manager, build pipeline, backend, or external API. Images remain local under `assets/images/`.

## Project category filtering

The filter controls are inside `#projects`, between its section heading and `.project-grid`. Each existing `.project-card` has a stable `data-category`: `rf-sensing` for WiFi RF Diffusion Model and `computer-vision` for AI Video Captioning.

`initializeProjectFilters()` looks up the controls, cards, and polite live-status element. It registers a click handler for each real button and reveals the controls only after initialization succeeds. The initial state is All. On activation, the handler compares the selected filter with each card’s category, sets the card’s `hidden` property, synchronizes `aria-pressed`, and updates the displayed-card count. Card content is not rebuilt and filtering does not navigate or reload the page.

The stylesheet explicitly sets `.project-card[hidden]` and `.project-filters[hidden]` to `display: none`, so the grid card display rule cannot defeat the hidden state. With JavaScript disabled or initialization unavailable, both cards remain visible and the filter group stays hidden.

## Contact form validation and feedback

The existing `#contact-form` is reused. It contains Name, Email, and Message controls, existing per-field error elements, and the `#form-status` polite status region. On submit, JavaScript prevents native submission and validates trimmed values:

- Name: at least two non-space characters.
- Email: a simple `local-part@domain.suffix` format check.
- Message: at least ten non-space characters.

For each invalid value, the script writes a specific correction instruction as text, sets `aria-invalid`, preserves the typed value, announces that correction is needed, and focuses the first invalid control. Each control references its error element through `aria-describedby`. On input, an outdated overall status is cleared, and any existing field error is recalculated so it disappears when corrected.

When every value passes, the form shows a distinct check-mark confirmation stating that validation succeeded and that nothing was sent or stored. The fields reset only after this valid outcome. The code does not persist, log, transmit, or insert the submitted values as HTML. This is client-side validation, not message delivery or a security boundary.

## Transitions and responsive behavior

The filter buttons follow the existing `.button` interaction with restrained color, border, and position transitions. Existing button, navigation indicator, project card, and project image transitions retain their durations with smoother easing. The Skills & Expertise cards also use a simple hover lift, background, border, and shadow treatment added after a separate user request; this is beyond the original selected animation feature and can be removed if strict feature scope is required.

The existing responsive breakpoints collapse multi-column layouts for smaller screens. Project filters wrap when needed. Keyboard focus remains visible, buttons are native keyboard-operable controls, filter selection is exposed with `aria-pressed`, and updates use a polite status region. The existing `prefers-reduced-motion: reduce` rule reduces transitions and disables smooth scrolling.

## Verification performed

The following checks were performed in the integrated browser preview:

- All showed both projects; each category showed its matching card; returning to All restored both in their original order.
- The selected filter state and displayed-project count matched each filter.
- Invalid whitespace, short values, and malformed email produced correction messages; values remained; the first invalid field received focus.
- Correcting an invalid field cleared its field error and stale status.
- Valid form input displayed the honest confirmation and reset the fields.
- The success confirmation styles appeared, and the reduced-motion preference reduced transition duration.
- Computed styles confirmed the updated transition timing and easing on the existing controls and cards.

Editor diagnostics reported no errors for the changed HTML, CSS, or JavaScript, and `git diff --check` passed. These were browser and editor checks, not a separate automated test suite.

## Known limitations

- The contact form does not send or store messages.
- The email check is a lightweight client-side format check.
- Project content and assets are static.
- No live deployment URL was available or verified during this work.
- The named Assignment 1 archive was not present in the workspace when work began; the existing workspace version was used as the baseline after the student clarified that it was the intended source.
