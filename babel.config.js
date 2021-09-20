module.exports = {
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                },
            }],
    ],
    env: {
        development: {
            plugins: [
                'minify-dead-code-elimination',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
            ],
        },
        test: {
            plugins: [
                'transform-es2015-modules-commonjs',
                '@babel/plugin-proposal-class-properties',
            ],
        },
        production: {
            plugins: [
                'transform-remove-console',
                'minify-dead-code-elimination',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};
