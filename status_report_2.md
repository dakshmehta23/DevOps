# Status Report 2

## Additional Project Scope
1. Create test cases that check for security vulnerabilities.
2. Implement feature flags
3. Write Ansible Playbook to ensure latest security updates are applied to environments.
4. Create a staging environment.
5. Add code coverage.
6. Update pipeline so that it can support rollback.
7. Deploy application on Kubernetes

## Accomplishments
1. Daksh (dmehta4)
  * Security test cases - <br>
   Wrote three test cases that check for cross site scripting vulnerabilities. Checked for XSS vulnerabilities in the name, quantity, and total fields which are rendered on the HTML. <br>
   This will ensure that our application is not vulnerable to XSS attacks.
  * Workflow to run the security tests - <br>
   The workflow gets triggered when a push is made to the "dev" branch or a PR is opened/closed. <br>
   It firsts installs the dependencies for the tests which are mocha, chai, and supertest and then runs the XSS tests. 
  * Ansible playbook for security updates - <br>
   Created an Ansible playbook which updates the package cache for the system and then applies the available security updates.
   This is done for all the environments to minimize security vulnerabilities that may be present in the OS
  * Kanban Boards [Sprint 1](https://github.ncsu.edu/dmehta4/devops-proposal/projects/1) [Sprint 2](https://github.ncsu.edu/dmehta4/devops-proposal/projects/2) <br>
    Made use of GitHub projects and Issues to create Kanban boards for sprint 1 and sprint 2 and assigned issues to everyone in the team. <br>
    Implemented automation so that everytime an issue is closed from the issues page, the change is automatically reflected in the kanban board. <br>
    This would make it easier to keep a track of the tasks currently in hand.
  * [Link to the commit](https://github.ncsu.edu/dmehta4/devops-proposal/commit/72bc04c69c55adf1a1bb0f97466fc09fad2b8b48)

2. Ashvin (agaonka2)
  * Workflow - <br>
   Implemented a customized image-building process to incorporate specific tagging conventions during pull requests (PR) from the development (dev) branch to the release branch. The image tag is prefixed with 'integ' in this scenario. Similarly, during PRs from the release to the main branch, the image tag is prefixed with 'prod.' This meticulous tagging ensures distinct images for different environments, enhancing traceability and environmental specificity. <br>
   Engineered the image generation process to facilitate seamless rollbacks. By preserving previous working deployed images, this approach ensures the ability to revert the application to a state identical to any prior successfully deployed image.<br>
  * Ansible - <br>
   Developed Ansible scripts to automate the setup and configuration of the production (PROD) environment. These scripts include conditional statements to verify that only production images are deployed on the PROD environment, ensuring the integrity and reliability of the production infrastructure.<br>
  * Kubernetes Deployment (Minikube Local Environment) - <br>
   Orchestrated the deployment of the application using Kubernetes, specifically leveraging Minikube for local development and testing purposes.<br>
  * [Link to the commit](https://github.ncsu.edu/dmehta4/devops-proposal/commit/899f16e2c71479b9f05bded91a33b4ea95a18548)  
   

  
3. Rohan
  
## Next Steps
1. Daksh
* Implement feature flag-
We plan to implement internal feature flags. We will have the feature flag defined in another file (such as config.json) and different content will be rendered depending on whether the feature flag has been enabled or disabled.
* Add badges to the repo to show whether workflows are passing or failing.

2 Ashvin
* Deploy Application on Kubernetes
We aim to orchestrate the deployment of our application on Kubernetes to leverage its dynamic scaling capabilities on PROD (Production Environment)

## Retrospective for the sprint
1. What Worked - <br>
  * Running the security test cases was fairly straightforward as it was similar to running the unit tests with a simple addition of a script in package.json.
  * Establishing the production (PROD) environment and implementing checks required a significant amount of effort but was ultimately successful.
   
2. What didn't work - <br>
  * Initially it was a little difficult to write test cases that check for XSS attacks. So we had to surf the web to learn more about how XSS attacks are performed and then using the template provided we were able to write our own tests.
  * Deploying the application on Minikube locally in the development environment proved to be quite challenging due to our limited knowledge about Kubernetes.
3. What we are going to do differently<br>
*  We realized the importance of knowledge sharing especially while exploring new areas such as security testing. We plan to share the things we have learned during this sprint with each other so that we can continue to learn and grow.
* We are also going to spend some time to brainstorm and figure out what would the best way to implement feature flags would be.
