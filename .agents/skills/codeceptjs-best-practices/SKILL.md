---
name: codeceptjs-best-practices
description: Flakiness elimination, locator resilience, async/await guidelines, and performance practices in CodeceptJS.
---

# CodeceptJS Best Practices Skill

## Golden Rules
1. **Never use arbitrary `I.wait(seconds)`**: Always wait for specific element visibility, text presence, or URL hash changes.
2. **Handle Single Page Application (SPA) Routing**: In hash-based SPAs (`#/route`), verify `window.location.hash` changes.
3. **Assert Visible States**: Check that interactive elements are enabled before clicking.
4. **Isolate Test State**: Clean up cookies and local storage where necessary to guarantee test idempotency.
5. **Enrich Diagnostics**: Capture screenshots and video on failure, and log unhandled console errors.
