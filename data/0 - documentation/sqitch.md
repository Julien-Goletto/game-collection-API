# SQITCH

Sqitch is a wonderful tool for database deploying : https://sqitch.org/

## Initialization

First you have to initialize your project.
Go to the folder containing your data structure, then :

```
sqitch init filmotheque --engine pg
```

**filmotheque** is your project name.
**pg** is the DB engine (here postgresql).

It creates 3 folders :

- deploy
- revert
- verify

These 3 folders will receive all your sql scripts.
And 2 files :

- sqitch.conf
- sqitch.plan

## Create a version


```
sqitch add version_1 -n "structure de base"
```

**version_1** : version name (think it like a kind of git commit)
**"structure de base"**: version message (-m "message")

Once the version is created, sqitch generates one script in each folders previously created, now it's time for you to work on your logic.

## Executing scripts

From your data folder :

```
sqitch deploy db:pg:filmotheque nom_de_la_version
```
Sqitch deploys all scripts one after the other, from start to the targetted version.

---

To revert from a version to another one :

```
sqitch revert db:pg:filmotheque nom_de_la_version
```

The revert is done until the targetted version.

---

To verify the content of your database :

```
sqitch verify db:pg:filmotheque nom_de_la_version
```
The check is done until the targetted version.

---

If you want to fully install your database from scratch, just omit the version argument

## Reset everything

Your database could quickly be a mess.

To reset sqitch configuration and retreive a previous safe state :

- delete both sqitch.plan and sqitch.conf
- drop cascade Sqitch schema from DB