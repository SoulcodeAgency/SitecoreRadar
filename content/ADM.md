---
name: Analytics Database Manager # this is the Title of your Blip
ring: Trial # Values: [Hold | Assess | Trial | Adopt]
quadrant: Modules # Values: [Tools-And-Libraries | Techniques | Modules | Products] - Make sure to keep these exact values, the Radar is also case sensitive.
isNew: TRUE # Values: [TRUE | FALSE] - Make sure to keep the value all uppercase.
---
[Analytics Database Manager](https://marketplace.sitecore.net/Modules/A/Analytics_Database_Manager.aspx) extends Sitecore xConnect data management capabilities by adding a couple of data removal options.

ADM is around since early versions of Sitecore Analytics (OMS) and still then provides a solution to remove historical data from the analytics database in Sitecore. This is especially usefull since storage consumption is quite excessive on high traffic sites.

With the latest version ADM supports Sitecore 9.3. and provides the following main features:

* removal of historical data (with a cut off date provided)
* removal of single contacts (useful to support the GDPR process and its "right to be forgotten")
* remove contacts with no interactions after a specified date

While ADM actually started as an open source project on Github, it is no longer maintained in the public, which is a pitty. That said, the friendly maintainers at Sitecore can be reached via e-mail and are happy to receive feedback on the module.

We've put ADM into the _Trial_ ring to encourage its use when data retention policies on the xConnect databases are due. And we see increasing demand in reducing the amount of data stored in xConnect.
