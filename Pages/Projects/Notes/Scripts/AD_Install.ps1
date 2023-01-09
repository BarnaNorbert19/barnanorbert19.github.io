<#
.SYNOPSIS
    Auto installs Active Directory.
.DESCRIPTION
    Auto installs Active Directory and configures it to use the specified domain. If
.EXAMPLE
    AutoInstallAD -DomainName 'DOMAIN.NAME' -DomainNetbiosName 'DOMAIN' -DomainMode 'Win2008R2' -ForestMode 'Win2008R2'
#>

function AutoInstallAD {
    [CmdletBinding()]
    param (
        [ValidateScript({$_ -contains '.'})]
        [Parameter(Mandatory = $true, HelpMessage = 'MYDOMAIN.NAME')]
        [ValidateNotNullOrEmpty]
        [string]
        $DomainName,

        [Parameter(Mandatory = $true, HelpMessage = 'Accepted values: Win2003, Win2008, Win2008R2, Win2012, Win2012R2, WinThreshold')]
        [ValidateSet('Win2003, Win2008, Win2008R2, Win2012, Win2012R2, WinThreshold')]
        [ValidateNotNullOrEmpty]
        [string]
        $DomainMode,

        [Parameter(Mandatory = $true, HelpMessage = 'Accepted values: Win2003, Win2008, Win2008R2, Win2012, Win2012R2, WinThreshold')]
        [ValidateSet('Win2003', 'Win2008', 'Win2008R2', 'Win2012', 'Win2012R2', 'WinThreshold')]
        [ValidateNotNullOrEmpty]
        [string]
        $ForestMode
    )
    
    begin {
        Write-Warning("Turning firewall off...")
        netsh advfirewall set allprofiles state off
    }
    
    process {
        $ErrorActionPreference = "Stop"
        Write-Host("Installing Active Directory Services...") -ForegroundColor Green
        Install-WindowsFeature AD-Domain-Services -IncludeManagementTools
        Write-Host("Configuring Active Directory...") -ForegroundColor Green
        $domainNetbiosName = $DomainName.Split('.')[0].ToUpper()
        Install-ADDSFOREST -DomainName $DomainName.ToUpper() -DomainNetbiosName $domainNetbiosName -Force -DomainMode $DomainMode -ForestMode $ForestMode
    
    }
    
    end {
        Write-Warning("Turning firewall on...")
        #netsh advfirewall set allprofiles state on
    }
}