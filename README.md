# Problem Statement

## What is the problem?
Traditionally, the team responsible for development and the team responsible for operations have been separate. The development team is responsible to implement new features and the operations team has the responsibility to roll them out. However, this rolling out of the features is done manually which is error prone and slow which leads to slower delivery of software to the end customer. Additionaly the silo mentality between the teams makes it even harder to roll out good quality software faster.  

## Why does this problem matter?
Developers create new features in response to customers' needs. If the roll out process of new software is slow the customers' needs may change by the time the software reaches them. In addition, if something goes wrong during the release of the software or it behaves in an unexpected manner the operations team might blame the dev team and vice versa. 

## What does our pipeline do?
Our pipeline offers a way to automate the deployment process using Github actions, Ansible, and Docker. This automated pipeline intends to lower the turnaround time taken to get the software to the end user. Whenever a feature is pushed to the release branch of our repository, automated tests will run and if they pass the code will go further down the pipeline all the way to production.

Our pipeline responds to triggers such as code commits and PRs, and in response to these events certain scripts run with the help of Github Actions.
Our pipeline also involves human interference to provision and configure the production environment where our staged code will run. This environment will be configured using Ansible and the code will get deployed on the production machine.

# Use Case

# Pipeline Design
