# INTEG ENVIRONMENT

This is the file to deploy any image to integ environment. We are using seperate deployment file to achieve rollback. In case we want to deploy any prior version of the image this files comes handy.

## How to deploy
Change the IP address of integ in ```hosts.yml``` and change the ```docker_image_name``` in ```deploy.yml```.

Commit and push the changes. The image will automatically deploy.