# Notion CMS Nextjs simple page

## Static notion page

- First, make page with notion
  ![page1](docs/images/page1.png)
- Share web page
  ![page2](docs/images/page2.png)
- Copy `rootNotionPageId`
  ![page3](docs/images/page3.png)
- (optional) If you want to pre-rendered page, copy `pageId`
  ![page4](docs/images/page4.png)

`rootNotionPageId` is in `lib/config.ts` and set target pre-rendered `pageId` in `getStaticPaths` of `src/pages/[pageId].tsx`.

done.

```
yarn dev
```

check `http://localhost:3000/b4528200eb584f77aac8b2733ed25e87`

## Demo

- Notion page: <https://grateful-amethyst-4b7.notion.site/b4528200eb584f77aac8b2733ed25e87>
- Deployed page: <https://notion-cms-nextjs-simple-page.vercel.app/b4528200eb584f77aac8b2733ed25e87>
