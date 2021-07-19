---
name: Nitronet for Sitecore # this is the Title of your Blip
ring: Hold # Values: [Hold | Assess | Trial | Adopt]
quadrant: Modules # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Nitronet for Sitecore](https://github.com/merkle-open/NitroNetSitecore) was (and still is) one of the most underrated, underused open source module for Sitecore MVC based solutions. It provides an easy to configure integration with the Handlebars/Mustache syntax by integrating Veil, one of the .Net ports of the Handlebars template engine that is so broadly used by frontend frameworks.

By replacing the default .Net rendering engine (Razor) with a Handlebars based engine, frontend teams are able to develop a prototype of the website based on Handlebars templates that can then be re-used in production on the Sitecore server. This short-cuts the development workflow and ommits the backend devs (traditionally) to copy & paste markup changes and adapt the Razor templates.

That said, the module seems not to be under frequent maintenance lately. And since we are not recommending new Sitecore development with the traditional MVC approach, we add Nitronet for Sitecore to the _Hold_ ring. Of course, as it is an open source module, if your use-case fits, go and try it out!
