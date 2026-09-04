# [QA-TC-20260904-001] Base64 ASCII String Encode and Decode Functional Verification

## Ticket Metadata
- **Ticket ID**: `QA-TC-20260904-001`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T08:35:00+07:00`
- **Type**: `Zephyr Test Case`
- **Epic**: [QA-EPIC-20260904-003](file:///plans/epics/QA-EPIC-20260904-003-data-driven-converters.md)
- **Test Plan**: [QA-PLAN-20260904-002](file:///plans/test-plans/QA-PLAN-20260904-002-converters-e2e-plan.md)
- **Priority**: `P0 - Blocker`
- **Status**: `AUTOMATED`
- **Labels**: `[ai-native, data-driven, converters, happy-path, p0-smoke]`
- **Component**: [Base64Page.ts](file:///pages/Base64Page.ts)
- **Test Script**: [base64_test.ts](file:///tests/e2e/converters/base64_test.ts)
- **Fixture Matrix**: [base64.data.ts](file:///fixtures/base64.data.ts)
- **Estimated Duration**: `3.0s`

---

## 1. Description & Objective
Verify that the Base64 Encode / Decode tool accurately encodes standard ASCII strings into Base64 format and decodes Base64 encoded strings back to the original plaintext without corruption or character loss.

## 2. Pre-Conditions
1. Application is accessible at `https://kobenguyent.github.io/kobeanqautils/#/base64`.
2. Browser Playwright session initialized with clipboard permissions.

## 3. Test Steps & Expected Results (Zephyr Format)

| Step # | Test Step / Action | Test Data / Parameters | Expected Result |
| :---: | :--- | :--- | :--- |
| **1** | Open Base64 tool route | `#/base64` | Page header displays `Base64 Encode / Decode`. Encode mode is active. |
| **2** | Enter plain text into input textarea | `Hello, QA World!` | Input textarea contains entered text. |
| **3** | Click `Encode` action button | Action click | Output textarea populates with `SGVsbG8sIFFBIFdvcmxkIQ==`. |
| **4** | Click `Copy` button | Copy action | Toast notification appears displaying `Copied`. |
| **5** | Switch to `Decode` mode | Tab switch | Decode mode is active. Input and output areas reset or invert. |
| **6** | Enter Base64 string into input textarea| `SGVsbG8sIFFBIFdvcmxkIQ==` | Input contains encoded string. |
| **7** | Click `Decode` action button | Action click | Output textarea populates with `Hello, QA World!`. |

## 4. Automation Traceability & Code References
- **Page Object**: `Base64Page.ts` (`pages/Base64Page.ts`)
- **Action Methods**: `enterInput()`, `switchToEncode()`, `switchToDecode()`, `process()`, `grabOutput()`, `copyOutput()`
- **Test Implementation**: `tests/e2e/converters/base64_test.ts#Scenario: Base64 Encode & Decode Standard ASCII`
- **Beads Task ID**: `bd-task-tc-001`
