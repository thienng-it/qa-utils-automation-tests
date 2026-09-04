# KobeanQAUtils Test Management & Taxonomy Guide

## Overview
This directory (`plans/`) provides an **In-Repository JIRA and Zephyr-compatible Test Management System** for the KobeanQAUtils automation project. It serves as the single source of truth for all testing campaigns, epics, test cases, and execution cycles.

## Directory Structure

```
plans/
├── README.md                                # This management and taxonomy guide
├── ZEPHYR_TRACEABILITY_MATRIX.md            # Living Requirements <-> Tests <-> Code Matrix
├── epics/                                   # High-level Epics (JIRA Epic equivalent)
├── test-plans/                              # Test Plans (JIRA / Zephyr Test Plan equivalent)
├── test-cases/                              # Granular Zephyr Test Cases
│   ├── converters/                          # Base64, JSON, JWT, Timestamp, Color test cases
│   ├── generators/                          # UUID, Hash, Password, OTP test cases
│   ├── discovery/                           # 64-Tool Crawler & Global Search test cases
│   ├── navigation/                          # Home, Navbar, QA Palace test cases
│   ├── specialized/                         # CTFL Exam, Kanban, Checklists test cases
│   └── non-functional/                      # Accessibility, Performance, Stress test cases
└── test-cycles/                             # Test Execution Cycles (Zephyr Test Cycle equivalent)
```

## Standardized Ticket Naming Convention

All ticket files MUST follow this exact naming format:

```
[PROJECT]-[TYPE]-[YYYYMMDD]-[SEQ]-[slug].md
```

- **`PROJECT`**: `QA`
- **`TYPE`**:
  - `EPIC`: High-level thematic milestone
  - `PLAN`: Formal Test Plan defining scope and strategy
  - `TC`: Granular Zephyr Test Case with step-by-step matrix
  - `CYCLE`: Specific execution cycle / test run log
- **`YYYYMMDD`**: Creation date in ISO 8601 calendar format (e.g. `20260904`)
- **`SEQ`**: 3-digit zero-padded sequence number (`001`, `002`, ..., `999`)
- **`slug`**: Kebab-case descriptive title (e.g. `base64-ascii-encode-decode`)

### Example:
`QA-TC-20260904-001-base64-ascii-encode-decode.md`

## Standard Ticket Metadata Header

Every ticket must begin with the standard YAML/Markdown metadata block:

```markdown
# [TICKET-ID] Title

## Ticket Metadata
- **Ticket ID**: `QA-TC-YYYYMMDD-XXX`
- **Created Datetime**: `YYYY-MM-DDTHH:mm:ssZ`
- **Last Updated**: `YYYY-MM-DDTHH:mm:ssZ`
- **Type**: `Zephyr Test Case` | `Test Plan` | `Epic` | `Test Cycle`
- **Epic**: [Link to Epic]
- **Test Plan**: [Link to Test Plan]
- **Priority**: `P0 - Blocker` | `P1 - Critical` | `P2 - Major` | `P3 - Minor`
- **Status**: `DRAFT` | `READY` | `AUTOMATED` | `PASSED` | `FAILED` | `DEPRECATED`
- **Labels**: `[ai-native, data-driven, converters, happy-path, p0-smoke]`
- **Component**: [Link to Page Object]
- **Test Script**: [Link to Test File]
- **Fixture Matrix**: [Link to Fixture File]
- **Estimated Duration**: `Xs`
```

## Controlled Labels Taxonomy

Every ticket must declare at least three labels across the following dimensions:

| Dimension | Permitted Values | Definition |
| :--- | :--- | :--- |
| **Architecture** | `ai-native`, `data-driven`, `pom`, `mcp` | Core architectural paradigm |
| **Tier** | `tier-1-crawler`, `tier-2-e2e`, `tier-3-specialized`, `tier-4-non-functional` | Test tier in quality pyramid |
| **Priority** | `p0-smoke`, `p1-critical`, `p2-major`, `p3-minor` | Gating severity |
| **Functional Area** | `converters`, `generators`, `navigation`, `api-client`, `ai-tools`, `checklists`, `certification` | Application area |
| **Test Nature** | `happy-path`, `negative-test`, `boundary-corner`, `accessibility`, `performance`, `stress` | Scenario risk category |

## Bidirectional Beads (`bd`) Integration

To enable AI agents and terminal users to track tickets from the command line:
- Each Epic is registered as an epic in Beads: `bd task add "QA-EPIC-..."`
- Each Test Case is registered as a task in Beads: `bd task add "QA-TC-..."`
- Status updates in tickets are reflected via `bd task done` or `bd task block`
