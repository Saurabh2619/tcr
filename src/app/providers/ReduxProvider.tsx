'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust if needed

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
 