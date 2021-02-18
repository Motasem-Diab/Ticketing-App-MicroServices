# Ticketing-App-MicroS
# auth
- $npm i typescript ts-node-dev express @types/express

make a tsc config file by ($tsc --init)

- ($docker build -t diabmotasem/auth .) to ensure that Dockerfile is ok

- in root ($skaffold dev) to ensure that tha skaffold file and kubernetes file are ok
    if any error rerun the command


- make ingress nginx service ...
- change the hosting on mac in (/etc/hosts) or (C:\Windows\System32\Driver\etc\hosts) in windows
- if any security issue appears type (thisisunsafe) anywhere inside the browser


- we will use (express-validator) to validate the requests
- we will write an error handling middleware in a consistent structure and back it to browser in one fashin type of error
- make a new classes for each error (with abstract class) to enforce error classes to implement some methods in our way

- we will use a package called (express-async-errors) it is used if we want to thrown an error inside async function


###############################     -8-     ###############################

- install mongoose in auth dir 
- create (/inra/k8s/auth-mongo-depl.yaml)
- know we will loose our data in DB pod if restarted


###############################     -9-     ###############################

- Mostly we will user JWT inside Cookie to solve the issue of server side rendering in react then the React will talk to other services