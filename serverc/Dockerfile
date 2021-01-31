FROM node:lts-stretch

ENV TZ="America/New_York"

RUN mkdir -p /opt/automation_suite

WORKDIR /opt/automation_suite
#COPY package.json /opt/automation_suite
#RUN npm install
COPY . /opt/automation_suite/

ENTRYPOINT ["node"]
CMD ["./app.js"]
