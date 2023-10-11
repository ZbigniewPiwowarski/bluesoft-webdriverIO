# bluesoft webpage functional tests

- test run on production: https://bluesoft.com/

# technologies used

- typescript
- webdriverIO
- cucumber + gherkin
- docker

# test principles

- every test is independent from each other
- tests attempt to be rather general to avoid maintaining costs
  but to provide some level of safety for general features

# requirements for run tests on local machine

- node.js 16 or later
- up to date chrome browser


# INSTALLATION - REPOSITORY LOCALLY

- in root directory run command: npm install

# run test locally in headless mode

- in root directory run command: npm run wdio

# run tests locally without headless mode

- in root directory run command: HEADLESS=false npm run wdio






# requirements for running tests in container

- install docker https://docs.docker.com/get-docker/

# !!!! docker will not work here with macbooks with chips M1 or M2, it will only work with intel chip !!!

reason is that container has different architecture (arm64) for chips M1 and M2, support for dockerized
chrome for such architecture is not provided, thats big disadvantage of webdriverIO in context of dockerization, cypress and playwright have built in browsers and there is no such problems

# INSTALLATION - REPOSITORY IN CONTAINER

type in root directory: docker build -t mytest -f .dockerfile .

# running test in container :

docker run -v -it mytest npm run wdio
