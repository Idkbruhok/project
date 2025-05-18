@echo off
cd /d "%~dp0"

REM Move all files and folders from project-1.3 back to root
if exist "project-1.3" (
    for /f "delims=" %%i in ('dir /a /b "project-1.3"') do (
        echo Moving: project-1.3\%%i back to root
        move "project-1.3\%%i" "." 2>nul
    )
    rd /s /q "project-1.3"
)

REM Add and commit changes
git add .
git commit -m "Restore files to root directory"

REM Push changes
git remote remove origin
git remote add origin https://github.com/Idkbruhok/project.git
git push -f origin master

echo.
echo Press any key to exit...
pause > nul 