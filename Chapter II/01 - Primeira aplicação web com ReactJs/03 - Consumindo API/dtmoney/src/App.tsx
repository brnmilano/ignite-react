import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs'

export function App() {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createdAt: new Date(),
          },
          {
            id: 2,
            title: 'Transaction 2',
            amount: 1000,
            type: 'deposit',
            category: 'Computer',
            createdAt: new Date(),
          }
        ]
      })
    },
  })

  return (
    <>
      <Header />

      <Dashboard />

      <GlobalStyle />
    </>
  );
}