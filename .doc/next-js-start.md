1. **Setting up the Next.js project**

    Install Node.js and npm if you haven't. Install 'create-next-app' to bootstrap a new Next.js application, or use 'npx':

    ```bash
    npx create-next-app my-nextjs-app
    cd my-nextjs-app
    ```

2. **Adding TypeScript for Next.js**

    To add TypeScript, install typescript and the @types packages:

    ```bash
    npm install --save-dev typescript @types/react @types/node
    ```

    Next, add a `tsconfig.json` file in your root folder. Running 'npm run dev' after this will prompt Next.js to auto-populate this file, and you can refine the config to suit your needs.