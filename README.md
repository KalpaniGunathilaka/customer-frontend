# Customer Portal

## Overview

Customer Portal is an Angular application built to manage customers through the Customer Management API.

## Features

- View all customers
- Create new customers
- Edit existing customers
- Delete customers
- Form validation
- Customer type selection (Personal / Business)
- Angular routing
- API integration using HttpClient

## Technologies Used

- Angular 22
- TypeScript
- SCSS
- Angular Signals
- Signal Forms
- HttpClient
- ASP.NET Core Web API

## Project Structure

```text
src/app
├── core
│   └── customer-api.ts
├── features
│   └── customers
│       ├── customer-list
│       └── customer-form
├── models
│   └── customer.model.ts
├── app.routes.ts
└── app.config.ts
```

## Running the Application

1. Start the Customer Management API.
2. Configure the Angular proxy (`proxy.conf.json`).
3. Run the Angular application:

```bash
npm install
ng serve
```

4. Open:

```text
http://localhost:4200
```

