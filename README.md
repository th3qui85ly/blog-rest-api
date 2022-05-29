# blog-rest-api
`REST api built using Nodejs Express Mongodb to facilitate a blogging system`

`Description:`

`The API supports following operations:
- Adding new Blogs to the backend system – blog would have properties like title,
description, labels, author, etc.
- Ability to list all blogs by popularity (maximum number of likes appears on top
of list)
- Ability to search blogs based on author and title
- Ability to publish blog after it is saved
- Ability to view a blog
- Ability to like a blog`


## To access the API:

There is no requirement to install anything above this URL fetching!
One can easily access the endpoints using any ARM like Postman, etc.

`Base URL: ` ### https://blog-api-v2.herokuapp.com

--- 

[![Project Link](https://img.shields.io/badge/Project%20Link-%20-orange)](https://blog-api-v2.herokuapp.com)


## 1. To Create a Blog 

### Request:

    POST  /createblog

        {
            "title":"blog title",
            "description":"blog description",
            "label":["blog_label"],
            "author":"blog_author",
            "likes":like counts
        }

### Response:


        success:{
            "status": "success",
            "data": {
                    "title" : "blog title",
                    "description" : "blog description",
                    "label":["blog_label"],
                    "author":"blog_author",
                    "likes":like counts
                    }
               }
        error: { 
                   status: "failed",
                   error 
               }


## 2. To list blogs on the basis of popularity (highest likes first)

### Request

    GET /listblog

### Response

    success (Status Code 200): 
            {
              status : "success",
              blogs : blogs      
            }

    failure (Status Code 401): 
            {
                status : "failed",
                error : error
            }


## 3. Search Blogs based on Author and Title

### Request

        GET /search?author=authorName&title=titleName

### Response

    success (Status Code 200)
        {
              status: "success",
              data    
        }

    failure (Status Code 401)
        {
              status: "failed",
              message: "NO blogs found or some error occured!",
        }


## 4. Publishing a blog after it is saved

### Request

        PATCH /publish/:id

### Response

        success (Status Code 200)
            {
                  status: "Blog published",
                  id: id
            }

        failure (Status Code 401)
          {
                  status: "failed",
                  message: "Couldn't publish the blog",
                  err
          }
  

  ## 5. Viewing a Blog

  ### Request
  
          GET /:id

  ### Response

          success (Status Code 200)
         {
              status: "success",
              data
         }

         failure (Status Code 401)
          {
               status : "failed",
               err
          }

## 6. Lking a blog

### Request

        POST /post/updatelikes/:id

### Response

        success (Status Code 200)
        {
              status: "success",
              message: "Like updated!",
              payload
        }
        
        failure (Status Code 401)
        {
              status: "Like not sent"
        }
