.DEFAULT_GOAL := help

serve:
	docker-compose up node

stop:
	docker-compose down

login:
	docker exec -it node /bin/bash

create: ## reactのプロジェクト作成
	docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app reactapp"
