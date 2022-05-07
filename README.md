# Car Warehouse Management

## [Live Website Link](https://home-cook-delight.web.app/)
[https://home-cook-delight.web.app/](https://home-cook-delight.web.app/)

--------------
### Features and Functionality
* There is a navigation bar which navigates to different routes such as Home, Blogs, About, Login and Options (Manage Items, Add Item, My Items) when signed in.

* In Home, there are four sections. First one is a banner, second on is Inventory Items which shows first six items from `MongoDB`, third one is Exclusive Items which shows last four items from `MongoDB` and the last one is image gallery for various cars.

* In Inventories, six items are shown from the database. There is a Update button which will route to inventory/:id which is a private route. There is also a button called Manage Inventories under this section, clicking which will route to Mange Inventories page which is also private.

* In inventories/:id information about the specific car is shown and there is a delivered button, clicking which will decrease the quantity and increase sold items. There is also a form in where user can input restock quantity and it will update the quantity by adding that value to quantity. In this page there is also Manage Inventories button which routes to the same Manage Inventory page.

* In Manage Inventories, all the items are shown in a table. User can delete any item from there. There is a Add Items button under it which will route to Add Items private page.

* In Add Items, User can add a car information to the database.

* There is also My Items route in options when a user is logged in, in addition to manage items and add item. In My Items user will see only his/her items. He/ She can also cancel/delete any items from there.

* In Blogs, Four questions are answered from `MondoDB`.

* In About, some information about the website is added.

* If random path names are given which does not match any route, then it will route to Not Found page.

--------------
### Technologies (Frameworks, Libraries)
* HTML, CSS, Javascript, React, Express JS
* React Router Dom
* Firebase Authentication
* React Firebase Hooks
* React Form Hook
* Bootstrap and React Bootstrap
* MongoDB
* Axios
* JWT
* React Toastify
* Heroku Server
