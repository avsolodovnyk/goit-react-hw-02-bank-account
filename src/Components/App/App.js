import React from 'react';
import { ToastContainer } from 'react-toastify';
import Dashboard from '../Dashboard';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <>
      <Dashboard />
      <ToastContainer />
    </>
  );
}
