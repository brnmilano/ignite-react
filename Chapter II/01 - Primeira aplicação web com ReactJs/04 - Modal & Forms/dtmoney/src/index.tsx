import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 0,
          title: 'Pagamento',
          type: 'deposit',
          category: 'Pagamento',
          amount: 5464.60,
          createdAt: new Date('2023-04-26 09:00:00')
        },
        {
          id: 1,
          title: 'Internet',
          type: 'withdraw',
          category: 'Casa',
          amount: 109.92,
          createdAt: new Date('2023-04-26 09:01:00')
        },
        {
          id: 2,
          title: 'Telefone',
          type: 'withdraw',
          category: 'Contas pessoais',
          amount: 52.99,
          createdAt: new Date('2023-04-26 09:02:00')
        },
        {
          id: 3,
          title: 'Computador',
          type: 'withdraw',
          category: 'Contas pessoais',
          amount: 321.99,
          createdAt: new Date('2023-04-26 09:03:00')
        },
        {
          id: 4,
          title: 'Cartão de crédito',
          type: 'withdraw',
          category: 'Contas pessoais',
          amount: 600,
          createdAt: new Date('2023-04-26 09:04:00')
        },
        {
          id: 5,
          title: 'Gastos do carro',
          type: 'withdraw',
          category: 'Carro',
          amount: 3000.00,
          createdAt: new Date('2023-04-26 09:05:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
