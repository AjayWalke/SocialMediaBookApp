# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* API Documentation
Below are the necessary API routes and there format:

##### GET : http://127.0.0.1:3000/api/v0/comments/get_all?post_id=3
![Screenshot 2024-07-27 180748](https://github.com/user-attachments/assets/9e0242cf-b786-4552-ac2e-cf366874d11c)


##### GET : http://127.0.0.1:3000/api/v0/users?email=t2@gmail.com&password=12345
![Screenshot 2024-07-27 182051](https://github.com/user-attachments/assets/635d9115-e7e7-48ef-8c91-bac21e12edda)
![Screenshot 2024-07-27 182340](https://github.com/user-attachments/assets/1cec2d7f-6f38-4720-933c-2bdfe1df217f)


##### POST : http://127.0.0.1:3000/api/v0/users
![Screenshot 2024-07-27 182350](https://github.com/user-attachments/assets/50284f40-47c1-49d0-acfb-aa89d0a909ac)


##### GET : http://127.0.0.1:3000/api/v0/posts?user_id=2
![Screenshot 2024-07-27 182557](https://github.com/user-attachments/assets/f05b56e1-4466-48a7-b6c7-89cead86d679)
![Screenshot 2024-07-27 183153](https://github.com/user-attachments/assets/e490d136-d3ef-4ccf-a1b2-9e4ae9b601b9)

##### POST : http://127.0.0.1:3000/api/v0/posts
![Screenshot 2024-07-27 183136](https://github.com/user-attachments/assets/14ada930-4375-47e3-a51b-b702e3e631df)


##### GET : http://127.0.0.1:3000/api/v0/comments/get_all?post_id=3
![Screenshot 2024-07-27 183746](https://github.com/user-attachments/assets/1eec0e78-6c17-47cc-abad-523e0839e35a)
![Screenshot 2024-07-27 183819](https://github.com/user-attachments/assets/22064ddc-6f13-4f9f-a69a-9849d2757d62)


##### POST : http://127.0.0.1:3000/api/v0/comments
![Screenshot 2024-07-27 183758](https://github.com/user-attachments/assets/59917764-4536-43de-9bb1-62a629ad89db)

##### http://127.0.0.1:3000/api/v0/comments/child-comment?parent_id=3
![Screenshot 2024-07-27 205542](https://github.com/user-attachments/assets/27ab16d7-2027-401c-8d82-cdffadd772a9)

* Database creation

* Database initialization

* How to run the test suite
rails generate migration AddColumnToTable
rails generate controller name
rails db:create
rails new app
rails generate data_migration AddDataToTable
rails s
rails db:migrate

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
