module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 1688,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/\/node_modules\//],
            include: [/\/src\//],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 667,
        }),
    ],
}
