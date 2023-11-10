# Status Report 1

## Accomplishments
1. Daksh (dmehta4)
  * Set up the github runner for the repo.
  * Configure branch protection rules.
  * Created workflow to run ESLint every time a commit is made to the "dev" branch.
  * [Link to the commit](https://github.ncsu.edu/dmehta4/devops-proposal/commit/9db6e473d4623b2c037b2dd0d3ed5f12ee643860)

2. Ashvin
  * Created image building and publishing the image to DockerHub workflow.
  * Ansible scripts to setup INTEG environment and deploy the application.
  * [Link to the commit](https://github.ncsu.edu/dmehta4/devops-proposal/commit/e0546241a855a5115100bb4c98c6abc3e2596a58)

3. Rohan
  * Setup GitHub Workflow to run unit test cases when:
        - Commit is made to the "dev" branch
        - PR is opened/reopened
  * [Link to the commit](https://github.ncsu.edu/dmehta4/devops-proposal/commit/7ea32c9f160ef1aef80fdcd3d7159b304fe2d119)

## Next Steps

1. Write test cases to check for cross site scripting vulnerabilities and an ansible playbook for security patches for environments - Daksh
2. Setup PROD environment and adding addtional checks to ensure only valid images are being deployed on PROD - Ashvin
3. Add Code Coverage representation to the repo - Rohan

## Retrospective for the sprint
1. What Worked<br>
  * Setting up the runner, branch protection and linting the code.
  * Setting up the INTEG environment
  * Building unique Docker Image of the application through GitHub Actions
  * Deploying the application on INTEG environment
  * Discussing and dividing tasks among ourselves for smooth contribution and progress through the project.
  * Clarifying doubts from teammates before Googling.
  * Creating a separate test branch to verify the test cases workflow is triggered on PR
2. What didn't work<br>
  * Setting up the runner, branch protection and linting the code.
  * Logging into DockerHub via GitHub Actions posed a considerable challenge.
3. What we are going to do differently
  * Meeting more often outside class, rather than on Google Meet
