// Use this utility to republish packages from one package repository to another
// Is rare that you would needd to use this, but leaving as an example
// You needd  to be authenticatedd in both providers to run
const migrate = require('npm-migrate')

const moduleName = '@exercising/analytics'
const from = 'https://privatenpm.com'
const to = 'https://npm.pkg.github.com'

// optional
const options = {
    debug: true // default
}

migrate(moduleName, from, to, options)
    .then((migrated) => console.log(migrated)) // list of migrated packages
    .catch((err) => console.error(err))

