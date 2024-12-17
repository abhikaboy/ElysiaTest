#!/bin/sh

cd ~/bun/app
eslint ./src --fix
prettier . --write
