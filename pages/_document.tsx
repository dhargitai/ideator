import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
