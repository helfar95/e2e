FROM cypress/base:10

WORKDIR /app
COPY . /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
ENV CI=1
RUN npm i && npx cypress run
