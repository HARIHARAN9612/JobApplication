import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Nav from './Fresh/Navbar';
import Post from './JobBack/POST/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="834816516750-bogp2n47h80kn88k850n3oqtglud4he9.apps.googleusercontent.com">
    <App/>
  </GoogleOAuthProvider>
);
