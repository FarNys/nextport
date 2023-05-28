//@ts-nocheck
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className="bg-gradient-to-br from-slate-800 to-slate-950"
          dir="rtl"
        >
          <Main />
          <NextScript />
          {/* <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
          </style> */}
        </body>
      </Html>
    );
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) =>
//         function EnhanceApp(props) {
//           return <App {...props} />;
//         },
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//   };
// };
