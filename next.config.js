const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
    reactStrictMode: true,
    generateBuildId: async () => 'build',
    compiler: {
        removeConsole: {
            exclude: ['error'],
        }
    }
});