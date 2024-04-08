<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Todo List App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 {
            margin-bottom: 20px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
        code {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Simple Todo List App</h1>
        <p>This project is a simple web application developed using React functional components and hooks for state management. It allows users to add, mark as done, and delete tasks in a todo list.</p>

        <h2>Running the Project</h2>
        <p>To run the project, follow these steps:</p>
        <ol>
            <li>Install dependencies by running: <code>   npm install   </code></li>
            <li>Start the JSON server to simulate a backend: <code>   npx json-server --watch data/db.json --port 3001   </code></li>
            <li>Start the React application: <code>   npm start   </code></li>
        </ol>

        <h2>Dependencies</h2>
        <ul>
            <li>axios: ^1.6.8</li>
            <li>react: ^18.2.0</li>
            <li>react-dom: ^18.2.0</li>
            <li>uuid: ^9.0.1</li>
        </ul>

        <h2>DevDependencies</h2>
        <ul>
            <li>@types/react: ^18.2.66</li>
            <li>@types/react-dom: ^18.2.22</li>
            <li>@types/uuid: ^9.0.8</li>
            <li>@typescript-eslint/eslint-plugin: ^7.2.0</li>
            <li>@typescript-eslint/parser: ^7.2.0</li>
            <li>@vitejs/plugin-react: ^4.2.1</li>
            <li>autoprefixer: ^10.4.19</li>
            <li>eslint: ^8.57.0</li>
            <li>eslint-plugin-react-hooks: ^4.6.0</li>
            <li>eslint-plugin-react-refresh: ^0.4.6</li>
            <li>postcss: ^8.4.38</li>
            <li>tailwindcss: ^3.4.3</li>
            <li>typescript: ^5.2.2</li>
            <li>vite: ^5.2.0</li>
        </ul>

        <h2>Credits</h2>
        <p>This project was developed by me as a demonstration of React and JSON Server usage.</p>

        <p>Feel free to reach out with any questions or feedback!</p>
    </div>
</body>
</html>
