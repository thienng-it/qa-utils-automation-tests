# [QA-EPIC-20260904-003] Data-Driven Converters & Formatters Automation

## Epic Metadata
- **Epic ID**: `QA-EPIC-20260904-003`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T09:45:00+07:00`
- **Type**: `Epic`
- **Priority**: `P0 - Critical`
- **Status**: `VERIFIED`
- **Labels**: `[converters, base64, json, jwt, timestamp, color, data-driven, tier-2]`
- **Lead Assignee**: Principal SDET & AI Agent
- **Target Milestone**: Release 2026.1

---

## 1. Objective & Scope
Provide automated, data-driven E2E test coverage across all converter and formatter tools in KobeanQAUtils:
- Base64 Encode & Decode (ASCII, Unicode, Emoji, Vietnamese accents, multiline).
- JSON Formatter (Prettify 2-space indentation, Minify compaction, live syntax error detection).
- JWT Debugger (HMAC SHA-256 token decoding, claim verification, dynamic expiration badge).
- Unix Timestamp Converter (Epoch boundary transformations, Leap Year, Year 2038 32-bit limit).
- Color Converter (Bidirectional Hex/RGB translation, synchronized interactive updates).

## 2. Key Deliverables
- [x] Page Objects: `Base64Page`, `JsonFormatterPage`, `JwtPage`, `TimestampPage`, `ColorPage`.
- [x] Strongly-typed DataTables: `base64.data.ts`, `json.data.ts`, `jwt.data.ts`, `timestamp.data.ts`.
- [x] Test Suites: `base64_test.ts`, `json_test.ts`, `jwt_test.ts`, `timestamp_test.ts`, `color_test.ts`.
- [x] 100% test scenario pass rate on live production application.

## 3. Child Test Plans & Test Cases
- [QA-PLAN-20260904-002](file:///plans/test-plans/QA-PLAN-20260904-002-data-driven-converters-plan.md)
- [QA-TC-20260904-001](file:///plans/test-cases/converters/QA-TC-20260904-001-base64-encode-decode.md)
- [QA-TC-20260904-004](file:///plans/test-cases/converters/QA-TC-20260904-004-json-prettify-minify.md)
- [QA-TC-20260904-006](file:///plans/test-cases/converters/QA-TC-20260904-006-jwt-decode-claims.md)
- [QA-TC-20260904-008](file:///plans/test-cases/converters/QA-TC-20260904-008-unix-timestamp-epoch.md)
- [QA-TC-20260904-009](file:///plans/test-cases/converters/QA-TC-20260904-009-color-converter-rgb-hex.md)
