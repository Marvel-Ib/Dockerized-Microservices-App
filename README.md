# Dockerized-Microservices-App
A very simple application to showcase my knowledge of microservices architecture and docker.

Note: The app does not really have a usecase I was more focused on the architecural pattern and also the implementation
I will definitely still create a side-project that will have a usecase and beautiful architectural pattern

### Highlights:
- I made my own API GATEWAY ( a shared layer to serve client requirements with microservices architecture).
- I used a docker compose file to ensure communication between my services(Gave me a tough time. Had a major error you can read about it in my Error Highlight).
- I used Babel so I could write next-gen Javascript thereby making my code more readable.


### Technologies

Node.js --- Docker----MySQL---ExpressJs---Babel---PayStack-Api---Express-http-proxy

## Project Implementation 

**File Structure Picture** 

<img src="demo/filestructure.png">

I had two services (Implemented Independently of each other )
- User Service
  - A service to create new users and get all users
  - Built as a docker image so I could use it in my docker-compose file 
  - Used mysql docker image to store user information.

- Verify Service
  - A Verification Service to verify Nigerian Account Number and Resolve Card Bin (utillizes Paystack Api)
  - Built as a docker image so I could use it in my docker-compose file 


**API GATEWAY**




## Error Highlight 


## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

### in a separate terminal, inside classifieds-app
yarn
yarn watch
Deploy
Check out my video series for a step-by-step tutorial on how to deploy this.



# TOdo: 

- authentication so only logged in users can enter 
- create patch and delte request for user 





