# Daily Incremental Improvements

This checklist is designed for tiny, low-risk, daily improvements that preserve stability and avoid regressions.

## Daily Quality Gate (Run Every Day)

1. Keep changes scoped to one micro-improvement.
2. Verify no editor errors.
3. Test desktop and mobile quickly.
4. Smoke test search, category filter, load more, theme toggle, and My Tools add/edit/delete.
5. Roll back only the same-day change if any regression appears.

## 14-Day Micro-Improvement Plan

### Day 1: Footer Consistency
- Task: Standardize copyright year across all pages.
- Done criteria: All pages show the same year.
- Risk level: Very low.

### Day 2: Tool Count Message Consistency
- Task: Align hero copy and metadata tool-count language (avoid mixed 350+/400+/100+ messaging).
- Done criteria: One consistent count message across UI and SEO text.
- Risk level: Low.

### Day 3: Footer Link Reliability
- Task: Replace placeholder Privacy/Terms links (`#`) with real pages or hide temporarily.
- Done criteria: No dead legal links in footers.
- Risk level: Low.

### Day 4: Search Clear Button
- Task: Add a clear control to the main search input.
- Done criteria: Users can clear search with one click and results reset.
- Risk level: Low.

### Day 5: Search Keyboard Shortcut
- Task: Add `/` shortcut to focus search input.
- Done criteria: Shortcut works outside form fields and does not interfere with typing.
- Risk level: Low.

### Day 6: Persist Filters
- Task: Save and restore selected category and sort choice via `localStorage`.
- Done criteria: Selection restores on reload and matches visual state.
- Risk level: Low.

### Day 7: Accessible Result Announcements
- Task: Ensure results counter is announced with `aria-live="polite"`.
- Done criteria: Search/filter changes are announced by screen readers.
- Risk level: Very low.

### Day 8: Empty State Recovery
- Task: Add `Reset filters` action in empty state.
- Done criteria: One click returns to visible results.
- Risk level: Low.

### Day 9: Replace Alert Popups in My Tools
- Task: Swap `alert()` validation for inline error/status messages.
- Done criteria: Validation feedback appears inline; no blocking popups.
- Risk level: Low.

### Day 10: Normalize Custom Tool URLs
- Task: Auto-prepend `https://` when users enter bare domains.
- Done criteria: Saved custom links open reliably.
- Risk level: Low.

### Day 11: Duplicate URL Warning
- Task: Add non-blocking warning for duplicate custom tool URLs.
- Done criteria: Duplicate warning appears while still allowing intentional save.
- Risk level: Low.

### Day 12: First-Paint Skeleton for Tool Grid
- Task: Show lightweight skeleton cards before first batch render.
- Done criteria: Skeleton appears briefly and disappears cleanly after render.
- Risk level: Medium-low.

### Day 13: Keyboard Focus Visibility
- Task: Improve focus styles for pills, view buttons, and key actions.
- Done criteria: Clear visible focus ring when tabbing.
- Risk level: Very low.

### Day 14: Post-Change Test Notes
- Task: Add a short "what changed + what tested" section in README.
- Done criteria: New contributors can follow a stable daily improvement workflow.
- Risk level: Very low.

## Optional Tracking Template

Use this template for each day:

- Date:
- Change shipped:
- Files touched:
- Manual checks passed:
- Issues found:
- Rollback needed: Yes/No
