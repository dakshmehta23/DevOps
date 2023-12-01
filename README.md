# Setup Monitoring Server
This will automatically setup Prometheus and Grafana on remote Ubuntu Machine to monitor health of the application.

## How to Setup
Change the IP address of monitoring server in ```hosts.yml```. Add the INTEG or PROD IP in ```prometheus.yml.j2``` under docker_metrics job target. Leave the PORT to be 9323.

Commit and push the changes. GitHub Action will automatically trigger