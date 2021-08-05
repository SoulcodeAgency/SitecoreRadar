---
name: Sitecore Item Abstraction # This is the title of your blip.
ring: Adopt # Values: [Hold | Assess | Trial | Adopt]
quadrant: Techniques # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - If set to true, the blip will be marked as "new" on the radar.
---
Sitecore Item Abstraction is nothing new. There are several frameworks out there helping you wrapping or mapping the Sitecore content Item to a .Net object.

The main benefits at hand are: easier interaction with content in code and type safety for compile-time validation vs. run-time  error. Popular frameworks are already in the Sitecore Radar as blips (see Glass Mapper and Synthesis). But there are others, less used out there like [xWrap](https://github.com/vhil/xWrap) and [Fortis](http://fortis.ws/) (project seems abandonded). [Leprechaun](https://github.com/blipson89/Leprechaun) also provides even simpler item wrapping methodes (see the Leprechaun blip for details).
