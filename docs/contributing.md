# Contributing

## PR workflow

### Maintainers

1. Create a pull request with a title matching the conventional commits convention.
2. Wait for all required checks to pass.
3. If you got a failing Percy check, it's okay as long as your PR was supposed to affect UI. Go to Percy's dashboard and review your visual changes.
4. Assign PR for one (or a few) of the maintainers.
5. Your PR is ready to merge when you have at least one approval and no unresolved threads.
6. Update the date in the changelog to be the current one.
7. Wait for checks to pass again and merge PR.

### Outside contributors

In progress...

## Versioning and changelog

As this project is used in a fork-based way, each merge to the `main` branch should contain the following:

- a version bump in `package.json`,
- a new entry in the `CHANGELOG.md`.

For the `CHANGELOG.md`, each update should look like follows:

```md
## [<version>] - <date>

**Related issue:** <issue-link>

### <affected>

<description>
```

### Semantic versioning (\<version>)

Helps users to determine the changes made between their fork version and the recent version.

- Patch change (0.0.x) — bug fixes, refactors, docs, and dependency updates.
- Minor change (0.x.0) — features.
- Major change (x.0.0) — not used until we release a stable project version (1.0.0).

### Change date (\<date>)

Date when changes were merged written in YYYY-MM-DD format.

### Related issue (\<issue-link>)

If the changes are related to a particular issue, provide its URL.

### Affected components (\<affected>)

Determines what parts of the project were affected by changes.

- Docs — documentation updates.
- Dependencies — dependency updates.
- Workflow — changes in the development workflow.
- Web — changes related to the web version of the resume.
- Pdf — changes related to the pdf version of the resume.
- Schema — some optional schema properties were added.
- Schema (breaking) — some required schema properties were added, some properties were renamed/removed, data structure changed.

### Description

A short description of the changes you made. If your changes require some actions on project forks, remember to describe them.
