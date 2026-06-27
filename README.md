# Project Name

> HelpHub lets corporate clients raise support tickets, attach supporting files, exchange comments with support staff, and consult a curated knowledge base. Support staff triage and resolve tickets; supervisors and administrators oversee the operation and read reports

## Tech Stack

* Node.js
* Express.js
* Database (MongoDB)
* JWT Authentication (if applicable)

---

## Prerequisites

* Node.js >= 18
* npm >= 9

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd <project-name>
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root.

```env
PORT= < server port>
DB_URL= < mongo db connection url>
jsonToken= <json token for encyption>
ENCRPT_ROUND= <  salt rounds >
INVITE_CODE= <invite code for agent and supervisor>
ADMIN_USER= <secret key for admin>
```

### Start the application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Build (if applicable)

```bash
npm run build
```

---

## Project Structure

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── app.js
└── server.js
```

---

## API Documentation

Document all implemented endpoints.

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |

            Authentication
| POST    | /api/auth/register     | register user      |
| POST    | /api/auth/login        | login user         |
| GET     | /api/auth/me           |  Get log in user   |

            Client Accounts
| GET    | /api/clients            | get clients    |
| GET | /api/clients/:id            | get single clients    |
| PATCH | /api/clients/:id/verify           | mark as verify    |
| PATCH | /api/clients/:id/deactivate           | deactivate    |

            Tickets
POST    | /api/tickets | create ticket
GET     | /api/tickets | get ticket
GET     | /api/tickets/:id | get one ticket
---

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm start`     | Run production server  |
