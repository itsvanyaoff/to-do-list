import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: '2 действие',
    isDone: true
  },
  {
    id: 2,
    text: '3 действие',
    isDone: false
  },
  {
    id: 3,
    text: '4 действие',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage todos={todos} />
      },
      {
        path: 'todo',
        element: <ToDoListPage />
      },
      {
        path: 'list/:id',
        element: <ItemDescription todos={todos} />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);