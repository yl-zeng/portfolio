var path = require("path");
var webpack = require("webpack");

module.exports ={
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!bootstrap/dist/js/bootstrap.min.js",
    "./app/app.jsx"],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery',
    })
  ],
  output:{
    path:__dirname,
    filename:"./public/bundle.js"
  },
  resolve:{
    root:path.resolve(__dirname),
    alias:{
      Main:"app/components/Main.jsx",
      Nav:"app/components/Nav.jsx",
      Nav2:"app/components/Nav2.jsx",
      Footer:"app/components/Footer.jsx",
      IndexPage:"app/components/IndexPage.jsx",
      Home:"app/components/Home.jsx",
      About:"app/components/About.jsx",
      Skill:"app/components/Skill.jsx",
      Folio:"app/components/Folio.jsx",
      Contact:"app/components/Contact.jsx",
      Card:"app/components/Card.jsx",
      Video:"app/components/Video.jsx"

    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader',
      query:{
        presets:['react','es2015']
      },
      test:/\.jsx?$/,
      exclude:/(node-modules|bower_components)/
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader!'
        }]
  }
};
