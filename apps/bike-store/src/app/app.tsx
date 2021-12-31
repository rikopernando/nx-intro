import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Header } from '@stores/header'

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="bike-store" />
      <div />
    </>
  );
}

export default App;
