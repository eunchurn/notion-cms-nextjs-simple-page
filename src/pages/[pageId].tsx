import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "components/NotionPage";
import { rootNotionPageId } from "lib/config";
import notion from "lib/notion";

export const getStaticProps = async (context) => {
  const pageId = (context.params.pageId as string) || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: ["/b4528200eb584f77aac8b2733ed25e87"],
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
