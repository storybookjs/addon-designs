# Agent Instructions for addon-designs

Keep this file, `AGENTS.md`, up to date when the repo's release workflow or contributor guidance changes.

This file is the canonical instruction source for coding agents. `CLAUDE.md` points here instead of duplicating instructions.

## Release Process

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

```bash
pnpm changeset   # Create a changeset for your changes
pnpm release     # Publish the add-on package (CI handles this automatically)
```

**Before committing, always run the format script to avoid CI failures:**

```bash
pnpm fmt
```

### Creating Changesets (MANDATORY for user-facing changes)

When making changes that affect users (bug fixes, features, breaking changes, dependency updates), you **MUST** create a changeset file.

1. Create a new `.md` file in the `.changeset/` directory
2. Use the naming convention `<random-word>-<random-word>-<random-word>.md`
3. Format it like this:

```markdown
---
"@storybook/addon-designs": patch
---

Short description of what changed.
```

Use `patch` for fixes and non-breaking maintenance changes, `minor` for new backward-compatible features, and `major` for breaking changes.
