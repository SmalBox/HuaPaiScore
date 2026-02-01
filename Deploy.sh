echo Start Deploy
git checkout .
git pull
python ./DeployHuaPaiScore.py
echo End Deploy