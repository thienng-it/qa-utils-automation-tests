# [QA-TC-20260904-001] Base64 ASCII & Unicode Encode/Decode Validation

## Test Case Metadata
- **Test Case ID**: `QA-TC-20260904-001`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Executed**: `2026-09-04T09:44:00+07:00`
- **Execution Status**: `PASSED`
- **Priority**: `P0 - Critical`
- **Tier**: `Tier 2 (E2E Functional)`
- **Automation Script**: `tests/e2e/converters/base64_test.ts`
- **Fixture Matrix**: `fixtures/base64.data.ts`
- **Page Object**: `pages/Base64Page.ts`
- **Beads Task**: `bd-task-tc-001`

---

## 1. Description & Objective
Verify bidirectional Base64 transformation fidelity across ASCII, Unicode, emoji glyphs, and accented Vietnamese diacritics.

## 2. Preconditions
- User navigates to `#/base64`.

## 3. Test Steps & Data
1. Select Encode mode.
2. Fill plaintext input from `validBase64Table` into `textarea.tool-textarea`.
3. Click action button (`Encode`).
4. Read output value from `textarea.tool-output`.
5. Assert output matches `current.encoded`.
6. Select Decode mode.
7. Fill encoded text into input.
8. Click action button (`Decode`).
9. Assert output matches `current.plain`.

## 4. Expected Results
- Exact bit-for-bit round-trip accuracy for all characters.
- Clipboard copy toast feedback triggers on copy click.
