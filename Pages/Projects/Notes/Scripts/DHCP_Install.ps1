function StringArrayToIpArray($stringArray) {
    $ips = ($stringArray -replace '\s', '').Split(',')
    $ipArray = New-Object ipaddress[] $ips.Count
    for ($i = 0; $i -lt $ips.Count; $i++) {
        $ipArray[$i] = [ipaddress]$ip
    }

    return $ipArray
}

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
        [Parameter(Mandatory = $true, HelpMessage = 'Name the scope or leave it empty')]
        [string]
        $ScopeName,

        [Parameter(Mandatory = $true, HelpMessage = 'Starting ip address of the range')]
        [ValidateNotNullOrEmpty]
        [ipaddress]
        $StartRange,

        [Parameter(Mandatory = $true, HelpMessage = 'Ending ip address of the range')]
        [ValidateNotNullOrEmpty]
        [ipaddress]
        $EndRange,

        [Parameter(Mandatory = $true, HelpMessage = 'DNS servers (x.x.x.x, x.x.x.x, ...)')]
        [ValidateNotNullOrEmpty]
        [ipaddress]
        $DNSServers,

        [Parameter(Mandatory = $true, HelpMessage = 'Domain name')]
        [string]
        $DomainName,

        [Parameter(Mandatory = $true, HelpMessage = 'Routers (x.x.x.x, x.x.x.x)')]
        [ValidateNotNullOrEmpty]
        [string]
        $Routers,

        [Parameter(Mandatory = $true, HelpMessage = 'Server domain name, leave empty to use default (PCname.domain.name)')]
        [string]
        $ServerDomainName
    )
    
    begin {
        Write-Warning("Turning firewall off...")
        netsh advfirewall set allprofiles state off
    }
    
    process {
        $ErrorActionPreference = "Stop"
        Install-WindowsFeature DHCP -IncludeManagementTools
        Add-DHCPServerV4Scope -name "scope_name" -startrange $StartRange -endrange $EndRange -subnetmask $SubnetMask

        $dnsServersArray = StringArrayToIpArray($DNSServers)
        $routersArray = StringArrayToIpArray($Routers)

        if ($DomainName)
        {
            Set-DHCPServerV4OptionValue -dnsdomain $DomainName -dnsserver $dnsServersArray -router $routersArray
            [string]$name
            if ($ServerDomainName)
            {
                Add-DHCPServerInDC -dnsname $ServerDomainName
            }
            else {
                Add-DHCPServerInDC -dnsname $env:COMPUTERNAME + '.' + $DomainName
            }
            
        }
        else {
            Set-DHCPServerV4OptionValue -dnsserver $dnsServersArray -router $routersArray
        }
        
        restart-service dhcpserver
    }
    
    end {
        Write-Warning("Turning firewall on...")
        #netsh advfirewall set allprofiles state on
    }
}