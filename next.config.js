const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
    reactStrictMode: true,
    generateBuildId: async () => 'build',
    webpack: (config, { isServer, dev }) => {
        if (!isServer)
            config.resolve.fallback.fs = false;

        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                'react': 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat'
            });
        }

        return config;
    }
});