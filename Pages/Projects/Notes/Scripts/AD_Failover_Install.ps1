<#
.SYNOPSIS
    Auto installs Active Directory Failover.
.DESCRIPTION
    Auto installs Active Directory Failover and configures it to use the specified domain.
.EXAMPLE
    AutoInstallFailoverAD -Username DOMAIN\Administrator -Password 'Aa123456' -DomainName 'domain.name' -Dns $true -ForwarderIp 8.8.8.8
#>

function AutoInstallFailoverAD {
    [CmdletBinding()]
    param (
        # Username for the domain controller e.g. DOMAIN\Administrator
        [Parameter(Mandatory = $true, HelpMessage = "DOMAIN\Administrator")]
        [ValidateScript({ $_ -contains '\' })]
        [ValidateNotNullOrEmpty]
        [string]
        $Username,

        # Password for the domain controller.
        [Parameter(Mandatory = $true, HelpMessage = "Password for the Administrator account")]
        [ValidateNotNullOrEmpty]
        [SecureString]
        $Password,

        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty]
        [string]
        $DomainName,

        # DNS forwarder IP address.
        [Parameter(Mandatory = $true, HelpMessage = "IP address of the DNS server, leave blank if you want to set it manually")]
        [ipaddress]
        $ForwarderIp
    )
    
    begin {
        Write-Warning("Turning firewall off...")
        netsh advfirewall set allprofiles state off 
    }
    
    process {
        $ErrorActionPreference = "Stop"
        Write-Host("Installing Active Directory Services...")
        Add-WindowsFeature AD-Domain-Services
        
        $credentials = New-Object System.Management.Automation.PSCredential($Username, $Password)
        Write-Host("Configuring Active Directory Failover...")
        Install-ADDSDomainController -CreateDnsDelegation:$false -DatabasePath 'C:\Windows\NTDS' -DomainName $DomainName -InstallDns:$true -LogPath 'C:\Windows\NTDS' -NoGlobalCatalog:$false -SiteName 'Default-First-Site-Name' -SysvolPath 'C:\Windows\SYSVOL' -NoRebootOnCompletion:$true -Force:$true -Credential $credentials

        if ($ForwarderIp) {
            Write-Host("Setting DNS forwarder...")
            Set-DnsServerForwarder -IPAddress $ForwarderIp
        }
    }
    
    end {
        Write-Warning("Turning firewall on...")
        netsh advfirewall set allprofiles state on 
    }
}