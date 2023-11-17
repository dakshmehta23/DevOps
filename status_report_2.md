# Status Report 2

## Additional Project Scope
1. Create test cases that check for security vulnerabilities.
2. Implement feature flags
3. Write Ansible Playbook to ensure latest security updates are applied to environments.
4. Create a staging environment.
5. Add code coverage.
6. Update pipeline so that it can support rollback.

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

2. Ashvin
  
3. Rohan
  
## Next Steps
1. Daksh
* Implement feature flag-
We plan to implement internal feature flags. We will have the feature flag defined in another file (such as config.json) and different content will be rendered depending on whether the feature flag has been enabled or disabled.
* Add badges to the repo to show whether workflows are passing or failing.

## Retrospective for the sprint
1. What Worked - <br>
   Running the security test cases was fairly straightforward as it was similar to running the unit tests with a simple addition of a script in package.json.
2. What didn't work - <br>
  Initially it was a little difficult to write test cases that check for XSS attacks. So we had to surf the web to learn more about how XSS attacks are performed and then using the template provided we were able to write our own tests.
3. What we are going to do differently<br>
*  We realized the importance of knowledge sharing especially while exploring new areas such as security testing. We plan to share the things we have learned during this sprint with each other so that we can continue to learn and grow.
* We are also going to spend some time to brainstorm and figure out what would the best way to implement feature flags would be.