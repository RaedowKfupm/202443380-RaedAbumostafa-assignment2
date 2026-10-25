# AI-Use Report — SWE 363 Assignment 2

## Scope and provenance

The starting point was the portfolio already present in the Assignment 2 workspace. The specifically named Assignment 1 RAR archive was not found when the work began. The student clarified that the workspace contained the intended project and that documentation would be prepared collaboratively.

The original workspace version already included the portfolio layout and content, project cards with disclosures, navigation behavior, and a basic local contact form. AI-assisted Assignment 2 changes added project filters, improved form validation and accessible feedback, refined existing transition easing, clarified the form’s success presentation, and added a restrained Skills-card hover effect after the student requested it. That Skills-card effect is an extra beyond the original one-feature animation scope and should be reviewed against the rubric.

There was also earlier ChatGPT assistance with Assignment 1 code generation in the historical portfolio work. That is distinct from the Assignment 2 planning and review recorded as C02 below; this report does not attribute the Copilot implementation to ChatGPT.

For Assignment 2, the student reviewed/refined button hover CSS and proposed an Escape-key handler for the mobile navigation, then asked the Copilot assistant to review and critique those changes. The assistant applied the CSS changes first, checked the JavaScript proposal, and applied that handler only after the student approved it. The button CSS adds a mobile-toggle hover state, a small lift and shadow for buttons, clearer primary/secondary/contact hover colors, and a white hover surface and shadow for project filters. The JavaScript handler closes the open mobile menu on Escape, updates `aria-expanded`, and restores focus to the navigation toggle. The student also asked for a descriptive commit message; the assistant did not create a commit in that exchange.

## Tools used

- **Copilot implementation workflow:** Copilot SDK assistant in VS Code. The specific underlying model was not exposed in the recorded session and is not claimed here. Its Assignment 2 implementation contributions are recorded as C01.
- **ChatGPT planning and review workflow:** ChatGPT / Codex, GPT 6.1 sol (model identification supplied by the student). Its Assignment 2 requirements analysis, implementation handoff prompt, independent source/evidence audit, and disclosure drafting are recorded separately as C02. It did not edit the Assignment 2 HTML, CSS, or JavaScript.
- **Development tools (not AI models):** VS Code workspace inspection/diagnostics, PowerShell, Git, and the integrated browser preview with Playwright-driven interaction and computed-style checks.
- **External guidance retrieval:** C01's attempts to fetch the assignment and AI-use guideline pages were denied. In the separate C02 workflow, ChatGPT reports reading the assignment instructions and linked AI-use guidelines. The student clarified that the current workspace was the intended starting project.

## Usage log

| ID | Tool (model) | Date | Purpose | Files affected | What changed and how it was verified |
|---|---|---|---|---|---|
| C01 | Copilot SDK assistant in VS Code (underlying model not exposed) | 2026-10-25 | Assignment implementation, documentation, and student-requested review of styling and navigation behavior | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, and `docs/` | Copilot helped implement project filtering and accessible local form validation. The student edited/refined the button hover CSS and JavaScript Escape-key navigation handler, then asked the assistant to review and critique them. The assistant applied CSS first as requested, checked the JavaScript behavior, and applied that handler only after the student approved it. Browser interaction verified Escape closes the open mobile menu, resets `aria-expanded`, and returns focus to the toggle. Editor diagnostics and `git diff --check` passed. The updated CSS declarations were statically reviewed and passed editor diagnostics; comprehensive visual/cross-browser checking was not performed. The available user-facing history is not a complete, unedited export. |
| C02 | ChatGPT / Codex — GPT 6.1 sol (model identification supplied by the student) | 2026-10-25 | Assignment requirements analysis, planning-only handoff prompt, implementation review, evidence audit, and disclosure drafting | ChatGPT did not directly modify the Assignment 2 HTML, CSS, or JavaScript. Its direct outputs include the handoff prompt, audit response, disclosure prompt, collaboration-history addendum, and this documentation integration. | ChatGPT reviewed assignment requirements and existing work, proposed a one-feature-per-category plan, prepared the handoff prompt for a separate implementation phase, and later audited source, documentation, Git history, and evidence. The audit checked JavaScript syntax, local asset paths, internal anchors, required files, and filter/form logic with a mocked DOM. It did not perform full-browser rendering, visual-accessibility, or cross-browser testing. |

### Evidence identifiers

- `C01-session-export.json` is a platform session record, but its recorded version was truncated and its final turn was in progress. It is not a complete Copilot conversation export and must be replaced or supplemented with a complete record that meets the course’s evidence rules.
- `C02_Raed_ChatGPT_assignment2-conversation.md` is the supplied assistant-prepared transcript of visible ChatGPT messages. It is not a native platform export and does not include tool-call records or all later discussion. At the student’s request, Message 01 was revised to focus on planning only; the original wording is retained in Appendix A. Treat it as an edited transcript, not as complete unedited evidence.
- The supplied ChatGPT artifact supplement contains A05 (handoff prompt), A06 (audit response), A07 (disclosure-integration prompt), and A08 (retrospective collaboration-history addendum). These are AI-produced text artifacts, not conversation exports. Their summaries do not replace the full conversations.
- `A01-starting-workspace/` is a reference snapshot of the initially tracked workspace version. It is a baseline, not an AI-generated artifact.
- `A02-project-filtering/` and `A03-form-feedback/` identify implementation-stage snapshots. `A09-final-workspace/` in the updated evidence ZIP contains the current README, page, CSS, JavaScript, and reports without Git metadata.
- The current local Git history includes commits for the CSS hover update (`fb67ecd`) and Escape-key handler (`093f61d`), authored by the student account. Their messages do not include an AI-assistance trailer. The C02 audit had also flagged missing AI acknowledgments in earlier implementation commit messages. The student should confirm the instructor’s required commit attribution format and resolve this before final submission without misrepresenting authorship.

Browser preview, Git, editor diagnostics, and the mocked-DOM check are development/verification tools, not AI models. The C02 model name GPT 6.1 sol was supplied by the student.

## Benefits and challenges

AI assistance helped explore the existing HTML/CSS/JavaScript, implement focused interactions, explain accessibility states, and check behavior in the browser. Challenges included inaccessible linked guideline pages, the missing named RAR archive, and distinguishing a successful local validation state from a delivered message. The implementation therefore preserves the explicit no-send/no-store limitation, and the archive discrepancy is recorded rather than hidden.

## Human review and learning outcomes

The student specified the scope, clarified which workspace should be treated as the source, approved the project-filtering and contact-form steps, requested clearer success feedback, and separately requested a restrained hover treatment in Skills & Expertise. In a later C01 exchange, the student requested review of the button hover CSS, asked to apply CSS before touching JavaScript, then asked for a check of the Escape-key handler and approved its application. The student also requested a descriptive commit message. C02's planning and audit recommendations are separate from the Copilot implementation. The student should review the final code and documentation and ensure the evidence package matches the confirmed declaration.

### Selected discussion record

The following excerpts summarize the documented collaboration and help distinguish the two conversations:

- **C02, Message 01 (edited planning-only wording):** the student asks for an inspection, feature/location proposal, accessibility and acceptance-test considerations, and a handoff prompt, with implementation reserved for a separate approved phase. The original wording is preserved in Appendix A of the supplied transcript.
- **C02, Messages 05–08:** the student asks whether the requirements, especially the AI report, declaration, and evidence, are covered; ChatGPT audits the submitted materials and identifies export/documentation/commit-history gaps.
- **C01, CSS/JavaScript review exchange:** the student asks, “first apply the css and take permission for the js after.” The assistant reviews the button CSS and applies it first. The student then says “run a check” for the JavaScript draft. The assistant verifies that Escape closes the open mobile menu, updates `aria-expanded`, and returns focus to the toggle; it waits for explicit approval before applying the handler.
- **C01, follow-up:** the student asks for a descriptive commit message; no commit is made in this exchange.
- The later local Git history contains separate CSS and JavaScript commits (`fb67ecd`, `093f61d`). This report records the observed history; it does not claim the Copilot assistant created those commits.

These excerpts are a navigation aid, not a substitute for the original conversation records.

The work provides an opportunity to explain how data attributes and event handlers drive filtering; how trimming, validation, and errors are handled without transmitting form values; how `aria-describedby`, `aria-invalid`, focus, and a live region improve feedback; and how CSS transitions and reduced-motion preferences affect interaction.

## Verification and limitations

Recorded checks include browser interactions for each filter, invalid and valid form submissions, focus/error/status behavior, the success panel, reduced-motion/computed transition styles, and Escape dismissal/focus return for the mobile navigation. The latest button CSS was checked in the stylesheet and passed editor diagnostics; no comprehensive visual or cross-browser test was recorded for that last CSS revision. Editor diagnostics and `git diff --check` reported no errors. No standalone automated test suite was run.

This report is AI-assisted and is **not a declaration that the evidence is complete**. The supplied C02 transcript is an edited user-facing transcript, not a complete native export. C01’s available platform record is truncated and its final turn was in progress. The A05–A08 artifacts are available, but neither conversation record is a complete, unedited conversation. The student must obtain or prepare acceptable complete records, preserve the C02 handoff/audit artifacts, and verify the final evidence package before submission. No AI-produced artifact is represented as an unedited student-authored artifact.

## Declaration for the student to review

Student: **Raed Abumostafa**  
Student ID: **202443380**  
Draft prepared: **25 October 2026**  
Declaration date: **25 October 2026**

Declaration statement, confirmed by the student on **25 October 2026**:
> “I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.”

The student confirmed the declaration and date. Evidence completeness remains a separate outstanding check; the declaration should only be submitted with an evidence package that satisfies the course instructions.
