[![Youtube][youtube-shield]][youtube-url]
[![Facebook-Page][facebook-shield]][facebook-url]
[![Facebook-Group][facebook-shield]][facebook-group-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT Title -->
<br />
<p align="center">
  <h3 align="center"><a href="https://github.com/learnwithsumit/think-in-a-react-way">React Router Version 5 Example - Think in a React way Tutorial Series [ in Bangla ]</a></h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Changes to upgrade to version-6.1](#upgrade)
- [About](#about)
- [How to run](#how-to-run)
- [Contact](#contact)

<!-- How to upgrade to 6.1 from version 5.3 -->

## Changes to Make to upgrade to 6.1 from version 5.3

1. npm i react-router-dom@6.1
2. swap Switch with Routes
3. Instead of Providing tho route-path-element as a child Component, Need to provide it as an Attribute of Route...
4. Due to change in the algorithm, don't need to provide 'exact' in Route, exact is a by default in new algorithm.
5. Redirect does not exist, need to swap Redirect with Navigate Component, with to='' attribute...
6. On the path of our Route we can use /\* to match anything to that path

- Example: /posts/\* means anything after /posts/ is reachable, this implicit Declaration,
- But with Explicit Declaration of /posts/:postId, First parameter after /posts/1st will go Down to post page, Because of that asterisk,
- Though Second parameter after /posts/1st/2nd is going to go to posts page, because nothing explicit was Declared for that....

7. activeClassName does not Exist in NavLink Component, We can now use a simple className, Can get an Object with render prop pattern Called navInfo, Which contains a property called isActive

8. To work with a Nested route inside a Component we need to wrap it inside a Routes Component, and also pass the child as an attribute of Route, inside element attribute... And also need to add asterisk to the parent of that path, and need to mention only the relative path,

- Example of Wrong: ["/hello/world"]
- Example of Right: ["world"]

9. To Better the Design Pattern we Can get all the Routes and nested Routes inside Routes Component in one single file,

10. TO Render Nested Route we have to use OUTLET component inside our desired Component,

11. To wander from route to route Programmatically in Version @6.1 and above we can use useNavigate Hook, instead of useHistory Hook from Version @5.3.

12. As the first parameter we can give the path to go to, or use Negative integers like -1 or -2 .... to Navigate,
13. As the 2nd Parameter we can give an Object to pass a few options as properties, like we can replace: true....

<!-- HOW TO RUN -->

## About

This is the example project built with react-router 5 shown in Lesson 45.

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this project in your computer:

1. Clone this repository
   ```sh
   git clone https://github.com/learnwithsumit/think-in-a-react-way.git
   ```
2. Checkout to branch "router-5"
   ```sh
   git checkout router-5
   ```
3. Install VS Code Live Server plugin and start the server as described in youtube tutorial video
4. Your app should be available in http://localhost:5500

<!-- CONTACT -->

## Contact

Sumit Saha - [sumit@learnwithsumit.com](mailto:sumit@learnwithsumit.com)

Project Link: [https://github.com/learnwithsumit/think-in-a-react-way](https://github.com/learnwithsumit/think-in-a-react-way)

Youtube Playlist Link: [https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr)

Youtube Channel: [https://youtube.com/LearnwithSumit](https://youtube.com/LearnwithSumit)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=flat-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/LearnwithSumit
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/letslearnwithsumit
[facebook-group-url]: https://facebook.com/groups/learnwithsumit
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/learnwithsumit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/company/learnwithsumit
