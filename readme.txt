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































                            


































