@echo off
cd /d "%~dp0"

REM Create project-1.3 folder if it doesn't exist
if not exist "project-1.3" mkdir project-1.3

REM Move all files and folders except .git and batch files into project-1.3
for /f "delims=" %%i in ('dir /a /b') do (
    if not "%%i"==".git" if not "%%i"=="update.bat" if not "%%i"=="project-1.3" (
        if exist "%%i" (
            echo Moving: %%i to project-1.3
            move "%%i" "project-1.3\" 2>nul
        )
    )
)

REM Add and commit changes
git add .
git commit -m "Update main branch with project-1.3 folder"

REM Create new tag for v1.3
git tag -d v1.3
git tag v1.3

REM Push changes and tags
git remote remove origin
git remote add origin https://github.com/Idkbruhok/project.git
git push -f origin master
git push -f origin v1.3

echo.
echo Press any key to exit...
pause > nul 