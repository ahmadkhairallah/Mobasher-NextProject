# MyStore - Next.js Application

## Overview
MyStore is a modern, scalable, and responsive e-commerce web application built with **Next.js**, **TypeScript**, and **Apollo Client**. It leverages **GraphQL APIs** to fetch product and category data and uses Zustand for state management. The application is designed to provide an exceptional user experience with features like pagination, lazy loading, dynamic routing, and a responsive design.

---

## Features
- **Dynamic Categories**: Explore a wide range of product categories and subcategories.
- **Product Listing**: View products with pagination and lazy-loaded images for performance optimization.
- **Product Details**: Access detailed information about individual products, including reviews and specifications.
- **Responsive Design**: Optimized for all devices, from mobile phones to desktops.
- **State Management**: Manage product data with Zustand for seamless global state handling.
- **GraphQL Integration**: Utilize GraphQL APIs for efficient data fetching.

## Technologies Used
- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **GraphQL**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/my-store.git
   cd my-store

2. Install dependencies:
    npm install

3. Create a .env file in the root directory:
    NEXT_GRAPHQL_API_URL=https://graphql.canopyapi.co/
    NEXT_GRAPHQL_API_KEY=your_api_key_here

4. Run the development server:
    npm run dev

5. Open the application in your browser: 
    http://localhost:3000
    

Key Features & Functionality

Categories Page
API Integration: Fetches root categories using GET_ROOT_CATEGORIES GraphQL query.
UI Components: Displays categories in a clean, responsive layout.

Subcategories Page
Dynamic Routing: Each category dynamically loads its subcategories.
State Management: Leverages Zustand for global product state.

Product Listing
Pagination: Products are paginated for better user experience.

Product Details
Detailed View: Displays reviews, images, price, and more.
Dynamic Routing: Fetches product details dynamically via productId.

Environment Variables
NEXT_GRAPHQL_API_URL: The base URL for the GraphQL API.
NEXT_GRAPHQL_API_KEY: Your API key for authenticating GraphQL requests.

Scripts
npm run dev: Run the application in development mode.
npm run build: Build the application for production.
npm start: Start the application in production mode.


Future Enhancements
Search Functionality: Add a global search bar for finding products.
User Authentication: Integrate login/signup functionality.
Cart System: Allow users to add products to a cart and checkout.
Error Handling: Enhance error pages for better user experience.




























This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
