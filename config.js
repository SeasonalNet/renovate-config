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
    "github-actions",
  ],

  extends: ["helpers:pinGitHubActionDigests"],

  autodiscover: true,
  autodiscoverNamespaces: ["SeasonalNet"],
  autodiscoverFilter: ["SeasonalNet/*", "!SeasonalNet/renovate-config"],

  onboarding: false,
  requireConfig: "optional",

  dependencyDashboard: true,
  dependencyDashboardTitle: "Renovate Dependency Dashboard",
  osvVulnerabilityAlerts: true,

  branchPrefix: "renovate/",
  labels: ["dependencies"],
  assignees: ["Seasonal_Currency"],

  automerge: false,
  platformAutomerge: false,

  prHourlyLimit: 1,
  prConcurrentLimit: 2,
  internalChecksFilter: "strict",

  semanticCommits: "enabled",
  semanticCommitType: "chore",
  semanticCommitScope: "deps",

  rebaseWhen: "behind-base-branch",
  timezone: "America/New_York",

  packageRules: [
    {
      description: "Wait for npm releases to clear pnpm's release-age checks",
      matchManagers: ["npm"],
      matchDatasources: ["npm"],
      minimumReleaseAge: "2 days",
      minimumReleaseAgeBehaviour: "timestamp-required",
    },
    {
      description: "Keep pinned pnpm package-manager versions under repository control",
      matchManagers: ["npm"],
      matchDepTypes: ["packageManager"],
      matchDepNames: ["pnpm"],
      enabled: false,
    },
    {
     description: "Do not automatically do major version bumps",
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
