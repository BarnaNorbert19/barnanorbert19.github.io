apt install samba winbind krb5-config krb5-user smbclient -y

systemctl stop samba-ad-dc.service smbd.service nmbd.service winbind.service
systemctl disable samba-ad-dc.service smbd.service nmbd.service winbind.service

mv /etc/samba/smb.conf /etc/samba/smb.conf.original

samba-tool domain provision --use-rfc2307 --interactive

mv /etc/krb5.conf /etc/krb5.conf.original

ln -sf /var/lib/samba/private/krb5.conf /etc/krb5.conf

systemctl unmask samba-ad-dc.service
systemctl start samba-ad-dc.service
systemctl enable samba-ad-dc.service