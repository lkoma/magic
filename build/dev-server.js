/* eslint-disable no-console */
require('./check-versions')();
const portfinder = require('portfinder');
const config = require('../config');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const path = require('path');
const express = require('express');
const upath = require('upath');
const webpack = require('webpack');
const chalk = require('chalk');
const fs = require('fs');
const webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');
// const openBrowser = require('./openBrowser');

process.on('unhandledRejection', err => {
    throw err;
});

// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    quite: true,
    noInfo: true
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve webpack bundle output
app.use(devMiddleware);

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

let innerResolve;
let innerReject;
let server;
const readyPromise = new Promise((resolve, reject) => {
    innerResolve = resolve;
    innerReject = reject;
}).catch(err => {
    if (err && err.message) {
        console.error(err.message);
    }
    process.exit(1);
});
devMiddleware.waitUntilValid(() => {
    console.log('> Starting dev server...');
    portfinder.basePort = process.env.PORT || '8080';
    portfinder.getPort((err, port) => {
        if (err) {
            innerReject(err);
        }
        process.env.PORT = port;
        const uri = `http://localhost:${port}`;
        console.log(`> Listening at ${uri}\n`);
        // if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        //     openBrowser(`${uri}/matrix/homepage.html`);
        // }
        server = app.listen(port);
        ['SIGINT', 'SIGTERM'].forEach(sig => {
            process.on(sig, () => {
                server.close();
                process.exit();
            });
        });
        innerResolve();
    });
});

module.exports = {
    ready: readyPromise,
    close() {
        server.close();
    }
};