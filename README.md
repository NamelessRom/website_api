Nameless Website
=====

This repository contains the source code for [Nameless Rom](https://nameless-rom.org)

The server itself is based on [io.js](https://iojs.org) and [Express](http://expressjs.com)

Website
---

The website makes use of

 - [AngularJS](https://angularjs.org/)
 - [Bootstrap](http://getbootstrap.com/)
 - [Bootstrap material design](https://fezvrasta.github.io/bootstrap-material-design/)
 - [jQuery](https://jquery.com/)

The code for the website is placed in [public](https://github.com/NamelessRom/website_api/tree/master/public)

API
---

To use the API you need to install

 - [io.js](https://iojs.org)
 - [MongoDB](https://www.mongodb.org/)

To use the script to run the server in background, you also need to install

 - [forever](https://github.com/foreverjs/forever)

After you have installed all requirements, you need to set the following environmental variables, or pass it to the api-init script

 - API_USERNAME - The username which is used to create new update entries
 - API_PASSWORD - The password which is used to create new update entries

To test if the API is working properly, you can use ```tools/create_update_entry.sh```. If you forgot to pass an argument, it will tell you :)

Example usage

```
tools/create_update_entry.sh TESTCHANNEL test_file_name.zip md5sum 20150427 testdevice
```

If successful, check your server if the entry got created. You can find more information about that below.

API Routes
---

Below are some of the API Routes with examples. Every route points to our (API in action)[https://nameless-rom.org]. In case you try it and it is offline, i am really sorry.

 - [**/update**](https://nameless-rom.org/update) - `lists every update entry`
 - [**/update/codename**](https://nameless-rom.org/update/find7) - `lists every update entry from the specified device`
 - [**/update/codename/single***](https://nameless-rom.org/update/find7/single) - `lists the LATEST update for the specified device`
 - [**/update/channel/codename**](https://nameless-rom.org/update/NIGHTLY/find7) - `lists the latest 5 updates for the specified device for the specified channel`

Contribution
---

Contributions are really welcome, they are handled at our [Gerrit Code Review](https://gerrit.nameless-rom.org).

License
---

You can find the license [here](https://github.com/NamelessRom/website_api/blob/master/LICENSE)
