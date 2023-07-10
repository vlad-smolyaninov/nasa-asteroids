# NASA asteroids challenge
Create an app to see information about asteroids. The app should:
- Display a list of asteroids
- Search by a range of dates
- See the detail of the asteroids by clicking on one of the items
- Sort the asteroids by name

Optional
- Add them to favourite
- Show a list of favourite
- Display details of favourite asteroids by click on the items form the list

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Summary
Stack: Next.js, React, Typescript, react-query, styled-components, Jest, node-cache, ajv, 

Since Nasa api is not quite stable (and have strict request limits), I used caching for requests on server using node-cache and also on a frontend using react-query. 

### Potential improvements

- For optional feature of favorites asteroids I would add database layer (migrations, seeds) and docker configuration to work with it locally
- For better UX it's nice to add responsive grid (custom, or using some lib)
- To scale project better I would add some state manager based on future needs (redux, sagas, mobx, zustand...)
- For future scaling I would consider using redis for caching requests, not node-cache. Or maybe parsing all the data into internal database.

# SQL challenge
Suppose you have a database with three tables: "users", "orders", and "products". The "users" table contains columns id, name, and email. The "orders" table contains columns id, user_id, product_id, quantity, and created_at. The "products" table contains columns id, name, price, and category.

Write a single SQL query that returns a list of all users who have made at least 3 orders in the "Electronics" category and have spent more than $1000 on those orders, sorted by the total amount they have spent in descending order. The output should include the user's name, email, and the total amount they have spent on "Electronics" orders.
### Solution:
```
SELECT
  u.name,
  u.email,
  SUM(o.quantity * p.price) AS total_spent
FROM
  users u
JOIN
  orders o ON u.id = o.user_id
JOIN
  products p ON o.product_id = p.id
WHERE
  p.category = 'Electronics'
GROUP BY
  u.id, u.name, u.email
HAVING
  COUNT(o.id) >= 3
  AND SUM(o.quantity * p.price) > 1000
ORDER BY
  total_spent DESC;
```
*tested on PostgreSQL

