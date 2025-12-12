# Dish Search API

Simple REST API built with Node.js, Express, TypeORM, and PostgreSQL that returns restaurants for a given dish name and price range.

## Tech Stack

- Node.js
- Express
- TypeScript
- TypeORM
- PostgreSQL

## Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL running locally on port 5432
- A database named `convertcart` created in PostgreSQL

## Setup

1. Install dependencies
npm install
npm install cors dotenv typeorm pg
npm install -D typescript ts-node @types/node @types/express

2. Initialize TypeScript (if not already)
npx tsc --init


## Database Configuration

The DB connection is configured in `datasource.ts`:

- Host: `localhost`
- Port: `5432`
- Username: `postgres`
- Password: `root`
- Database: `convertcart`

Update these values in `datasource.ts` or move them to environment variables if your local setup is different.

The `dishes` table is managed by TypeORM using the `DishesEntity`:

- `restaurentId` (primary key)
- `restaurentname`
- `city`
- `dishname`
- `dishprice`
- `ordercount`

## Running the Project


The server runs on:

- URL: `http://localhost:8085`
- Base path: `/search`

## API Endpoint

### GET `/search/dishes`

Search dishes by name and price range. The search by `dishname` is case-insensitive.

**Query Parameters:**

- `name` (string, required): Dish name or part of the name, e.g. `Biryani`
- `minPrice` (number, required): Minimum price, e.g. `150`
- `maxPrice` (number, required): Maximum price, e.g. `400`

**Example request:**

GET http://localhost:8085/search/dishes?name=Biryani&minPrice=150&maxPrice=700


**Example successful response:**

{
    "dishes": [
        {
            "restaurentId": 8,
            "restaurentname": "Oakaz Restaurent",
            "city": "Indore",
            "dishname": "Paneer Bonanza Pizza",
            "dishprice": 470.5,
            "ordercount": 98
        },
        {
            "restaurentId": 9,
            "restaurentname": "The Sky High Noida",
            "city": "Noida",
            "dishname": "Pizza Margherita",
            "dishprice": 550,
            "ordercount": 67
        }
    ]
}


**404 response (no dishes in range):**

{
"message": "Biryani is not found in this price range"
}

You can then run: npm run dev


