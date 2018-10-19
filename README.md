# fileRename
Renames pdf files and moves them to specified folder based on conditions

Currently this is tailored for two specific cases. One is a "Lease Number" that is 7 digits long. The other is for an index number that is anywhere from 5-7 digits / two digits.

The app finds the index number or lease number ( gonna refer to it as referance number from here on). It renames the file and moves it into a folder.
Right now it is for a specific file system where there is a folder for each "Lease Number". The plan is to build it out so that it can be more robust.


To Use:
The files need to have selectable text, this will NOT perform OCR.
all files should be in a './files' directory.
a `config.json` should be used that has the `path` of the folders that the documents will be put into.

