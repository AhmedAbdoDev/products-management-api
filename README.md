
# RESTful API for Product Management

This project is a simple RESTful API for managing products using **Node.js**, **Express.js**, and **MongoDB**. It provides basic CRUD operations for adding, retrieving, updating, and deleting products. This project is ideal for understanding and developing backend applications.

---

## **Features**
- Add new products with details (name, description, price, category).
- Retrieve a list of all products.
- Get details of a specific product by its ID.
- Update product details.
- Delete a product from the database.

---

## **Technologies Used**
- **Node.js**: For building the server.
- **Express.js**: For creating the API.
- **MongoDB**: As the NoSQL database.
- **Mongoose**: For interacting with MongoDB.
- **Cors**: To enable communication between frontend and backend.
- **Body-Parser**: For handling incoming request data.

---

## **Running the Project Locally**

### **1. Prerequisites**
- Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community).

### **2. Steps to Run**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/product-management-api.git
   cd product-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run MongoDB locally:**
   Ensure MongoDB is running on your system, or update the database connection string in `server.js`.

4. **Start the server:**
   ```bash
   nodemon server.js
   ```

5. **Access the API:**
   - The server runs at:
     ```
     http://localhost:5000/api/products
     ```

---

## **API Endpoints**

| Method   | Endpoint              | Description                       |
|----------|-----------------------|-----------------------------------|
| `GET`    | `/api/products`       | Retrieve all products.            |
| `GET`    | `/api/products/:id`   | Retrieve a specific product by ID.|
| `POST`   | `/api/products`       | Add a new product.                |
| `PUT`    | `/api/products/:id`   | Update an existing product.       |
| `DELETE` | `/api/products/:id`   | Delete a specific product.        |

---

## **Project Structure**
```
product-management-api/
├── server.js             # Entry point of the project
├── models/
│   └── Product.js        # Product schema using Mongoose
├── routes/
│   └── productRoutes.js  # API routes for products
└── package.json          # Dependencies file
```

---

## **Example Requests**

### **1. Add a New Product (POST /api/products):**
**Request:**
```json
{
  "name": "Laptop",
  "description": "A high-performance laptop",
  "price": 1500,
  "category": "Electronics"
}
```

**Response:**
```json
{
  "_id": "64c123abc1234567890efgh",
  "name": "Laptop",
  "description": "A high-performance laptop",
  "price": 1500,
  "category": "Electronics",
  "createdAt": "2025-01-20T12:00:00.000Z",
  "__v": 0
}
```
