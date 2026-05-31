# Linux & Node.js Basic Commands Guide

This guide covers commonly used Linux terminal commands and Node.js tools with examples.

---

# 1. `pwd` – Print Working Directory

Displays the current directory path.

### Syntax

```bash
pwd
```

### Example

```bash
$ pwd
/home/user/projects
```

Output shows your current location in the filesystem.

---

# 2. `cd` – Change Directory

Used to navigate between directories.

### Syntax

```bash
cd <directory-name>
```

### Example

```bash
cd Documents
```

### Go Back One Directory

```bash
cd ..
```

### Example

```bash
/home/user/Documents
$ cd ..
/home/user
```

---

# 3. `ls` – List Directory Contents

Displays files and folders in the current directory.

### Syntax

```bash
ls
```

### Example

```bash
$ ls
file1.txt  file2.txt  projects
```

### Detailed View

```bash
ls -l
```

### Show Hidden Files

```bash
ls -a
```

---

# 4. `mkdir` – Make Directory

Creates a new folder.

### Syntax

```bash
mkdir <folder-name>
```

### Example

```bash
mkdir my-project
```

Result:

```text
my-project/
```

---

# 5. `touch` – Create File

Creates an empty file.

### Syntax

```bash
touch <file-name>
```

### Example

```bash
touch app.js
```

Result:

```text
app.js
```

---

# 6. `cat` – Display File Content

Prints the content of a file.

### Syntax

```bash
cat <file-name>
```

### Example

```bash
cat app.js
```

Output:

```javascript
console.log("Hello World");
```

### Create File Using Cat

```bash
cat > notes.txt
```

---

# 7. `vi` – Text Editor

A terminal-based text editor.

### Open File

```bash
vi app.js
```

### Common Commands

| Action              | Command |
| ------------------- | ------- |
| Insert Mode         | i       |
| Save                | :w      |
| Quit                | :q      |
| Save & Quit         | :wq     |
| Quit Without Saving | :q!     |

---

# 8. `mv` – Move or Rename File

### Move File

```bash
mv file.txt Documents/
```

### Rename File

```bash
mv old.txt new.txt
```

---

# 9. `cp` – Copy File

Copies files from one location to another.

### Copy File

```bash
cp source.txt backup.txt
```

### Copy Directory

```bash
cp -r project backup-project
```

`-r` means recursive copy (copy all files and folders inside a directory).

---

# 10. `nvm` – Node Version Manager

Used to install and manage multiple Node.js versions.

### Check Installed Versions

```bash
nvm ls
```

### Install Node Version

```bash
nvm install 20
```

### Use Specific Version

```bash
nvm use 20
```

### Check Current Version

```bash
node -v
```

---

# 11. `npm` – Node Package Manager

Used to install and manage Node.js packages.

### Check Version

```bash
npm -v
```

### Initialize Project

```bash
npm init -y
```

### Install Package

```bash
npm install express
```

### Install Development Dependency

```bash
npm install nodemon --save-dev
```

### Run Script

```bash
npm run start
```

---

# 12. `node` – Execute JavaScript

Runs JavaScript files using Node.js.

### Syntax

```bash
node <file-name>
```

### Example

**app.js**

```javascript
console.log("Hello Node.js");
```

Run:

```bash
node app.js
```

Output:

```text
Hello Node.js
```

### Open Node REPL

```bash
node
```

Exit:

```bash
.exit
```

---

# 13. `git` – Version Control System

Tracks code changes and supports collaboration.

### Initialize Repository

```bash
git init
```

### Check Status

```bash
git status
```

### Add Files

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Initial commit"
```

### View Commit History

```bash
git log
```

### Connect Remote Repository

```bash
git remote add origin https://github.com/username/repository.git
```

### Push Code

```bash
git push -u origin main
```

### Clone Repository

```bash
git clone https://github.com/username/repository.git
```

---

# Quick Workflow Example

```bash
mkdir node-app
cd node-app

touch app.js

npm init -y

npm install express

git init

git add .
git commit -m "Project setup"

node app.js
```

This workflow creates a Node.js project, installs dependencies, initializes Git, and runs the application.

---

## Summary

| Command | Purpose                 |
| ------- | ----------------------- |
| pwd     | Show current directory  |
| cd      | Change directory        |
| ls      | List files and folders  |
| mkdir   | Create directory        |
| touch   | Create file             |
| cat     | Display file content    |
| vi      | Edit file               |
| mv      | Move/Rename file        |
| cp      | Copy file/directory     |
| nvm     | Manage Node.js versions |
| npm     | Manage Node.js packages |
| node    | Run JavaScript          |
| git     | Version control         |
|         |                         |

---

# 14. `ls -l` – Long Listing Format

Displays detailed information about files and directories.

### Syntax

```bash
ls -l
```

### Example

```bash
$ ls -l
-rw-r--r-- 1 user user 1024 Jun 01 10:00 app.js
drwxr-xr-x 2 user user 4096 Jun 01 09:30 src
```

### Information Shown

* File permissions
* Number of links
* Owner
* Group
* File size
* Modified date and time
* File name

---

# 15. `ls -R` – Recursive Listing

Lists files and subdirectories recursively.

### Syntax

```bash
ls -R
```

### Example

```bash
$ ls -R

project:
app.js  src

project/src:
index.js  config.js
```

Useful for viewing an entire directory structure.

---

# 16. `ls -t` – Sort by Modification Time

Displays files sorted by most recently modified first.

### Syntax

```bash
ls -t
```

### Example

```bash
$ ls -t
app.js
package.json
README.md
```

The newest file appears first.

---

# 17. `ls -a` – Show Hidden Files

Displays all files including hidden files.

### Syntax

```bash
ls -a
```

### Example

```bash
$ ls -a
.  ..  .git  .env  app.js
```

Hidden files begin with a dot (`.`).

---

# 18. `ls -la` – Long Format with Hidden Files

Combines `-l` and `-a`.

### Syntax

```bash
ls -la
```

### Example

```bash
$ ls -la

drwxr-xr-x  5 user user 4096 Jun 01 10:00 .
drwxr-xr-x 10 user user 4096 Jun 01 09:00 ..
-rw-r--r--  1 user user   25 Jun 01 10:00 .env
-rw-r--r--  1 user user  500 Jun 01 10:01 app.js
```

Shows detailed information for all files, including hidden ones.

---

# 19. `ls -s` – Show File Size in Blocks

Displays file sizes in filesystem blocks.

### Syntax

```bash
ls -s
```

### Example

```bash
$ ls -s

4 app.js
8 package.json
4 README.md
```

The number before the filename represents disk blocks used.

---

# 20. `ls -lRa` – Recursive Long Listing Including Hidden Files

Combines:

* `-l` → detailed view
* `-R` → recursive
* `-a` → include hidden files

### Syntax

```bash
ls -lRa
```

### Example

```bash
$ ls -lRa

./
-rw-r--r-- app.js
drwxr-xr-x src
drwxr-xr-x .git

./src
-rw-r--r-- index.js

./.git
-rw-r--r-- config
```

Useful for inspecting complete project structures.

---

# 21. `ls -lt` – Long Listing Sorted by Time

Shows detailed file information sorted by modification date.

### Syntax

```bash
ls -lt
```

### Example

```bash
$ ls -lt

-rw-r--r-- app.js
-rw-r--r-- package.json
-rw-r--r-- README.md
```

Most recently modified files appear first.

---

# 22. `ls -lr` – Long Listing in Reverse Order

Displays detailed information in reverse sorting order.

### Syntax

```bash
ls -lr
```

### Example

```bash
$ ls -lr

README.md
package.json
app.js
```

Useful when you want the oldest or alphabetically last entries first.

---

# 23. `ls -lR | grep .json` – Find JSON Files Recursively

Lists all files recursively and filters only `.json` files.

### Syntax

```bash
ls -lR | grep .json
```

### Example

```bash
$ ls -lR | grep .json

-rw-r--r-- package.json
-rw-r--r-- config.json
-rw-r--r-- tsconfig.json
```

### Explanation

* `ls -lR` → Recursive detailed listing
* `|` → Pipe output
* `grep .json` → Filter lines containing `.json`

---

# 24. `ls *.json` – List JSON Files Only

Displays all JSON files in the current directory.

### Syntax

```bash
ls *.json
```

### Example

```bash
$ ls *.json

package.json
config.json
tsconfig.json
```

### Explanation

* `*` is a wildcard.
* `*.json` means "all files ending with `.json`".

Useful for quickly locating JSON configuration files.

---

## Quick Summary

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| ls -l               | Detailed file listing                             |
| ls -R               | Recursive listing                                 |
| ls -t               | Sort by modified time                             |
| ls -a               | Show hidden files                                 |
| ls -la              | Detailed + hidden files                           |
| ls -s               | Show file size blocks                             |
| ls -lRa             | Detailed recursive listing including hidden files |
| ls -lt              | Detailed listing sorted by time                   |
| ls -lr              | Detailed listing in reverse order                 |
| ls -lR | grep .json | Find JSON files recursively                       |
| ls *.json           | List JSON files in current directory              |

---

### 25. `ls ..` – List Parent Directory Contents

Displays the files and folders inside the **parent directory** (one level above the current directory).

### Syntax

```bash
ls ..
```

### Example

Current location:

```bash
/home/user/projects/node-app
```

Command:

```bash
ls ..
```

Output:

```text
node-app
react-app
python-app
```

### Explanation

* `..` represents the **parent directory**.
* Unlike `cd ..`, which moves you to the parent directory, `ls ..` only shows its contents without changing your current location.

### Example Comparison

Check current directory:

```bash
pwd
```

Output:

```text
/home/user/projects/node-app
```

List parent directory:

```bash
ls ..
```

Output:

```text
node-app  react-app  python-app
```

Verify you're still in the same directory:

```bash
pwd
```

Output:

```text
/ home/user/projects/node-app
```

### Common Usage

List parent directory in long format:

```bash
ls -l ..
```

List hidden files in parent directory:

```bash
ls -la ..
```

List parent directory recursively:

```bash
ls -R ..
```

### Summary

| Command     | Description                             |
| ----------- | --------------------------------------- |
| `ls ..`     | List contents of parent directory       |
| `ls -l ..`  | Detailed listing of parent directory    |
| `ls -la ..` | Detailed listing including hidden files |
| `ls -R ..`  | Recursive listing of parent directory   |

---

# 26. `mkdir -p` – Create Nested Directories

Creates parent directories automatically if they don't exist.

### Syntax

```bash
mkdir -p <directory-path>
```

### Example

```bash
mkdir -p projects/node-app/src/controllers
```

Result:

```text
projects/
└── node-app/
    └── src/
        └── controllers/
```

### Without `-p`

```bash
mkdir projects/node-app/src/controllers
```

This may fail if parent directories do not already exist.

---

# 27. `rm` – Remove File

Deletes a file permanently.

### Syntax

```bash
rm <file-name>
```

### Example

```bash
rm app.js
```

### Delete Multiple Files

```bash
rm file1.txt file2.txt
```

⚠️ Deleted files cannot be recovered easily.

---

# 28. `rm -r` – Remove Directory Recursively

Deletes a directory and all its contents.

### Syntax

```bash
rm -r <directory-name>
```

### Example

```bash
rm -r node-app
```

Before:

```text
node-app/
├── src/
├── package.json
└── app.js
```

After:

```text
Directory removed completely.
```

### Force Delete

```bash
rm -rf node-app
```

* `-r` → Recursive
* `-f` → Force delete without confirmation

⚠️ Use carefully.

---

# 29. `rmdir` – Remove Empty Directory

Deletes only empty directories.

### Syntax

```bash
rmdir <directory-name>
```

### Example

```bash
rmdir logs
```

### If Directory Contains Files

```bash
rmdir project
```

Output:

```text
rmdir: failed to remove 'project': Directory not empty
```

Use `rm -r` for non-empty directories.

---

# 30. `chmod` – Change File Permissions

Modifies read, write, and execute permissions.

### Syntax

```bash
chmod <permissions> <file>
```

### Example

```bash
chmod 755 app.js
```

### Permission Breakdown

| Number | Permission |
| ------ | ---------- |
| 7      | rwx        |
| 6      | rw-        |
| 5      | r-x        |
| 4      | r--        |

Example:

```bash
chmod 644 app.js
```

Result:

```text
Owner  : Read + Write
Group  : Read
Others : Read
```

---

# 31. `chmod -R` – Recursive Permission Change

Changes permissions for a directory and all files inside it.

### Syntax

```bash
chmod -R <permissions> <directory>
```

### Example

```bash
chmod -R 755 project
```

Before:

```text
project/
├── app.js
├── src/
└── config/
```

After:

```text
All files and folders receive 755 permissions.
```

---

# 32. `chmod u+x` – Add Execute Permission

Adds execute permission for the file owner.

### Syntax

```bash
chmod u+x <file>
```

### Example

```bash
chmod u+x deploy.sh
```

Check:

```bash
ls -l deploy.sh
```

Output:

```text
-rwxr--r--
```

Now the script can be executed:

```bash
./deploy.sh
```

### Meaning

| Symbol | Meaning      |
| ------ | ------------ |
| u      | User (Owner) |
| +      | Add          |
| x      | Execute      |

---

# 33. `chmod u-x` – Remove Execute Permission

Removes execute permission from the owner.

### Syntax

```bash
chmod u-x <file>
```

### Example

```bash
chmod u-x deploy.sh
```

Output:

```text
-rw-r--r--
```

Now the script cannot be executed directly.

---

# 34. `chmod g+w` – Add Write Permission to Group

### Syntax

```bash
chmod g+w <file>
```

### Example

```bash
chmod g+w report.txt
```

Group members can now edit the file.

---

# 35. `chmod g-w` – Remove Write Permission from Group

### Syntax

```bash
chmod g-w <file>
```

### Example

```bash
chmod g-w report.txt
```

Group members can no longer modify the file.

---

# 36. `chmod o+r` – Add Read Permission to Others

### Syntax

```bash
chmod o+r <file>
```

### Example

```bash
chmod o+r notes.txt
```

Others can now read the file.

---

# 37. `chmod o-r` – Remove Read Permission from Others

### Syntax

```bash
chmod o-r <file>
```

### Example

```bash
chmod o-r secrets.txt
```

Others can no longer read the file.

---

# 38. `chmod a+x` – Add Execute Permission for Everyone

### Syntax

```bash
chmod a+x <file>
```

### Example

```bash
chmod a+x start.sh
```

Permissions:

```text
rwxr-xr-x
```

Everyone can execute the script.

---

# 39. `chmod 777` – Full Permissions

### Syntax

```bash
chmod 777 <file>
```

### Example

```bash
chmod 777 test.sh
```

Permissions:

```text
rwxrwxrwx
```

Everyone can:

* Read
* Write
* Execute

⚠️ Not recommended for production systems.

---

# 40. `chmod 755` – Common Script Permission

### Syntax

```bash
chmod 755 <file>
```

### Example

```bash
chmod 755 deploy.sh
```

Permissions:

```text
rwxr-xr-x
```

Owner can modify; others can execute.

---

# 41. `chmod 644` – Common File Permission

### Syntax

```bash
chmod 644 app.js
```

Permissions:

```text
rw-r--r--
```

Owner can edit; others can only read.

---

## Quick Summary

| Command   | Description                          |
| --------- | ------------------------------------ |
| mkdir -p  | Create nested directories            |
| rm        | Delete file                          |
| rm -r     | Delete directory recursively         |
| rm -rf    | Force delete directory               |
| rmdir     | Remove empty directory               |
| chmod     | Change permissions                   |
| chmod -R  | Change permissions recursively       |
| chmod u+x | Add execute permission to owner      |
| chmod u-x | Remove execute permission from owner |
| chmod g+w | Add write permission to group        |
| chmod g-w | Remove write permission from group   |
| chmod o+r | Add read permission to others        |
| chmod o-r | Remove read permission from others   |
| chmod a+x | Add execute permission for everyone  |
| chmod 777 | Full permissions                     |
| chmod 755 | Common executable permission         |
| chmod 644 | Common file permission               |
