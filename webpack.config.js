const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const webpack=require('webpack');


module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/',
    },
    resolve:{
        alias:{
            components:path.resolve(__dirname, 'src/components/'),
            pages:path.resolve(__dirname, 'src/pages/'),
            scss:path.resolve(__dirname, 'src/assets/styles/')
        },
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|svg|mp4)$/,
                use:[
                    {
                        'loader':'file-loader',
                        options:{
                            name:'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    mode:'development',
    devServer:{
        historyApiFallback:true,
        hot:true,
        open:true,
        port:3000
    },
    plugins:[
        /* new webpack.HotModuleReplacementPlugin(), */
        new HtmlWebPackPlugin(
            {   
                //title:'webpack-dev-server'
                template:'./public/index.html',
                filename:'./index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename:'assets/[name].css'
            }
        )
    ]
}