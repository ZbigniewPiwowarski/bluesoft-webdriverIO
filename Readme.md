# bluesoft webpage functional tests
- test run on production: https://bluesoft.com/

# technologies used
- typescript
- webdriverIO
- cucumber + gherkin
- docker

# test principles
- tests run in headless mode
- every test is independent from each other
- tests attempt to be rather general to avoid maintaining costs 
    but to provide some level of safety for general features
- after test fails there will be screenshot in main folder with moment when there was a fail



# requirements for run tests on local machine
-
-

# requirements for run tests in container
- docker https://docs.docker.com/get-docker/

# how to run tests in docker
- once you have installed docker type in root directory: 
docker build -t mytest -f .dockerfile .
# mac
- after docker image was built for running tests type:
docker run -v $PWD:/app -it mytest npm run wdio
# windows
docker run -v %cd%:/app -it mytest npm run wdio

# screenshots
- tests run in headless mode, above command will add screenshots from failed tests to the root directory of repository as well as run tests
- names of the screenshots correspond to the name of error


