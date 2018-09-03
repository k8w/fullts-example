rem 获取管理员权限
mode con lines=20 cols=60
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"

rm frontend\shared backend\shared & mklink /D frontend\shared ..\__shared && mklink /D backend\shared ..\__shared
pause