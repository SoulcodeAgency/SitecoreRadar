---
name: Synthesis # this is the Title of your Blip
ring: Adopt # Values: [Hold | Assess | Trial | Adopt]
quadrant: Tools-And-Libraries # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Synthesis](xxx) is an item wrapper for Sitecore and provides auto-generated<sup>1</sup> interfaces for item templates and provides integration into the ContentSearch API.

As Synthesis does not try to re-implement the data access layer, but rather wraps itself around the Sitecore item API, Synthesis does not add much overhead and has a relatively flat learning curve. Thanks to a pre-configured code-generation setup with Leprechaun, Synthesis requires almost no boilerplating, no framework specific runtime configurations.

Unfortunately Synthesis is lacking support for parameter templates, so you'll have to either write your own extension or use the native Sitecore API for parameter templates.

<sup>1</sup> the auto-generation feature is not part of Synthesis, but Leprechaun.
