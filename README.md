# SeasonalNet Renovate Config

Self-hosted Renovate configuration for the SeasonalNet Forgejo organization.

This repository stores the bot-side Renovate configuration used to create dependency update pull requests across selected SeasonalNet repositories.

## Operating model

- Bot account: `renovate-bot`
- Forgejo platform: `https://git.seasonalnet.org`
- Target organization: `SeasonalNet`
- Repository selection: autodiscover repositories in `SeasonalNet`, excluding
  this configuration repository
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
