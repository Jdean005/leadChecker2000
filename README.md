# leadChecker2000
Record page LWC - can be used in the Lead Record Page in the Lightning Record Page editor. In theory, you can use it in other places as well, but it will fail -- trust me. 

**The purpose of this project was to get familiar with LWC in LRP, leveraging wire services, and getting familiar with event handlers such as handlechange and handleSuccess**

Functionality: 

1. Displays the following fields from the Lead Object on a Lightning Card (leveraging: Lightning-record-form):
  a. Lead First Name
  b. Lead Last Name
  c. Lead Title
  d. Lead Email
  e. Lead Source
  f. Lead Industry
  g. Lead Company
  h. Lead Phone

2. Admin user can drag and drop component anywhere on the Lead Lightning Record Page. 
    a. In the configuration menu the admin can enter the text they would like for the toast message to be displayed on success:
          i. Toast Title - The front messsage part of the toast message (IE: the header) 
         ii. Toast Body - The remainder of the toast message 
        iii. Component Title - title displayed on LWC between Lightning Bolts.
        
3. User can update lead from component and have record saved. 


**Component**
![image](https://user-images.githubusercontent.com/58155079/147593905-155534ed-ffb7-4f2a-8d99-273c2b3d36ca.png)

**Configuration (Toast and Title of LWC)**
![image](https://user-images.githubusercontent.com/58155079/147594013-6b24c253-edf5-4718-b014-189767b0d3f2.png)


**Example Toast Message**
![image](https://user-images.githubusercontent.com/58155079/147594301-22ff1d2d-db6b-4ec3-b8d2-46f8c37d848f.png)




