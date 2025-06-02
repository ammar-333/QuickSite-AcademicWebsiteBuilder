# QuickSite

QuickSite is an AI-powered Academic-Website-Builder designed to help academics create professional websites effortlessly. It automates the process of building a website, integrating publications, and managing content, allowing researchers to focus on their work.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

---

### 🧹 Tech Stack

* **Frontend**: React (with Vite), JavaScript, Tailwind CSS
* **Backend**: ASP.NET Core Web API
* **Database**: SQL Server DB
* **Package Manager**: Yarn (frontend), .NET CLI (backend)

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

### Using .NET CLI:

```bash
dotnet run
```

By default, it will be available at: [https://localhost:5001](https://localhost:5001)

You can configure the port and environment in `launchSettings.json` or via CLI.

---

## 🔄 Connecting Frontend and Backend

Update the API base URL in your frontend code (e.g., in an `.env` or config file):

```env
VITE_API_URL=https://localhost:5001
```

Make sure CORS is enabled in your ASP.NET API to allow communication between frontend and backend.

---

## ✅ Features

* 🔐 User authentication
* 📄 CRUD operations
* ⚡ Fast dev experience with Vite
* 🔌 RESTful API with ASP.NET Core

---

## 📖 License

MIT – feel free to use and modify.
