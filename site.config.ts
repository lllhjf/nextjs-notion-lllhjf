import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '9603303ead6f4aa18073b9169ab82427',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '0bec75f0-0a11-420d-a3e0-b8beb23560c0',

  // basic site info (required)
  name: 'Next.js Notion Starter Kit',
  domain: 'minei.us.org',
  author: 'Jinfeng Huang',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'lllhjf',
  github: 'lllhjf',
  linkedin: 'lllhjf',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Experiences',
      pageId: 'a49b87d5e4224bc184b8027e727047dc'
    },
    {
      title: 'Publications',
      pageId: 'c38a4c6cc78a4e589ce8ff977e80e8c6'
    },
    {
      title: 'About',
      pageId: '5c01b733b3ed48d3bf71754a504e6e67'
    },
    {
      title: 'Contact',
      pageId: '5bb1fb0b46914459b5cf1f4245d95764'
    },
  ]
})
