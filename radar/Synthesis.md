---
name: Synthesis # this is the Title of your Blip
ring: Adopt # Values: [Hold | Assess | Trial | Adopt]
quadrant: Tools-And-Libraries # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Synthesis](https://github.com/blipson89/Synthesis) is an item wrapper for Sitecore and provides auto-generated<sup>1</sup> interfaces for item templates and a native integration into the ContentSearch API.

As Synthesis is not an ORM (like for example Glass Mapper), but rather wraps itself around the Sitecore Item. Synthesis does not add much overhead, is very fast and has a relatively low learning curve. Thanks to a pre-configured code-generation setup with [Leprechaun](https://github.com/blipson89/Leprechaun), Synthesis requires almost no boilerplating and no framework specific runtime configurations.

Unfortunately Synthesis is lacking support for parameter templates, so you'll have to either write your own extension or use the native Sitecore API for parameter templates.
