import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import "semantic-ui-less/semantic.less";
import "../my-semantic-theme/semantic.less"
// import 'semantic-ui-css';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <title> React </title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" sizes="192x192" href="https://lh3.googleusercontent.com/oKsgcsHtHu_nIkpNd-mNCAyzUD8xo68laRPOfvFuO0hqv6nDXVNNjEMmoiv9tIDgTj8=w170" />
          <link rel="stylesheet" href="static/css/fontawesome-all.css" />
          <link rel='stylesheet' href='static/semantic.min.css' />
          {styleTags}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}