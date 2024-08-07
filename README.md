# Testing the API Endpoints

## Prerequisites

Ensure that you have Node.js and npm installed on your system.

## Running the Server

1. **Navigate to the root directory of your project.**

2. **Run the following command to start the server:**

   ```bash
   npm run dev

# Testing Endpoints

Once the server is running, you can test the following endpoints:

### 1. User Endpoint

* **URL:** [http://localhost:3000/user](http://localhost:3000/user)
* **Method:** POST
* **Description:** check user exists or not and then fetch the data.

### 2. User Login Endpoint

* **URL:** [http://localhost:3000/user/login](http://localhost:3000/user/login)
* **Method:** POST
* **Description:** Log in a user. You will need to include the appropriate login credentials in the request body.

### 3. Calculate Tip Endpoint

* **URL:** [http://localhost:3000/tip/calculate](http://localhost:3000/tip/calculate)
* **Method:** POST
* **Description:** Calculate a tip based on the provided data. Include the necessary parameters in the request body.

### 4. Get Tips by Date Range

* **URL:** [http://localhost:3000/tip?startDate=07-08-2024&endDate=08-08-2024](http://localhost:3000/tip?startDate=07-08-2024&endDate=08-08-2024)
* **Method:** GET
* **Description:** Fetch tips within a specific date range. Adjust the `startDate` and `endDate` query parameters as needed.
