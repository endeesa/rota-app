FROM python:3
WORKDIR /src/python
COPY . /src/python
CMD [ "python", "-m unittest tests" ]