FROM python:3-alpine

RUN apk add --update --no-cache ansible bash openssh

WORKDIR /configure_servers

COPY hosts.yml /configure_servers/
COPY 0-setup-runner.yml /configure_servers/

CMD ["ansible-playbook", "-i", "hosts.yml", "0-setup-runner.yml"]