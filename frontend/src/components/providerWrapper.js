"use client";
import { Provider } from 'react-redux';
import store from '../stores/store';

export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
