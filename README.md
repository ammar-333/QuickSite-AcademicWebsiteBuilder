# QuickSite

QuickSite is an AI-powered Academic-Website-Builder designed to help academics create professional websites effortlessly. It automates the process of building a website, integrating publications, and managing content, allowing researchers to focus on their work.


### 🧹 Tech Stack

* **Frontend**: React (with Vite), JavaScript, Tailwind CSS
* **Backend**: ASP.NET Core Web API
* **Database**: SQL Server DB
* **Package Manager**: Yarn (frontend), .NET CLI (backend)

---

## ✅ Features

* 🔐 User authentication
* 📄 CRUD operations
* ⚡ Fast dev experience with Vite
* 🔌 RESTful API with ASP.NET Core

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

---



## 📋 Prerequisites

Before running the project, make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
- Visual Studio or any IDE that supports .NET

---


## 📂 Project Structure

```
/project-root(Quicksite)
│
├── /frontend     # React app (Vite)
│
└── /backend      # ASP.NET Core Web API
```

---

## 👥 Running the Frontend

In the `/frontend` directory:

### Install dependencies:

```
yarn install
```

### Start development server:

```
yarn dev
```

By default, it runs at: [http://localhost:3000](http://localhost:3000)

The app supports hot module replacement and reloads automatically on code changes.

---

## ⚙️ Running the Backend

In the `/backend` directory:


### Using visual studio:

```
Run with https
```

By default, it will be available at: [https://localhost:7139](https://localhost:7138)

---

## 🔄 Connecting Frontend and Backend

Update the API base URL in your frontend code ( in `Vite.config` file):

```
 target: 'https://localhost:7138',
```

Make sure CORS is enabled in your ASP.NET API to allow communication between frontend and backend.

---

## ⚙️ Setting Up the Database

Follow the steps below to configure and run the database:

### 1. Update the Connection String

Open the `appsettings.json` file and update the connection string with your own SQL Server instance:

```json
"ConnectionStrings": {
  "QuickSiteConnectionString": "Server=YOUR_SERVER_NAME;Database=QuickSiteDb;Trusted_Connection=True;TrustServerCertificate=True"
}
```

### 2. Apply Migrations

Open Package Manager Console
(Tools → NuGet Package Manager → Package Manager Console) and run the following commands:
* Add-Migration "InitialCreate"
* Update-Database


## 🎉 You're All Set!
Your website is now running and ready to use.

---

## 📖 License

MIT – feel free to use and modify.
