---
name: codeceptjs-data-driven
description: Parameterized testing using CodeceptJS DataTable, fixtures isolation, boundary value analysis, and equivalence partitioning.
---

# CodeceptJS Data-Driven Testing Skill

## Overview
Decouples scenario execution logic from test datasets using native CodeceptJS `DataTable`.

## Creating a DataTable Fixture (`fixtures/sample.data.ts`)
```typescript
import { DataTable } from 'codeceptjs';

export const credentialsTable = new DataTable(['username', 'password', 'isValid']);
credentialsTable.add(['admin@test.com', 'Secret123!', true]);
credentialsTable.add(['bad_user', 'short', false]);
```

## Consuming in Test Scenarios
```typescript
import { credentialsTable } from '../../fixtures/sample.data';

Data(credentialsTable).Scenario('Validate login matrix', ({ I, current, loginPage }) => {
    loginPage.login(current.username, current.password);
    if (current.isValid) {
        loginPage.seeSuccess();
    } else {
        loginPage.seeError();
    }
});
```
