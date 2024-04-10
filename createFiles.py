import shutil, os

files = ["OOP_Basic.html", "OOP_Advanced.html", "Arrays.html", "Arraylists.html", "Searching.html", "Sorting.html", "Recursion.html"]
ignoreList = ["index.html", "projects.html"]

templateSource = "code/template.html"

def removeFiles():
    print("Removing files...\n")
    for file in os.listdir("."):
        if file.endswith(".html") and file not in ignoreList:
            print("Removed " + file)
            os.remove(file);

    print("Finished removing files...")

def createFiles():
    print("Creating new files...\n")

    for file in files:
        shutil.copyfile(templateSource, file)
        print("Created " + file)

    print("Finished creating files...")
    print("Finished operation")

removeFiles()
createFiles()




