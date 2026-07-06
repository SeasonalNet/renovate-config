
# `AGENTS.md`

## Agent Notes

This repository controls self-hosted Renovate behavior for SeasonalNet.

Rules:

- Never commit real Forgejo tokens, PATs, npm tokens, registry credentials, or `.env` files.
- Keep Renovate initially conservative.
- Do not enable automerge until CI and branch protection are stable across the target repos.
- Do not grant Renovate release, package publishing, deployment, or admin privileges.
- Prefer explicit repository lists during bring-up.
- When enabling autodiscovery, filter to `SeasonalNet/*` and exclude this config repo unless intentionally managed.
- Treat `seasonalnet-web` carefully because some lint debt is intentionally reported as non-blocking in the current CI baseline.
