# leadChecker2000
Record page LWC - can be used in the Lead Record Page in the Lightning Record Page editor. In theory, you can use it in other places as well, but it will fail -- trust me. 

**The pupose of this project was to get familiar with LWC in LRP, leveraging wire services, and getting familiar with admin configuarable toast messages**

Functionality: 

1. Displays the following fields from the Lead Object on a Lightning Card (leveraging: Lightning-record-form):
  a. Lead First Name
  b. Lead Last Name
  c. Lead Title
  d. Lead Email
  e. Lead Source
  f. Lead Industry
  g. Lead Company

2. Admin user can drag and drop component anywhere on the Lead Lightning Record Page. 
    a. In the configuration menu the admin can enter the text they would like for the toast message to be displayed on success:
         i. Toast Title - The front messsage part of the toast message (IE: the header) 
         ii. Toast Body - The remainder of the toast message 


**Component**
![image](https://user-images.githubusercontent.com/58155079/147495653-c2d1aad0-de0b-46a2-9c2d-951b8e49c05d.png)

**Configuration (Toast)**
![image](https://user-images.githubusercontent.com/58155079/147495873-6805eeaf-62a7-4a4e-b414-5cfa24aa7779.png)


**Example Toast Message**
![image](https://user-images.githubusercontent.com/58155079/147495780-944296de-a487-428c-8e3f-f8d96a519c5f.png)
