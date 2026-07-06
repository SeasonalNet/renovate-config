module.exports = {
  platform: "forgejo",
  endpoint: "https://git.seasonalnet.org/api/v1",
  token: process.env.RENOVATE_TOKEN,

  gitAuthor: "renovate-bot <renovate-bot@seasonalnet.org>",

  enabledManagers: [
    "npm",
    "pip_requirements",
    "pep621",
    "dockerfile",
    "docker-compose",
  ],

  repositories: [
    "SeasonalNet/seasonalnet-docs",
    "SeasonalNet/seasonalnet-ddns",
    "SeasonalNet/seasonal-apid",
    "SeasonalNet/seasonal-sandboxd",
    "SeasonalNet/seasonal-backupd",
    "SeasonalNet/seasonal-astrocomd",
    "SeasonalNet/seasonal-capd",
    "SeasonalNet/seasonalnet-discord-bot",
  ],

  onboarding: false,
  requireConfig: "optional",

  dependencyDashboard: true,
  dependencyDashboardTitle: "Renovate Dependency Dashboard",

  branchPrefix: "renovate/",
  labels: ["dependencies"],
  assignees: ["Seasonal_Currency"],

  automerge: false,
  platformAutomerge: false,

  prHourlyLimit: 2,
  prConcurrentLimit: 5,

  semanticCommits: "enabled",
  semanticCommitType: "chore",
  semanticCommitScope: "deps",

  rebaseWhen: "behind-base-branch",
  timezone: "America/New_York",

  packageRules: [
    {
      matchUpdateTypes: ["major"],
      addLabels: ["major"],
    },
    {
      matchUpdateTypes: ["minor"],
      addLabels: ["minor"],
    },
    {
      matchUpdateTypes: ["patch"],
      addLabels: ["patch"],
    },
    {
      matchDatasources: ["npm"],
      addLabels: ["npm"],
    },
    {
      matchDatasources: ["pypi"],
      addLabels: ["python"],
    },
    {
      matchDatasources: ["docker"],
      addLabels: ["container"],
    },
  ],
};