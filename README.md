# GamersRebuplic - Ecommerce page

A webpage for ecomerce with authentication, protected routes, admin control panel, add/edit/remove products, live chat functionality.

Disclaimer: page is not finished. I'm still learning and developing this project as it goes on.

# GETTING STARTED

Technologies used in this project:
#
#Frontend:

[React](https://react.dev/) version 18.2.0

[Axios](https://axios-http.com/docs/intro) version 1.4.0

[React Bootstrap](https://react-bootstrap.netlify.app/) version 2.8.0

[Bootstrap icons](https://icons.getbootstrap.com/) version 1.10.5

[React Router Bootstrap](https://www.npmjs.com/package/react-router-bootstrap) version 0.26.2

[React-simple-star-rating](https://www.npmjs.com/package/react-simple-star-rating) version 5.1.7
#
#Backend:

[MongoDB](https://www.mongodb.com/) (I used free account)

[NodeJs](https://nodejs.org/en) version 18.17.0

[Express](https://expressjs.com/) version 4.18.2

[Nodemon](https://www.npmjs.com/package/nodemon) version 3.0.1

[Bcrypt](https://www.npmjs.com/package/bcrypt) version 2.4.3

[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) version 9.0.

[Dotenv](https://www.npmjs.com/package/dotenv) version 16.3.1

[Mongoose](https://mongoosejs.com/) version 7.4.2

[Cookie-parser](https://www.npmjs.com/package/cookie-parser) version 1.4.6

[Concurrently](https://www.npmjs.com/package/concurrently) version 8.2.0

Dependancies instalation commands:
```
Backend dependancies:
$ npm install express
$ npm install nodemon
$ npm install mongoose
$ npm install cookie-parser
$ npm install jsonwebtoken
$ npm install bcrypt                
$ npm install dotenv
$ npm install concurrently   

Frontend dependancies:
$ npm install react
$ npm install react-router-dom
$ npm install react-bootstrap
$ npm install boostrap
$ npm install boostrap-icons
$ npm install axios
                                  
```

#

#Instalation:

Create a folder where you will store all files for this page:
```
git clone https://github.com/KenDzhi/CA_Final_project.git
cd ca_final_project
```
In ./CA_final_project/backend 

add your JWT secret key.

add your MongoDB connection key.

#

#Starting a client and server:

For a conveniece both client and server starts with one command:
```
cd backend
npm install
npm run start-both
```
If everything is ok, you should see a message 
```
" MongoDB connected SUCCESFULY " and "  You can now view frontend in the browser. "
```
#
#
#Pretty much thats it. As I've mentioned, the project is not finished yet and is currently in development proccess.



