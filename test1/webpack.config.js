const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const prodMode = !devMode;

const relPublicPath = target =>
    path.relative(path.join(__dirname, 'dist', target), path.join(__dirname, 'dist'));

const filename = ext => (devMode ? `[name].${ext}` : `[name].[fullhash].${ext}`);
const fileLoader = assetType => ({
    loader: 'file-loader',
    options: {
        name: prodMode ? '[name].[fullhash].[ext]' : '[name].[ext]',
        outputPath: assetType,
    },
});

console.log('\x1b[47m_____________________________________________________________________\x1b[0m');
module.exports = {
    // Context set directory where input files are
    context: path.resolve(__dirname, 'src'),
    // Mode influences on minimising files (we can define mode in package.json scripts)
    mode: devMode ? 'development' : 'production',
    // In entry we point files that will go to final structure (files that assemble other chunks)
    entry: {
        // We need to add palyfill here for features like async/await
        index: ['@babel/polyfill', './index.js'],
    },
    // In output we set where will be new structure and how files will be set
    output: {
        filename: path.join('scripts', filename('js')),
        path: path.resolve(__dirname, 'dist'),
    },
    // In resolve we point options of resolving files
    resolve: {
        // Extensoins, that unnecessary to point in imports
        extensions: ['.js', '.json'],
        // We can now use alias instead of relative path in imports
        alias: {
            '@fonts': path.resolve(__dirname, 'src', 'assets', 'fonts'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // It is array of plugins
    plugins: [
        // Plugin generates html in dist
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: prodMode,
            },
        }),
        // Plugin clears dist before every build
        new CleanWebpackPlugin(),
        // Plugin generates resultant css file and we use it instead of basic style-loader
        new MiniCSSExtractPlugin({
            filename: path.join('styles', filename('css')),
            // chunkFilename: '[name].[ext]'
        }),
        // _ Copy files
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets', 'favicon.*'),
        //             to: path.resolve(__dirname, 'dist'),
        //         },
        //     ],
        // }),
    ],
    // Loaders help webpack to work with other extensions except js/json
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            publicPath: relPublicPath('styles'),
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)/,
                use: fileLoader('images'),
            },
            {
                test: /\.(ttf|woff2?|eot)/,
                use: fileLoader('fonts'),
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ],
    },
    optimization: {
        // This one emits repeated chunks to independent file
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
        // In new webpack standart we use next plugin to minimize css files
        minimizer: [prodMode ? new CssMinimizerPlugin() : '...'],
    },
    devtool: devMode && 'source-map',
    devServer: {
        contentBase: './dist',
        port: 4200,
        open: true,
        hot: true,
        clientLogLevel: 'silent',
    },
    target: 'web',
};
