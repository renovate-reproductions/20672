module.exports = {
  allowPostUpgradeCommandTemplating: "true",
  allowedPostUpgradeCommands:["^echo .*"],
  branchPrefix: 'renovate/',
  username: 'renovate-repro-20672[bot]',
  gitAuthor: 'Self-hosted Renovate Bot <79356887+renovate-repro-20672[bot]@users.noreply.github.enterprise.com>',
  onboarding: false,
  platform: 'github',
  repositories: [
    'MDietz135/renovate-repro-20672'
  ],
  skipInstalls: false,
  baseBranches: ["main"],
  packageRules: [
    {
      updateTypes: ["minor", "patch", "pin", "digest"],
      automerge: false,
    }
  ],
  postUpgradeTasks: {
    commands: ["echo '{{ upgrades }}'", "echo '{{ upgrades }}' > upgrades.json"],
    fileFilters: ["upgrades.json"],
    executionMode: "update"
  }
};