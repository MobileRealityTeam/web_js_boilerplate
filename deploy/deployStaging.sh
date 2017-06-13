#!/usr/bin/env bash

ssh sadek@panel2.mydevil.net <<ENDSSH
cd ~/domains/domain/
rm -Rf public_nodejs
mkdir public_nodejs
cd public_nodejs
git clone git@gitlab.com:mobilereality/project.git
cd alepusto
git checkout branch
npm6 install --only=production
npm6 run build
NODE_ENV=staging
cp -R * ../.
export NODE_ENV=staging
devil www restart domain
ENDSSH