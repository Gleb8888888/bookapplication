import { join } from 'path'
import { HotModuleReplacementPlugin } from 'webpack'

export const entry = './src/index.tsx'
export const mode = 'development'
export const module = {
    rules: [
        {
            test: /\.[jt]sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
}
export const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
}
export const output = {
    filename: 'bundle.js',
}
export const devServer = {
    contentBase: join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
}
export const plugins = [new HotModuleReplacementPlugin()]
export const devtool = 'eval-source-map'