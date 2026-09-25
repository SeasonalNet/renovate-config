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

  autodiscover: true,
  autodiscoverNamespaces: ["SeasonalNet"],
  autodiscoverFilter: ["SeasonalNet/*", "!SeasonalNet/renovate-config"],

  onboarding: false,
  requireConfig: "optional",

  dependencyDashboard: true,
  dependencyDashboardTitle: "Renovate Dependency Dashboard",

  branchPrefix: "renovate/",
  labels: ["dependencies"],
  assignees: ["Seasonal_Currency"],

  automerge: false,
  platformAutomerge: false,

  prHourlyLimit: 1,
  prConcurrentLimit: 2,

  semanticCommits: "enabled",
  semanticCommitType: "chore",
  semanticCommitScope: "deps",

  rebaseWhen: "behind-base-branch",
  timezone: "America/New_York",

  packageRules: [
    {
     description: "Hold major updates during Renovate bring-up",
     matchUpdateTypes: ["major"],
     dependencyDashboardApproval: true,
     addLabels: ["major", "needs-approval"],
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
