# [QA-PLAN-20260904-004] Navigation, Search & Specialized Interactive Flows Test Plan

## Plan Metadata
- **Plan ID**: `QA-PLAN-20260904-004`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T09:45:00+07:00`
- **Parent Epic**: `QA-EPIC-20260904-005`
- **Type**: `Test Plan`
- **Status**: `ACTIVE / PASSING`
- **Execution Target**: Live Production (`https://kobenguyent.github.io/kobeanqautils/`)

---

## 1. Test Strategy
Ensure intuitive usability, seamless discovery, and reliable interactive states across navigation portals, search indexes, and specialized learning modules.

## 2. Test Scope & Coverage
- **Homepage & Portals**: Brand navigation, primary CTA "Explore All Tools", quote card random shuffle, navbar category dropdowns.
- **Search Autocomplete**: `#navbar-search` dynamic dropdown results and one-click routing to UUID, Base64, JSON, and JWT tools.
- **Theme Cycling**: Multi-theme toggling (`💫`) across dark, light, and dim modes.
- **ISTQB CTFL v4 Exam Portal**: Practice exam portal loading, question rendering, and score engine initialization.

## 3. Automation Assets
- Suites:
  - `tests/home_test.ts` (7 scenarios)
  - `tests/discovery/search_index_test.ts` (4 scenarios)
  - `tests/e2e/specialized/ctfl_exam_test.ts` (1 scenario)
- Page Objects: `HomePage.ts`, `NavBar.ts`, `ExplorePage.ts`
