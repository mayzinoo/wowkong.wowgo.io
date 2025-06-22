INSTALLATION
============

These are instructions for running bustabit locally on a Debian / Ubuntu machine.

# Distribution packages

You will need to install the Postgres DBMS and node.js.


Installation on Server
======================


# Create a database user and setup the tables

- Create a user. It will prompt you for a password.

    sudo -u postgres createuser -P databaseUsername

- Create the database and setup the tables. The second command will prompt you
for the password again.

    sudo -u postgres createdb -O DatabaseUserName DatabaseName


Configuration
=============

# Installing node.js dependencies locally.

This will download and install all dependencies in the `node_modules` subdirectory.

    npm install

# .env file

The following configuration variables need to be set in a .env file in the root directory. see the `example.env` file

Running
=======

Run `npm start`. By default it will listen on port `3841`.

![wowkong](https://github.com/user-attachments/assets/a43e3bb2-ed6a-4b46-ad12-79f8923db5a7)


![wowko](https://github.com/user-attachments/assets/d7941614-3486-4f3b-b4e4-a12944ac036a)


