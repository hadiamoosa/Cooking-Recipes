# 🍽️ Frontend Cooking Recipes App

A full-stack cooking recipes web application built with **React** (Frontend). Users can browse, search, and explore a variety of recipes categorized into **Chinese, Italian, and Desi** cuisines.

## 🚀 Features
- Browse a vast collection of recipes.
- Search for specific recipes by name.
- Filter recipes by category (**Chinese, Italian, Desi**).
- View detailed recipe instructions with ingredients and cooking steps.
- Responsive UI for seamless experience across devices.

## 🛠️ Tech Stack
### Frontend (React.js)
- **React** – Component-based UI development.
- **React Router** – Navigation and routing.
- **Styled Components / Tailwind CSS** – For UI styling 

## 📂 Project Structure
```
📦 cooking-recipes-app
├── 📁 client (Frontend - React)
├── 📁 public (Static Assets)
└── README.md
```

## 📌 Getting Started
### Prerequisites
Make sure you have the following installed
- **npm** or **yarn** (for package management)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cooking-recipes.git
   cd cooking-recipes
   ```

2. Install dependencies for frontend :
   ```sh
   cd client
   npm install   # or yarn install
   cd ../server
   npm install   # or yarn install
   `

3. Start the frontend client:
   ```sh
   cd client
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## 🔥 API Endpoints
### Recipe Routes
- `GET /api/recipes` – Fetch all recipes.
- `GET /api/recipes/:id` – Fetch a specific recipe.
- `GET /api/recipes/category/:name` – Fetch recipes by category (**Chinese, Italian, Desi**).
- `POST /api/recipes` – Add a new recipe (Admin only).
- `PUT /api/recipes/:id` – Update a recipe (Admin only).
- `DELETE /api/recipes/:id` – Delete a recipe (Admin only).

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---
Enjoy cooking with our recipe app! 🍜🍕🍛
