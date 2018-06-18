ESLINT  = ./node_modules/.bin/eslint
BABEL   = ./node_modules/.bin/babel
NAME    = 'polix-template'
PROCESS = 4

install:
	npm i

eslint:
	${ESLINT} .

build:
	${BABEL} --ignore node_modules,gulpfile.js  ./ -d dist

dev:
	cd dist && node index.js

start:
	NODE_ENV=prod pm2 start dist/index.js -i ${PROCESS} --name ${NAME} -o ./logs/out.log -e ./logs/error.log

stop:
	pm2 stop ${NAME}

restart:
	pm2 restart ${NAME}

del:
	pm2 delete ${NAME}

log:
	pm2 logs ${NAME}