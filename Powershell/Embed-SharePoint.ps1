### Setup and Connect

#Install-Module SharePointPnPPowerShellOnline
#Install-Module SharePointPnPPowerShell2016
Install-Module SharePointPnPPowerShell2013

$siteUrl = "http://kapo.nexplore.ch/sites/app"
Connect-SPOnline -Url $siteUrl -Credentials (Get-Credential)

$layout = [OfficeDevPnP.Core.WikiPageLayout]::TwoColumns;

Add-PnPWikiPage -Layout $layout -ServerRelativePageUrl '/sites/app/SitePages/apploader.aspx';        
Add-PnPWebPartToWikiPage -ServerRelativePageUrl '/sites/app/SitePages/apploader.aspx' -Path '.\AppLoader.webpart' -Row 1 -Column 1
