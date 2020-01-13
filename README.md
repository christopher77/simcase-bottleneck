# Process Bottlenecks

- Staging: https://simcase-bottleneck-staging.herokuapp.com/
- Production:

## Description

Game for MBA students who have to try increasing the productivity of a recycling plant to the maximum within an economic year. The student who gets the highest productivity in the shorter time will be the winner.

## Dependencies

- Ruby: 2.6.4
- Rails: 6.0.0
- PostgreSQL >= 11.5
- Yarn: 1.17.3
- Webpack Dev Server: 3.9.0

## Local Development

> 1. \$ git clone git@github.com:ableco/simcase-bottleneck.git
> 2. \$ cd simcase-bottleneck
> 3. \$ bundle install
> 4. \$ ./bin/rails db:create db:migrate
> 5. \$ ./bin/rails server

## Setup

> 1. \$ rails new simcase-bottleneck -d postgresql --webpack=react --skip-test
> 2. \$ cd simcase-bottleneck
> 3. \$ brew install postgresql (if required)
> 4. \$ brew services start postgresql (if required)
> 5. \$ ./bin/rails db:create db:migrate
> 6. \$ ./bin/webpack-dev-server
> 7. \$ ./bin/rails server
