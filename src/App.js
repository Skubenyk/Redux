import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction } from './store/customersReducer';
import { removeCustomerAction } from './store/customersReducer';
import { fetchCustomers } from './asyncAction/customers';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={'app'}>
      <div style={{ fontSize: '30px' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Поповнити рахунок
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Зняти з рахунка
        </button>
        <button onClick={() => addCustomer(prompt())}>Додати клієнта</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Отримати клієнтів із бази
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{ fontSize: '2rem', marginTop: '5px' }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem' }}>Клієнти відсутні!</div>
      )}
    </div>
  );
};

export default App;
