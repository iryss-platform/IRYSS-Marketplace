# Branch Protection Setup

Configure these rules in your GitHub repository settings:

## Master branch protection rules

Go to: **Settings → Branches → Add branch protection rule**

- **Branch name pattern:** `master`
- [x] Require a pull request before merging
  - [x] Require approvals (1)
- [x] Require status checks to pass before merging
  - Required status checks:
    - `Lint, Format & Type Check`
    - `Build`
    - `Test`
- [x] Require branches to be up to date before merging
- [x] Do not allow bypassing the above settings

This ensures no code merges to master unless all CI checks pass.
