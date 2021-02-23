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

############################### -8- ###############################

- install mongoose in auth dir
- create (/inra/k8s/auth-mongo-depl.yaml)
- know we will loose our data in DB pod if restarted

############################### -9- ###############################

- Mostly we will user JWT inside Cookie to solve the issue of server side rendering in react then the React will talk to other services.
- we will use (cookie-session) library
- we will use (jsonwebtoken) library

- for create a general secret ($kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf)
it creates an actual object, to list all secrets ($k get secrets)
  edit deployment config file as seen
- or we can make a config file for that secret

- ($k describe pod <podName>) to descripe what is happening

############################### -10- ############################### Testing

- we will use (supertest) libraty to make a fake request to express
- we will use (jest) library to make tests

# ($npm i --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server)

- refactor code, install dep, make setup.ts file.
- make **test** dir inside route, then make the file you want to make test inside it

############################### -11- ############################### Server side rendering

- normally the browser request html then another request for JS then may needs some data then make another request
- in Server Side Rendering we only make one request to (Next JS) it will do all the work that returns fully rendered HTML file with content.
- It is faster, especially for Mobile that may not run JS fast or so, will be a faster search engin

for Client Application ($npm i react react-dom next)

- after modify the script in package.json ($npm run dev) "the files inside the page dir" are like a routes we can access it form the url after run the client

- maka a docker file, build it, push it,
- make a depl file,
- edit skaffold.yaml file and ingress-srv

- make (next.config.js) file to make next watch the changes