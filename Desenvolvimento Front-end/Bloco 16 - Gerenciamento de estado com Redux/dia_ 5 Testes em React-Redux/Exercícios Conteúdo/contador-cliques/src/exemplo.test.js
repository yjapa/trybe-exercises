import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './renderWithRedux'
import App from './App';



describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  it ('Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />);
    const buttonAdicionar = getByRole('button', { name: /clique aqui/i})

    expect(queryByText('0')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = getByRole('button', { name: /clique aqui/i})

    userEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
});