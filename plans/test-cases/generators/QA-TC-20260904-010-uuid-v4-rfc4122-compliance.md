# [QA-TC-20260904-010] UUID Generator v4 RFC 4122 Format & Uniqueness Validation

## Ticket Metadata
- **Ticket ID**: `QA-TC-20260904-010`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T08:35:00+07:00`
- **Type**: `Zephyr Test Case`
- **Epic**: [QA-EPIC-20260904-004](file:///plans/epics/QA-EPIC-20260904-004-data-driven-generators.md)
- **Test Plan**: [QA-PLAN-20260904-003](file:///plans/test-plans/QA-PLAN-20260904-003-generators-e2e-plan.md)
- **Priority**: `P0 - Blocker`
- **Status**: `AUTOMATED`
- **Labels**: `[ai-native, data-driven, generators, rfc4122, p0-smoke]`
- **Component**: [UuidPage.ts](file:///pages/UuidPage.ts)
- **Test Script**: [uuid_test.ts](file:///tests/e2e/generators/uuid_test.ts)
- **Fixture Matrix**: [uuid.data.ts](file:///fixtures/uuid.data.ts)
- **Estimated Duration**: `3.5s`

---

## 1. Description & Objective
Verify that the UUID Generator tool produces valid RFC 4122 version 4 UUIDs matching canonical pattern `^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`, supports quantity configurations, guarantees uniqueness across bulk batches (100 UUIDs), and copies to clipboard with toast notification.

## 2. Pre-Conditions
1. Application is loaded at `https://kobenguyent.github.io/kobeanqautils/#/uuid`.
2. Browser Playwright session initialized with clipboard permissions.

## 3. Test Steps & Expected Results (Zephyr Format)

| Step # | Test Step / Action | Test Data / Parameters | Expected Result |
| :---: | :--- | :--- | :--- |
| **1** | Navigate to UUID Generator route | `#/uuid` | Page header renders `UUID Generator`. Version `v4` is active. |
| **2** | Select UUID version 4 | `v4` | Version 4 selector button active. |
| **3** | Set generation quantity | `Quantity: 1` | Quantity input reflects `1`. |
| **4** | Click `Generate` button | Click action | Output area populates with 1 UUID. |
| **5** | Verify RFC 4122 v4 regex pattern | Regex: `^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$` | Output strictly matches RFC 4122 v4 pattern. |
| **6** | Click `Copy` button | Click action | Toast notification appears with text `Copied`. |
| **7** | Set quantity to 100 & Generate | `Quantity: 100` | Output area contains exactly 100 lines. |
| **8** | Assert batch uniqueness | Set size check | Exactly 100 unique UUIDs generated (0 duplicates). |

## 4. Automation Traceability & Code References
- **Page Object**: `UuidPage.ts` (`pages/UuidPage.ts`)
- **Action Methods**: `selectVersion()`, `setQuantity()`, `generate()`, `grabGeneratedUUIDs()`, `copyOutput()`
- **Test Implementation**: `tests/e2e/generators/uuid_test.ts#Scenario: UUID v4 RFC 4122 Compliance`
- **Beads Task ID**: `bd-task-tc-010`
