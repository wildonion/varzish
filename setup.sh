docker run -d \
        -h redis \
        -e REDIS_PASSWORD=geDteDd0Ltg2135FJYQ6rjNYHYkGQa70 \
        -v $(pwd)/infra/data/redis/:/data \
        -p 6379:6379 \
        --name redis \
        --network varzik \
        --restart always \
        redis:latest /bin/sh -c 'redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}'
docker run -d --network varzik --name postgres --restart unless-stopped -p 5432:5432 -v $(pwd)/infra/data/postgres/:/var/lib/postgresql/data -e POSTGRES_PASSWORD=geDteDd0Ltg2135FJYQ6rjNYHYkGQa70 -e POSTGRES_USER=postgres -e PGDATA=/var/lib/postgresql/data/pgdata postgres
docker run -d --network varzik --link postgres -p 8080:8080 adminer
