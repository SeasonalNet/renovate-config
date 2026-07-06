module.exports = {
  platform: "forgejo",
  endpoint: "https://git.seasonalnet.org/api/v1",
  token: process.env.RENOVATE_TOKEN,

  gitAuthor: "renovate-bot <renovate-bot@seasonalnet.org>",

  repositories: [
    "SeasonalNet/seasonalnet-docs",
    "SeasonalNet/seasonalnet-ddns",
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