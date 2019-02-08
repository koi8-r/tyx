#!/bin/bash
CTNAME="tyx-db"
docker run \
  -d \
  --rm \
  -ti \
  --name "${CTNAME}" \
  -h "${CTNAME}" \
  -p 27017:27017 \
  -v "${PWD}/db/":/data/db/ \
  true

