Dit is de setup die we gaan gebruiken voor toekomstige websites, het is gebootstrapped met Laravel sail als API en create-next-app.
## Getting Started

To start up the containers for the first time , open two terminal windows one for the api and one for the client. From the root of the project so /fitness/ run the following commands (each cd in its seperate window):

```bash
cd api
./vendor/bin/sail up -d

cd client
docker-compose up -d
```

We've made a couple containers now u can see them at:

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the client.
- Open [http://localhost:8000](http://localhost:8000) with your browser to see the api.
- Open [http://localhost:8001](http://localhost:8001) with your browser to see the phpmyadmin.
- Open [http://localhost:9000](http://localhost:9000) with your browser to see portainer.

## Commands u will use often:

up the sail project

```bash
./vendor/bin/sail up -d
```
Get access to a sail container
```bash
./vendor/bin/sail bash
```

check composer version

```bash
./vendor/bin/sail composer --version
```

Build the containers again
```bash
./vendor/bin/sail build
```

Import packages inside of the container this will be remembered because of volumes, if u reset vps it will be gone
```bash
./vendor/bin/sail composer require jenssegers/mongodb
```

Migrate
```bash
./vendor/bin/sail artisan migrate
```
Tinker
```bash
./vendor/bin/sail tinker
```

ipv vendor/bin te typen kan je ook een alias toevoegen ff omschrijven cmd naar aparte sectie verplaatsen.
TODO

Run this cmd to make an alias for ./vendor/bin/sail.
```bash
alias sail='bash vendor/bin/sail'
```

Two examples old way of using this command:
```bash
./vendor/bin/sail artisan migrate
```

New way
```bash
sail artisan migrate
```

## Going live (VPS):
If u have a domain name and a server u will need to do the following:
- Open a terminal window and get acces to the server.
- Update and install the current packages
- Install the neccessary packages (docker, docker-compose, portainer, composer, node, npm, git, nginx, firewall)
- Remove apache and all the packages that comes with it.
- Set Nginx rules for the firewall since this is the service we are going to use
- Clone the project on your vps.
- Fix the /etc/nginx/sites-available/default (This will automaticly fix the /etc/nginx/sites-enabled file since they are linked together.)
-  Check if it works online
- Link domain instead of ip address
- Check if everything works including sub domains.
- Fix ssl certificate

Get access to server
```bash
ssh root@ipaddress
```

Update packages
```bash
apt update && apt upgrade
```

Stop apache2 en alle packages
```bash
systemctl stop apache2
systemctl disable apache2
apt remove apache2
apt autoremove
apt clean all && update
```

Firewall
```bash
apt install ufw
ufw allow "Nginx Full"
ufw status
```
SSL Certification
```bash
apt install certbot python3-certbot-nginx
```

Make sure Nginx full rule is available
```bash
uwf status
certbot --nginx -d example.com -d www.example.com
```

Set a timer so it updates itself after 90 days
```bash
systemctl status certbot.timer
```


  // ¯\_(ツ)_/¯
  
## Reminders 
Generating a ssh key:

```bash
ssh-keygen -b 4096 -t rsa 
```

Viewing the sshkey in the hidden .ssh/ dir.
```bash
cd ~
ls -a
cd .ssh/
cat .ssh/id_rsa.pub
```