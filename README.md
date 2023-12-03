# Final Submission

## Workflows
![Linting](https://github.ncsu.edu/dmehta4/devops-proposal/actions/workflows/lint.yml/badge.svg)
![Unit Tests](https://github.ncsu.edu/dmehta4/devops-proposal/actions/workflows/testcases.yml/badge.svg)
![Security Tests](https://github.ncsu.edu/dmehta4/devops-proposal/actions/workflows/security-tests.yml/badge.svg)
![Code Coverage](https://github.ncsu.edu/dmehta4/devops-proposal/actions/workflows/codecov.yml/badge.svg)
![Vulnerability Check](https://github.ncsu.edu/dmehta4/devops-proposal/actions/workflows/sonatype-check.yml/badge.svg)

# How to Run
## Prerequisite
### Provision of VCL
Ensure four VCL are up and running. Four VCL are for following purpose
1. Github Runner
2. INTEG Environment
3. PROD Environment
4. Monitoring Server

Setup SSH from Github Runner to all the other three VCL i.e. INTEG, PROD, Monitoring Server. This can be done by loging into Github Runner using RDP and then setup SSH. To generate SSH Keys use following command. Use all the default settings during SSH Key generation
```bash
ssh-keygen -t rsa -b 4096 -C "unity-id@ncsu.edu"
```
To copy SSH use following command
```bash
ssh-copy-id unity-id@environment_ip
```
### Setup Github Runner
Setup Github Runner using instructions mentioned in Repo Settings -> Actions -> Runner.
Clone the Repository and change IP Address in ```hosts.yml``` update the IP address of ```github_runner``` in the outermost ```hosts.yml``` file.
Use following commands to build Docker Image
```bash
docker build . --tag configure_servers
```
Run Docker Container
Execute the following command to run the Docker container:
```bash
docker run -v ${PWD}:/configure_servers -v $HOME/.ssh:/root/.ssh -it configure_servers
```
This will setup GitHub Runner.

### Add Repository Secrets
Add ```DOCKER_USERNAME``` and ```DOCKER_PASSWORD``` as secrets in the repository.


## Setting up Monitoring tools
Checkout SETUP_MONITORING_TOOLS and change the IP address of monitoring server in ```hosts.yml```. Add the INTEG or PROD IP in ```prometheus.yml.j2``` under docker_metrics job target. Leave the PORT to be 9323.

Commit and push the changes. GitHub Action will automatically trigger and will setup Prometheus and Grafana. Furhter we have to manually setup Grafana and Dashboard through UI

Prometheus UI ```monitoring_server_ip:9090```
Grafana UI ```monitoring_server_ip:3000```

## Image Building Process
During continous development some commits will be made on ```dev``` branch. Push those change. Once pushed, GitHub Action will automatically trigger and execute various task such as Linting, Vulnerability Check, Unit Test, Security Test. Once all the checks are passed we create Pull Request from ```dev``` branch to ```release-X.X.X``` branch. Doing so will again trigger Github Action that will execute various task before merging. To merge the changes one of the reviewer needs to approve the changes, and once changes are merged, the image building process will trigger which will build image with the name ```agaonka2/integ-<timestamp>``` and pushed to DockerHub under username ```aganoka2```.

## INTEG Deployment
To deploy image on INTEG Environment, we checkout to ```INTEG``` branch and update the ```integ``` IP in ```hosts.yml``` and ```docker_image_name``` in ```deploy.yml```.

Commit and push the changes. GitHub Action will automatically trigger and deploy the application. Check the application on ```integ_ip:3000```

## PROD Deployment
Once we are done with manual checking and we feel like deploying on PROD, we create a PR from ```release-X.X.X``` branch to main. The image building process will trigger and image with the name ```agaonka2/prod-<timestamp>``` will be built and pushed to DockerHub.

Checkout to ```PROD``` branch and update the ```prod``` IP in ```hosts.yml``` and ```docker_image_name``` in ```deploy.yml```.

Commit and push the changes. GitHub Action will automatically trigger and deploy the application. Check the application on ```prod_ip:3000```

## Monitoring
We can when the container are up from Grafana Dashboard using the metrics ```engine_daemon_container_states_containers{state="running"}```

## Feature Flag
To enable certain feature, in our case if the Coffee Shop is opened or closed all you have to do is change the value of ```shopOpen``` to ```False``` in ```config.js``` inside coffee-project directory on ```dev``` branch


## Authors
1. Daksh Mehta (dmehta4)
2. Ashvin Shivram Gaonkar (agaonka2)
3. Rohan Shiveshwarkar (rsshives)
