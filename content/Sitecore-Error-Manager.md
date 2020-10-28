---
name: Sitecore Error Manager # this is the Title of your Blip
ring: Adopt # Values: [Hold | Assess | Trial | Adopt]
quadrant: Modules # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Sitecore Error Manager](https://github.com/unic/SitecoreErrorManager) extends Sitecore with a context-aware error handling with a main focus on user and SEO friendly page not found (404) pages.

The module supports a multi-site, multi-language setup and covers the https errors that typically require friendly feedback to users like page not found or access denied. It also supports custom error messages for assets and generally comes with a variety of configuration options.

The Sitecore Error Manager is a mature, with support for Sitecore versions up to 9.3 as of this writing. That said, development of the module seems to be held at a minimum to keep it compatible with newer versions of Sitecore. Be aware that the module does not support JSS/headless scenarios.

We've assigned the module to the _Adopt_ circle, as we still see a relevant amount of deployments running it with MVC based presentation layers.
