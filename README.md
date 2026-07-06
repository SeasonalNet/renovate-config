# SeasonalNet Renovate Config

Self-hosted Renovate configuration for the SeasonalNet Forgejo organization.

This repository stores the bot-side Renovate configuration used to create dependency update pull requests across selected SeasonalNet repositories.

## Operating model

- Bot account: `renovate-bot`
- Forgejo platform: `https://git.seasonalnet.org`
- Target organization: `SeasonalNet`
- Initial mode: explicit repository list
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
