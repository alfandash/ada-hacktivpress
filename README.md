# ada-hacktivpress
> ada-hacktivpress merupakan simple blog
> Aplikasi ini di buat untuk memenuhi syarat ujian daripada phase 2
> This application has a lot of bug, because this bug purpose to finish the minimum requirment for the examination


## SERVER: REST API
 list of basic routes:

| Route | HTTP | Desription|
|-------|------|-----------|
| `/users/signup/` | POST | Create member username, email, passowrd |
| `/users/signin/` | POST | Signin member to system |

| Route | HTTP | Description | Data Need |
| ----- | ---- | ----------- | --------- | 
| `/blog` | GET | Get all articles | |
| `/blog/:id` | GET | Get detail articles | |
| `/blog` | POST | Create article | |
| `/blog/:id` | PUT | Update Articles | |
| `/blog/:id` | DELETE | Delete Articles | |

## CLIENT: 

.. update soon


### Usage

This project contain 2 side Server and Client:

go to inside server or client, You can use only with npm:
><p>npm install</p>
><p>npm run dev</p> Development mode

After run you can access directly via `http://localhost:300O/`