# [QA-PLAN-20260904-002] Data-Driven Converters & Formatters Test Plan

## Plan Metadata
- **Plan ID**: `QA-PLAN-20260904-002`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T09:45:00+07:00`
- **Parent Epic**: `QA-EPIC-20260904-003`
- **Type**: `Test Plan`
- **Status**: `ACTIVE / PASSING`
- **Execution Target**: Live Production (`https://kobenguyent.github.io/kobeanqautils/`)

---

## 1. Test Strategy
Validate data transformation accuracy, edge case resilience, multiline handling, and input error detection across all converter tools in KobeanQAUtils using strongly-typed CodeceptJS `dataTable` fixtures.

## 2. Test Scope & Coverage
- **Base64**: ASCII text, CJK Unicode strings, Emojis, Vietnamese diacritics, multiline payloads.
- **JSON Formatter**: Valid 2-space Prettify formatting, Minify compaction, reactive error state on malformed syntax.
- **JWT Debugger**: Valid HMAC SHA-256 tokens, claims verification (`sub`, `name`, `iat`), expired timestamp detection (`exp`).
- **Timestamp Converter**: Epoch zero (1970), Y2K boundary (2000), Leap Day (2024), 32-bit integer limit (2038).
- **Color Converter**: HEX <-> RGB synchronous translation (`#00ff00` -> `R: 0, G: 255, B: 0`).

## 3. Automation Assets
- Suites:
  - `tests/e2e/converters/base64_test.ts` (7 scenarios)
  - `tests/e2e/converters/json_test.ts` (3 scenarios)
  - `tests/e2e/converters/jwt_test.ts` (3 scenarios)
  - `tests/e2e/converters/timestamp_test.ts` (5 scenarios)
  - `tests/e2e/converters/color_test.ts` (1 scenario)
- Page Objects: `Base64Page`, `JsonFormatterPage`, `JwtPage`, `TimestampPage`, `ColorPage`
- Fixtures: `base64.data.ts`, `json.data.ts`, `jwt.data.ts`, `timestamp.data.ts`
