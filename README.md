# Problem Statement

## What is the problem?
Traditionally, the team responsible for development and the team responsible for operations have been separate. The development team is responsible for implementing new features and the operations team has the responsibility to roll them out. However, this rolling out of the features is done manually which is error prone, slow and inefficient which leads to slower delivery of software to the end customer. It is also not scalable because as the application grows it becomes increasingly difficult to manage it. The lack of automation also increases downtime since human intervention is required when something breaks. The silo mentality further exacerbates these issues, making it challenging to roll out high-quality software faster.

## Why does this problem matter?
Developers create new features in response to customers' needs. If the roll out process of new software is slow the customers' needs may change by the time the software reaches them. In addition, if something goes wrong during the release of the software or it behaves in an unexpected manner the operations team might blame the dev team and vice versa. To tackle these issues, we propose a CI/CD pipeline below.

## What does our pipeline do?
Our pipeline provides an automated way to deploy software using GitHub Actions, Ansible, and Docker. The main purpose of this automated pipeline is to reduce the time it takes to deliver software to the end user. Whenever a feature is pushed to the release branch of our repository, automated tests are run. If the tests pass, the code will move further down the pipeline until it reaches production.

Our pipeline is triggered by events such as code commits and PRs. When these events occur, certain scripts run with the help of GitHub Actions. We also utilize GitHub Actions to create container images. However, we do require human intervention to provision and configure the production environment where our staged code will be deployed. This environment will be configured using Ansible, while the code will be deployed on the production machine using the container image we created earlier.

# Use Case

# Pipeline Design
The following diagram is a generalized overview of the pipeline.
![Pipeline Design Overview](./pipeline%20designs/pipeline_design_overview.png)

1. Whenever a new change is committed on the development branch, the build process will be automatically initiated.
2. Upon the successful compilation and building of the code, a test suite will run.
3. Following the successful test outcomes, the workflow will start the creation of a Docker Image. A comprehensive explanation of the image creation process is depicted in the diagram below.
4. During the deployment phase, administrators can select the desired deployment environment and initiate image deployment by modifying the image tag within the Ansible Playbook. This is where slight Human Intervention is required. The workflow will then retrieve the image from the registry and execute the deployment.
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
6. VCL to test and host our application.


# Authors
1. Daksh Mehta (dmehta4)
2. Ashvin Shivram Gaonkar (agaonka2)
3. Rohan Shiveshwarkar (rsshives)
