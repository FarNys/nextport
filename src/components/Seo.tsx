import React from "react";
import Head from "next/head";

export interface SeoType {
  title: string;
  keywords: string;
  description: string;
}
const Seo = ({ title, keywords, description }: SeoType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default Seo;
