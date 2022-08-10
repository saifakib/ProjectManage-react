import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import store from './store'
import { StoreProvider } from 'easy-peasy'
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <StoreProvider store={store}>
  //     <App />
  //   </StoreProvider>
  // </React.StrictMode>
  <StoreProvider store={store}>
    <CssBaseline />
    <App />
  </StoreProvider>
)
