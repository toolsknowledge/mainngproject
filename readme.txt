https://github.com/toolsknowledge/mainngproject.git


Module1
-------

1) deploy the images to s3 bucket

        name of the bucket : mainngproject


        images path
        -----------

        https://mainngproject.s3.ap-south-1.amazonaws.com/p1.jpg

        https://mainngproject.s3.ap-south-1.amazonaws.com/p2.jpg

        https://mainngproject.s3.ap-south-1.amazonaws.com/p3.jpg

        https://mainngproject.s3.ap-south-1.amazonaws.com/p4.jpg

        https://mainngproject.s3.ap-south-1.amazonaws.com/p5.jpg

        https://mainngproject.s3.ap-south-1.amazonaws.com/p6.jpg


2) store above images path to mongodb atlas database

    URL : https://account.mongodb.com/account/login

        database name : mainngproject

        collection name : products

        Connection URL : mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mainngproject?retryWrites=true&w=majority



15-06-2021
----------

develop the server
******************

1) create the directory

    Ex.
        backend

2) switch to backend directory

        > cd backend


3) download the node modules

        => express

                - express used to develop the rest apis.

                    Ex.
                            GET

                            POST

                            PUT

                            DELETE

                            HEAD

                            ----
                            ----
                            ----

        => mongoose

                - used to connect to mongodb database with "schema"

                - schema means rules and regulations.

        => cors

                - used to enable the "cors policy".

        => body-parser

                - used to receive the data from frontend(Angular) application

        => encryptjs

                - used to encrypt the passwords, before storing the databases.

        => dotenv
                - used to maintain the configuration files.


        => express-async-handler

                - used to develop the rest services in asynchronous manner.

        => jsonwebtoken

                - used to generate the tokens.

                - in general, we will use these tokens for authentication purpose.

                - these type of authentication we can call token based authentication.


    - we will download above libraries by using either npm tool, or yarn tool.


> yarn add express express-async-handler mongoose mongodb jsonwebtoken cors body-parser encryptjs dotenv --save

Note : automatically above libraries downloads to node_modules directory in current path.


4) create the modal

        productModal.js

        finally "Product" model is ready.

5) develop rest api

        server.js


6) start the server

        > node server

7) test the rest api by using Postman

        > http://localhost:8080/api/products


8) install following angular version

        > npm install -g @angular/cli@11.2.3


9) create the angular application

        > ng new frontend

        frontend is the name of the angular application.


10) switch to angular application

        > cd frontend


11) download the modules.

     @ngrx/effects ===> 11.0.1

     @ngrx/store   ===> 11.0.1

     ng-http-loader     ===> 9.1.0


                > yarn add @ngrx/effects@11.0.1 @ngrx/store@11.0.1 ng-http-loader@9.1.0 --save


12) include "font-awasome CDN" in index.html

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />


13) implement the state management

       => model   (http://localhost:8080/api/products)

       => service

       => intreceptor

       => actions

       => effects

       => reducer

       => selector

       => component

       => CSS3 Flex Box Design & Media Queries

       => custom module

       => Single Page Applications

       => configuration files   (read urls)

       => unit test cases

       => debugging

       => AWS Deployment


create the model
----------------

                ******************************************
                frontend
                        src
                           app
                              Home
                                 model
                                   product.model.ts
                ******************************************

                finally "Product" model is ready.


create the service
------------------

        **************************************************
        frontend
               src
                 app
                   Home
                     service  
                        product.service.ts
        **************************************************

        finally "ProductService" is ready with "getProducts()" function

create the intreceptor
----------------------

        intreceptor is used to make the "headers" to rest api calls.


*****************************************
frontend
       src
         app  
           Home
             intreceptor
                product.intreceptor.ts
******************************************

                finally "productIntreceptor" is ready.



                

19-06-2021
==========
create HomeComponent
create HomeModule
make the "HomeComponent" as" Default Component" in HomeModule.
make the "HomeModule" as Default Module in "AppModule".



22-06-2021
==========
        implement the State management

                => model

                        - already we developed "Product" model

                => actions

                        *******************************************
                        frontend
                                src
                                   app
                                     Home
                                        actions
                                              home.actions.ts 
                        ********************************************
                                finally "HomeAction" enum is ready.

                                and following classes also ready.

                                                1) ProductsLoading

                                                2) ProductsLoadingSucccess

                                                3) ProductsLoadingFail

                                                => HomeActionTypes 




                => effects
                        ************************************
                        frontend
                               src
                                 app
                                   Home
                                     effects
                                        home.effects.ts
                        *************************************
                                finally "HomeEffects" is ready with getProducts variable.

                => reducer
                        **************************************
                        frontend
                              src
                                app
                                  Home
                                     reducer
                                        home.reducer.ts
                        **************************************
                        finally "HomeReducer" is ready.

                => store

                => selector
                        ***************************************
                        frontend
                                src
                                  app
                                     Home
                                        selector
                                             home.selector.ts
                        ***************************************
                                finally "allProducts" selector is ready.

                => dispatch & subscription in HomeComponent



24-06-2021
==========
create the common components

*********************************************
frontend
       src  
          app
             common
                 rating.component.ts
                 rating.component.html
*********************************************

Empty Star ===> far fa-star

Half Start ===> fas fa-star-half-alt

Full Star  ===> fas fa-star





AWS Deployment
==============
1) install aws cli tool

        website : https://aws.amazon.com/cli/

        file    : AWSCLIV2.msi


2) create the secuirity and authority credentials to upload angular project to aws

        IAM


3) prepare the angular build

        > ng build

        once if build is ready, automatically "dist" folder will create in current location.


4) create the s3 bucket

        {
                "Version": "2012-10-17",
                "Statement": [
                        {
                        "Sid": "PublicReadGetObject",
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": [
                                "s3:GetObject"
                        ],
                        "Resource": [
                                "arn:aws:s3:::ashokitmainproject/*"
                        ]
                        }
                ]
	}


5) perform CI/CD Operation from angular project to "aws" server

        package.json


        "aws-deploy":"aws s3 sync dist/frontend/ s3://ashokitmainproject"


6) execute the following commnads to perform CI/CD Operations

        > aws configure

        > ng build && npm run aws-deploy



Assignment Question
===================
Detail
        1) model

        2) service

                => http://localhost:8080/api/products/{id}

        3) actions

        4) effects

        5) reducer

        6) selector

        7) dispatch & subscription in DetailComponent



09-07-2021
==========

                        RatingComponent

                        sharedModule




HomeModule                                      DetailModule



                                                CartModule
                                                ==========

        => navigate from DetailModule to CartModule with (_id & qty)



********************************************************************
frontend
       src
         app
           Cart
             component
                cart.component.ts
                cart.component.html

            module
                cart.module.ts

            actions
                cart.actions.ts

            effects
                cart.effects.ts

           reducer
                cart.reducer.ts

           selector
                cart.selector.ts

           ----
           ----
           ----
           
























































































































































        































                            


































