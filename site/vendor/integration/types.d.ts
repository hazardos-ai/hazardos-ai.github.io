declare module 'astrowind:config' {
  import type { SiteConfig, I18NConfig, MetaDataConfig, AppBlogConfig, UIConfig, AnalyticsConfig, FormbricksConfig } from './utils/configBuilder';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetaDataConfig;
  export const APP_BLOG: AppBlogConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
  export const FORMBRICKS: FormbricksConfig;
}
