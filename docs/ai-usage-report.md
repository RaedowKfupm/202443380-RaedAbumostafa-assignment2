# AI-Use Report — SWE 363 Assignment 2

## Scope and provenance

The starting point was the portfolio already present in the Assignment 2 workspace. The specifically named Assignment 1 RAR archive was not found when the work began. The student clarified that the workspace contained the intended project and that documentation would be prepared collaboratively.

The original workspace version already included the portfolio layout and content, project cards with disclosures, navigation behavior, and a basic local contact form. AI-assisted Assignment 2 changes added project filters, improved form validation and accessible feedback, refined existing transition easing, clarified the form’s success presentation, and added a restrained Skills-card hover effect after the student requested it. That Skills-card effect is an extra beyond the original one-feature animation scope and should be reviewed against the rubric.

There was also earlier ChatGPT assistance with Assignment 1 code generation in the historical portfolio work. That is distinct from the Assignment 2 planning and review recorded as C02 below; this report does not attribute the Copilot implementation to ChatGPT.

## Tools used

- **Copilot implementation workflow:** Copilot SDK assistant in VS Code. The specific underlying model was not exposed in the recorded session and is not claimed here. Its Assignment 2 implementation contributions are recorded as C01.
- **ChatGPT planning and review workflow:** ChatGPT / Codex, GPT 6.1 sol (model identification supplied by the student). Its Assignment 2 requirements analysis, implementation handoff prompt, independent source/evidence audit, and disclosure drafting are recorded separately as C02. It did not edit the Assignment 2 HTML, CSS, or JavaScript.
- **Development tools (not AI models):** VS Code workspace inspection/diagnostics, PowerShell, Git, and the integrated browser preview with Playwright-driven interaction and computed-style checks.
- **External guidance retrieval:** C01's attempts to fetch the assignment and AI-use guideline pages were denied. In the separate C02 workflow, ChatGPT reports reading the assignment instructions and linked AI-use guidelines. The student clarified that the current workspace was the intended starting project.

## Usage log

| ID | Tool (model) | Date | Purpose | Files affected | What changed and how it was verified |
|---|---|---|---|---|---|
| C01 | Copilot SDK assistant (underlying model not exposed) | 2026-10-25 | Assignment scope discussion, implementation, feedback iterations, and documentation drafting | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | The assistant helped implement category filtering and accessible client-side validation, refine success feedback and transitions, and prepare documentation. Browser interaction checks, computed styles, editor diagnostics, and `git diff --check` were used where recorded. The current documentation is an AI-assisted draft and still requires the student’s review. |
| C02 | ChatGPT / Codex — GPT 6.1 sol (model identification supplied by the student) | 2026-10-25 | Requirements analysis, implementation handoff prompt, source/evidence audit, and disclosure drafting | ChatGPT did not directly modify Assignment 2 source files. Its recommendations concerned `index.html`, `css/styles.css`, `js/script.js`, `README.md`, and documentation. This integration updates `docs/ai-usage-report.md`. | ChatGPT analyzed requirements, produced a detailed handoff prompt, then independently reviewed the implementation and evidence, reporting incomplete conversation exports, a pending declaration, missing ChatGPT disclosure, missing AI acknowledgments in implementation commit messages, and documentation absent from the attached Git snapshot. It checked JavaScript syntax, local asset paths, internal anchors, and required files, and exercised filtering/form-validation logic with a mocked DOM. These were not full-browser rendering, visual-accessibility, or cross-browser tests. Student implementation of its recommendations and personal verification remain pending unless independently completed. |

### Evidence identifiers

- `C01-session-export.json` is the platform session record for this conversation. It contains user and assistant turns, recorded turn states, and tool-call inputs. At the time it was packaged, its final turn was still in progress; the student must replace or supplement it with a complete record after this documentation exchange and check that it meets the course’s evidence rules.
- `C02_Raed_ChatGPT_assignment2-planning-and-audit` is the required filename stem for the complete, unedited ChatGPT conversation export. That export was not provided with this request and is **outstanding**; do not create or submit a fabricated transcript.
- The C02 evidence should also preserve the original implementation handoff prompt, the audit response, and the disclosure-integration prompt as identifiable AI-produced artifacts, each cross-referenced to C02. Those original artifacts were not supplied as separate files and remain **outstanding**. The summary in this report is not a substitute for their source conversation or original content.
- `A01-starting-workspace/` is a reference snapshot of the initially tracked workspace version. It is a baseline, not an AI-generated artifact.
- `A02-project-filtering/`, `A03-form-feedback/`, and `A04-final-workspace/` identify implementation-stage and final workspace snapshots in the separate evidence package. Each snapshot must be checked against the actual files before Blackboard submission.

Browser preview, Git, and the mocked-DOM check are development/verification tools, not AI models. No specific model version is claimed for C02.

## Benefits and challenges

AI assistance helped explore the existing HTML/CSS/JavaScript, implement focused interactions, explain accessibility states, and check behavior in the browser. Challenges included inaccessible linked guideline pages, the missing named RAR archive, and distinguishing a successful local validation state from a delivered message. The implementation therefore preserves the explicit no-send/no-store limitation, and the archive discrepancy is recorded rather than hidden.

## Human review and learning outcomes

The student specified the scope, clarified which workspace should be treated as the source, approved the project-filtering and contact-form steps, requested clearer success feedback, and separately requested a restrained hover treatment in Skills & Expertise. These directions and approvals are visible in C01. C02's planning and audit recommendations are separate from the Copilot implementation. The student must determine which recommendations to adopt, review all generated code and documentation, check the work against the instructor’s rubric, and make any necessary changes before submitting. No independent student-authored source-code edits or completed student verification of C02 recommendations are claimed here.

The work provides an opportunity to explain how data attributes and event handlers drive filtering; how trimming, validation, and errors are handled without transmitting form values; how `aria-describedby`, `aria-invalid`, focus, and a live region improve feedback; and how CSS transitions and reduced-motion preferences affect interaction.

## Verification and limitations

Recorded checks include browser interactions for each filter, invalid and valid form submissions, focus/error/status behavior, the success panel, and reduced-motion/computed transition styles. Editor diagnostics and `git diff --check` reported no errors. No standalone automated test suite was run.

This report is AI-assisted and is **not a declaration that the evidence is complete**. C01 includes the earlier local repository setup discussion as well as portfolio work. Its platform session record includes turn text and tool-call inputs but may omit tool outputs, and its final turn was in progress when the evidence archive was prepared. The C02 full export and original handoff/audit artifacts are also not present. The student must provide, compare, or replace these records using the complete unedited conversations, add any subsequent AI use, and check the evidence-package requirements before submission. Do not claim a complete, unedited evidence package until that review is done. No AI-produced artifact is represented as an unedited student-authored artifact.

## Declaration for the student to review

Student: **Raed Abumostafa**  
Student ID: **202443380**  
Draft prepared: **25 October 2026**  
Declaration date: **25 October 2026**

Declaration statement, confirmed by the student on **25 October 2026**:
> “I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.”

The student confirmed the declaration and date. The completeness of the evidence package remains a separate outstanding check; the student should ensure the attached evidence matches the declaration before submission.
