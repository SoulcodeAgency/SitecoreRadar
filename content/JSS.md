---
name: JSS # this is the Title of your Blip
ring: Adopt # Values: [Hold | Assess | Trial | Adopt]
quadrant: Products # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
Sitecore JavaScript Services SDK (JSS) is the JavaScript SDK provided by Sitecore to interact with the Layout Service through JavaScript frameworks. JSS currently ships with support for NextJS, React, Vue and Angular. While React was the first framework JSS supported and today is most likely the most used implementation, the latest addition of Next.js support (which is a React framework itself) is the most interesting combination. JSS is included in the XP license since Sitecore version 10.1.

Next.js is built around React and solves many things you'd have to take into consideration when deploying a production ready React implementation (like server side rendering for SEO, server-side API implementations, (security) http headers and more). Next.js support is available since [version 16](https://github.com/Sitecore/jss/releases/tag/v16.0.0) of the JSS SDK.

Although JSS supports all popular frameworks, we'd suggest to go with NextJS unless you have good reasons for a Vue or Angular implementation as with the underlying React components you'll get the best and longest Support from Sitecore.

We recommend new Sitecore implementations to go with JSS and therefore add it to the _Adopt_ ring.
