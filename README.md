# SeasonalNet Renovate Config

Self-hosted Renovate configuration for the SeasonalNet Forgejo organization.

This repository stores the bot-side Renovate configuration used to create dependency update pull requests across selected SeasonalNet repositories.

## Operating model

- Bot account: `renovate-bot`
- Forgejo platform: `https://git.seasonalnet.org`
- Target organization: `SeasonalNet`
- Repository selection: autodiscover repositories in `SeasonalNet`, excluding
  this configuration repository
- npm dependency updates: wait 48 hours after publication, with strict
  filtering while an update is pending
- pnpm package-manager version: pinned by each repository, not Renovate
- Forgejo Actions: update dependencies and pin GitHub-hosted action references
  to digests
- OSV vulnerability fix PRs: enabled as an experimental trial for direct
  dependencies
- Automerge: disabled (for now)
- Package/release/deploy permissions: not granted

## Secrets

Do not commit tokens.

Runtime requires:

```sh
RENOVATE_TOKEN=<renovate-bot Forgejo PAT>
```

The bot token needs:

- repository read/write issue
- read/write user read, and organization read permissions.

Add package read permission if Renovate needs to inspect Forgejo packages.

Renovate discovers repositories in the `SeasonalNet` organization when the bot
has pull and push access and pull requests are enabled. The filter excludes
`SeasonalNet/renovate-config` so the bot does not update its own configuration.

For npm dependencies, Renovate applies a two-day release-age check. This covers
pnpm's one-day release-age check and allows another day for companion packages
published later. Strict internal-check filtering prevents updates from using
versions that have not cleared the wait; release timestamps are required.
Renovate does not update pnpm versions declared in a `packageManager` field, so
each repository controls the exact Corepack/pnpm version it uses.

Renovate also scans `.forgejo/workflows` for dependencies managed by the
GitHub Actions manager and pins GitHub-hosted actions to immutable digests.
OSV-based vulnerability fix PRs are enabled experimentally; coverage is
limited to direct dependencies.
