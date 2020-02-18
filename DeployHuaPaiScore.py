# -*- coding: utf-8 -*-
# 部署花牌记分器 Deploy HuaPaiScore

import io

print("{:=^50}".format("Start"))

with io.open(".\\scripts\\app.js", 'r', encoding="utf-8") as f:
  fileContent = f.read()
  print("{:^50}".format("Read Completed"))
  fileContent = fileContent.replace("../service-worker.js", "/HuaPaiScore/service-worker.js")
  print("{:^50}".format("Replace Completed"))

with io.open(".\\scripts\\app.js", 'w+', encoding="utf-8") as f:
  f.write(fileContent)
  print("{:^50}".format("Write Completed"))

print("{:=^50}".format("End"))
