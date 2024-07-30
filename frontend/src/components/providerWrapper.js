"use client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from '../stores/store';

export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
