---
name: Horizon # this is the Title of your Blip
ring: Assess # Values: [Hold | Assess | Trial | Adopt]
quadrant: Products # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Horizon](https://doc.sitecore.com/users/100/sitecore-experience-platform/en/horizon.html) is the newest editing interface provided by Sitecore and at some point in the future is going to replace the Content Editor and the Experience Editor as the main editor.

Horizon provides an easy to use editing interface for authors. Currently suited best for authoring roles with rather limited editing rights. The version available with Sitecore 10 has multi-site and multi-language support but is still lacking many of the features of the standard editing interfaces. Horizon is a .Net Core based standalone application that must be installed along side the Sitecore CM instance (similar to Identity Server) and integrates with the Sitecore content management server through iFrames and REST API.

Having an author friendly editing interface that integrates with the data service through a headless backend is a good thing. It allows Sitecore to also "unwire" the monolythic Sitecore Kernel and its many UIs surrounding it (ContentEditor, ExperienceEditor, SPEAK apps). That said, keep in mind that the current version still lacks many features of the existing editor tooling and cannot be considered a replacement in every case. But it might be the easy to use editor you've been looking for to introduce to your editors. Review your editing requirements to see if Horizon is ready for you.

Horizon is most likely here to stay and receives updates in the next releases, we therefore put it in the _Assess_ ring.
