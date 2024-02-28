cd back-end
-------------------------------------------
// TERMINAL powershell
python -m venv .venv
-------------------------------------------
// TERMINAL Git Bash
. .venv/Scripts/activate
-------------------------------------------
python --version
pip --version
which pip
python -m pip install --upgrade pip
pip list
-------------------------------------------
python \src\\main.py
pip freeze >requirements.txt
deactivate