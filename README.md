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

```
Use Case: Testing of Pulled Docker Image in Staging (INTEG) Environment

1 Preconditions:
	Staging environment machine provisioned via VCL
	Self hosted GitHub Actions system provisioned
	Development branch exists


2. Main Flow:
	Developer will initiate the pipeline by initiating a PR from development branch to release branch
	[S1]
	The application builds
	Linter runs
	Test cases run
	PR needs to get approved by the Release Engineer
	[S2] 
	Github Actions creates a new image and uploads it to Docker Hub
	[S3]
	Playbook pulls the image from the DockerHub
	[S4]
	UI testing is successful

3. Subflows:
	[S1] Developer provides a PR message indicating all the changes and requests appropriate reviewers (including Release Engineer)	
	[S2] PR gets approved by the Release Engineer
	[S3] Developer runs ansible playbook to configure the INTEG environment
	[S4] Developer manually tests the UI

4. Alternative Flows:
	[E1] Build fails
	[E2] Test cases fail
	[E3] Linter fails
	[E4] Application does not run as desired in staging
```

# Pipeline Design
The following diagram is a generalized overview of the pipeline.
![Pipeline Design Overview](./pipeline%20designs/pipeline_design_overview.png)

1. Whenever new changes is committed on development branch, the build process will be automatically initiated
2. Upon the successful compilation and building of the software, a testing routine will be activated.
3. Following the successful test outcomes, the workflow will start the creation of a Docker Image, assigned with a specific tag designed such that only images from the main branch can be deployed on PROD, and the other images can be used in the INTEG environment to test the application functionalities. A comprehensive explanation of the image creation process is depicted in the diagram below.
4. During the deployment phase, administrators can select the desired deployment environment and initiate image deployment by modifying the image tag within the Ansible. This is where slight Human Intervention is required. The workflow will then retrieve the image from the registry and execute the deployment.
6. NOTE: We will also need Human intervention for provisioning resources like VCL

Detailed Flow of how different images are created for different environments
![Pipeline Detailed Design](./pipeline%20designs/pipeline_designed_detailed.png)

The pipeline design outlined above is well-suited for rollback capabilities due to the presence of an image repository housing all previously deployed images. In the event of a malfunction in the PROD environment, a seamless rollback to a prior image becomes readily achievable.

The technologies we will employ include:

1. Git for collaborative version control.
2. GitHub Actions to initiate build and testing processes.
3. Utilizing either GitHub Image Registry or Docker Hub to host our images.
4. Docker to containerize our applications.
5. Ansible for deploying and configuring servers in various environments.




