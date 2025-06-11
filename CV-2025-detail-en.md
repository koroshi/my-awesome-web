# Personal Information

Name: Chen Xincong (Male)    Date of Birth: November 1990    Contact Number: 18116302795

Work Experience: Over 10 years    Position: Web Engineer    Email: STLCXC@163.com


# Project Experience
### PwC Information Technology (Shanghai) Co., Ltd.
- **PwC Workforce Orchestrator (March 2019 - June 2023)**
  > Enhance your team's productivity and engagement by offering tailored digital experiences that promote decisive actions. Workforce Orchestrator serves as a smart digital platform that seamlessly links individuals, information, and applications in real-time, fostering a more efficient, dynamic, and engaging working environment. By delivering customized experiences, you can ensure that employees remain focused and productive through a mobile engagement platform that transforms broad communications into significant one-on-one dialogues. You can send personalized messages to various segments of your workforce while managing tasks and crucial activities effortlessly within a unified application. Additionally, address frequent inquiries and requests instantly with a reliable, automated chatbot that has been pre-programmed for efficiency. Collect ongoing feedback through pulse surveys to gain insights into real-time workforce sentiment, allowing for timely adjustments. Furthermore, support your employees through technology rollouts, organizational changes, and strategic initiatives by providing clear and actionable communications at each phase of the process. This holistic approach not only empowers workers but also fosters a culture of continuous improvement within the organization.
  - Technology Stack: Angular, graphql, nodejs, express, typescript, gcp-firebase, gcp-pub-sub, postgresql, google-dialogflow, redis
  - Assisted in fixing front - end bugs.
  - Implemented a distributed server - side push system using firebase.
  - Handled various back - end asynchronous data processing using pubsub, express, and graphql.
  - Implemented intelligent customer service, bound natural language processing with actions using dialogflow, and achieved intelligent interaction on teams, SMS, and web versions.
- **Model Edge (June 2023 - June 2024)**
  > A better model for model governance and validation.
Model Edge enables managemethn the end-to-end model lifecycle while facilitating the management, development, validation and governance of your entire portfolio (including AI) – all in one place. Model Edge streamlines operations and helps you gain confidence in your program by providing the tools necessary to demonstrate model effectiveness (and explain ability) to internal and external stakeholders alike.
  - Technology Stack: Angular, graphql, nodejs, express, typescript, gcp - pub - sub, postgresql, redis
  - Assisted in fixing front - end bugs.
  - Participated in the design and development of the questionnaire creation and answering system, as well as the risk calculation logic after answering.
- **Internal POC Project AI Flow Creator (July 2024 - May 2025)**
  > An AI low - code platform based on Flowise, which integrates the company's internal systems and customizes the front - end AI and some components. It allows for easy construction of AI robots on this platform.
  - Technology Stack: React, nodejs, express, typescript, long - chain, redis
  - Participated in the design and development of the integration with the company's systems, such as single sign - on for users, binding and grouping of user resources, internalization of some components' back - end ai - component, and runtime library. The front - end exports a structure for runtime, and the chat component supports some plugins, such as enabling the AI's answers to support icons (plotly.js).
- **Concourse (July 2024 - May 2025)**
  > A delivery platform that makes a complicated engagement streamlined, smart and transparent.
  - Technology Stack: React, nodejs, nest.js, typescript, graphql, redis
  - Maintained various data CRUD APIs on the back - end.
  - Participated in the design and development of the home page on the front - end.
  - Wrote some scripts to maintain or update some customer data.

### Shanghai Xiudian Network Technology Co., Ltd.
1. **Server - side**
   - **A TV Station App (October 2018 - February 2019)**
     > An app with functions such as TV program viewing and reminder, shopping mall, games, and red - envelope snatching.
     - Technology Stack: nodejs, egg.js, typescript, redis
     - Participated in the discussion and design of interface specifications during the app docking phase, unifying the entire client interface standards.
     - Developed the entire logic of the koi event, and reasonably used message queues in the design to decouple the app's native logic from the event logic.
     - Developed a prize distribution logic for the lottery logic, used for normally distributed prizes.
     - In the use of redis: stored tokens in redis to achieve session sharing and avoid the disadvantage that JWT cannot control the issuance time midway; implemented the most frequently played games through sortedset; and implemented scheduled tasks through expired keys.
     - Participated in the invitation test of Alibaba Cloud interactive live - streaming and designed part of the live - streaming logic prototype.
   - **Xiudian 2.0 (August 2018 - October 2018)**
     > An e - commerce platform, including products, inventory, etc. (I participated in the promotion part, partner rule - making, and profit - sharing settlement).
     - Technology Stack: nodejs, egg.js, typescript, redis
     - Developed the promotion module's app - side interfaces (meeting the requirements of Android and iOS).
     - Participated in the development of background interfaces (participated in some business logic design and development).

### Shanghai Jinqiao Information Co., Ltd.
1. **Server - side**
   - **Conference Platform System (October 2016 - August 2018)**
     > A conference system based on third - party audio - video SDKs. It can create, schedule, control, live - stream, and record meetings. It has derived customized products for the education industry (public - class live - streaming) and the court industry (execution on - duty).
     - Technology Stack: nodejs, express, backbone.js, Alibaba Cloud, mongodb
     - **Design Phase**:
       1. Introduced the concept of an authentication center to solve the problem that each project had to independently develop a user system and synchronize between systems in previous projects.
       2. Designed unified permission management and external application access management to solve the problem of unified configuration, storage, and distribution for other microservices' access in subsequent development.
       3. Promoted the use of markdown for writing documents, effectively improving the efficiency of document writing, publishing, iteration, and sharing.
     - **Development Phase**:
       1. Developed a third - party node.js SDK to facilitate other colleagues in the company with the same technology stack to access, and provided standard HTTP interfaces for other languages to access.
       2. Participated in the design and development of DingTalk's address book docking, SMS calling, and external live - streaming and recording interface calls, implementing an architecture with single - responsibility for each service.
       3. Used mocha.js, nock, and supertest to implement automated unit tests, effectively reducing the risk of code robustness caused by rapid iteration in the agile development process.
       4. Used the async/await feature of the new version of node.js to further improve the readability of asynchronous code.
       5. Introduced a development process based on git - flow to help the team switch from SVN to Git, solving the problem of excessive and chaotic project codes branched from the basic code. It also ensured the standardization of version release, making development branches clear and team collaboration clear when handling online bugs.
       6. Participated in the design and promotion of the use of a mongodb cluster, improving the system's concurrency performance and database stability. Through optimization, the response time for 1000 QPS requests was reduced from 6s to 3s.
       7. Introduced redis to cache pages, accelerating the rendering efficiency of jade template pages and saving the time for refactoring the template engine.
     - **Deployment Phase**:
       1. Used docker, alinode, and newrelic to manage and monitor the online and test environments. This significantly increased the team's ability to discover code design and difficult bugs, and made performance optimization more intuitive.
       2. Configured nginx and service clusters to make the services managed by the platform unique, and achieved load balancing of each instance under the same service through nginx.
   - **Course Scheduling System (May 2015 - May 2016)**
     > A teacher - based course scheduling system.
     - Technology Stack: nodejs, express, backbone.js, mongodb
     - Increased the use of backbone.js on the basis of the reservation system to develop some abstract components for team reuse.
   - **Meeting Reservation System (October 2014 - December 2015)**
     > A web - based reservation system that cooperates with Android terminals for meeting room reservations.
     - Technology Stack: nodejs, express, backbone.js, mongodb
     - Replaced the company's internal framework with the more open - source express framework, solving the unreliability problems of the original framework, such as only supporting sqlite as the database and all data being persisted in memory.
     - Introduced mongodb as the main database.
   - **Announcement System (October 2013 - October 2014)**
     > A web - based announcement service system that cooperates with Android and Windows terminals.
     - Technology Stack: nodejs, esp (internal framework), backbone.js, sqlite
     - Used async.js to manage the readability of asynchronous code during the callback period.
     - As a beginner in backbone.js at the front - end, implemented component - based development for the first time through the design of functions such as file download, viewing, and management.
2. **Client - side**
   - **WeChat Access Control (October 2015 - October 2016)**
     - Technology Stack: nodejs, express, WeChat official account development
     > Docked with enterprise WeChat and access control providers to open the company's access control system by scanning the code.
     - Tried WeChat docking to solve the problem that some colleagues couldn't enter the company to get things without their access cards.
   - **HTML5 Scan - to - Navigate (February 2016 - June 2016)**
     > A simple navigation process made with HTML, integrated into the access control's built - in WeChat system.
     - Technology Stack: nodejs, express, backbone.js
     - Cooperated with the company's navigation device project at that time to facilitate navigation in environments with few points.
   - Developed table and pagination components based on backbone.js
     - Technology Stack: nodejs, express, backbone.js
     > Summarized from multiple projects and developed some reusable components based on backbone.js, such as customizable tables automatically generated based on collections.
   - Docked with DingTalk's HTML5 mini - app (address book synchronization)
     - Technology Stack: nodejs, express, mongodb
     > Similar to WeChat docking.
3. **Others**
   - Wrote an npm module for Alibaba Cloud SMS (when the official didn't support nodejs at that time).
   - Wrote a simplified simulator for adding points in Fantasy Westward Journey, solving the problem that there was no available point - adding simulator for the current version due to the long - outdated system update.
   - Wrote a third - party API encapsulation module (similar to the SMS system).


# Professional Skills
1. **Server - side**
   - node.js (es6 and async/await), web frameworks such as express and nest.js (language frameworks)
   - Golang language with gin framework
   - Docker (deployment), Linux
   - Databases: mongodb, mysql, postgresql
   - Message queues: rabitmq, MQTT, socket.io, GCP - pub - sub, Azure - service - bus
   - Nginx (load balancing)
   - Redis (caching)
   - Graphql (data transfer framework)
2. **Client - side**
   - backbone.js (component - based basic framework)
   - React, Angular
3. **Tools**
   - Git, familiar with the git - flow process
   - VSCode (friendly to TypeScript)
   - Mocha, Postman (testing)
   - Restful API
   - Markdown (documentation)
   - GitHub Copilot (AI code tool)

# Education Background

Shanghai Second Polytechnic University    Bachelor's Degree    Software Engineering Major    English (CET - 4)