
# RESTful API for Product Management

This project is a simple RESTful API for managing products using **Node.js**, **Express.js**, and **MongoDB**. 
It provides basic CRUD operations to create, retrieve, update, and delete products.

---

## **Features**
- Add new products with details such as name, description, price, and category.
- Retrieve a list of all products in the database.
- Get details of a specific product by its ID.
- Update product details.
- Delete products from the database.

---

## **Technologies Used**
- **Node.js**: For server-side JavaScript runtime.
- **Express.js**: For building RESTful APIs quickly.
- **MongoDB**: A NoSQL database to store product data.
- **Mongoose**: For MongoDB object modeling and schema creation.
- **Cors**: For enabling cross-origin requests.
- **Body-Parser**: For handling incoming JSON data in requests.

---

## **Live Demo**
(Not available yet. Replace this section with the live URL if deployed.)

---

## **Prerequisites**
- Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community).
- Ensure MongoDB is running locally or set up a MongoDB Atlas cluster.

---

## **Steps to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AhmedAbdoDev/products-management-api.git
   cd products-management-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB**:
   Update the MongoDB connection string in `index.js` or add your MongoDB URI.

4. **Start the Server**:
   ```bash
   nodemon index.js
   ```

5. **Access the API**:
   - Base URL: `http://localhost:3001/api/products`

---

## **API Endpoints**

| Method   | Endpoint               | Description                          | Example Request Body            |
|----------|------------------------|--------------------------------------|----------------------------------|
| `GET`    | `/api/products`        | Retrieve all products.               | None                             |
| `GET`    | `/api/products/:id`    | Retrieve a specific product by ID.   | None                             |
| `POST`   | `/api/products`        | Add a new product.                   | `{ "name": "Laptop", ... }`      |
| `PUT`    | `/api/products/:id`    | Update a specific product.           | `{ "name": "Updated Name", ...}` |
| `DELETE` | `/api/products/:id`    | Delete a specific product.           | None                             |

---

## **Example Requests**

### **1. Add a New Product** (POST `/api/products`)
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

### **2. Get All Products** (GET `/api/products`)
**Response:**
```json
[
  {
    "_id": "64c123abc1234567890efgh",
    "name": "Laptop",
    "description": "A high-performance laptop",
    "price": 1500,
    "category": "Electronics",
    "createdAt": "2025-01-20T12:00:00.000Z",
    "__v": 0
  },
  {
    "_id": "64c123abc1234567890ijkl",
    "name": "Smartphone",
    "description": "A latest-generation smartphone",
    "price": 900,
    "category": "Electronics",
    "createdAt": "2025-01-21T08:30:00.000Z",
    "__v": 0
  }
]
```

---

## **To-Do**
- [ ] Add authentication for secure access.
- [ ] Deploy the project on a live server (e.g., Heroku, Render).
- [ ] Add unit tests for endpoints.

---

## **Contributing**
Feel free to fork this repository, create a feature branch, and submit a pull request with your changes.

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.
