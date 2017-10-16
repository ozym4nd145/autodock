##Basic Structure
* Ask for the base image : `FROM <base_image> `
* Input maintainer name : `LABEL maintainer="<name> (<email>)"`
* Entry point: `ENTRYPOINT ["<command>","<param1>","<param2>"]`
* Parameters to app: `CMD["<param1>","<param2>"]`
* port to expose: `EXPOSE <port>`
* Commands to build image: `RUN <command>`
* Copy from base directory: `COPY <from_path> <to_path>`
* Environment variables: `ENV <key1>=<value1> <key2>=<value2>`
* ADD for url
* Workdir for specifying work directory: `WORKDIR <path>`


