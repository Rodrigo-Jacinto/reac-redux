import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBT</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?resize=326:*"
                alt="tênis"
              />
            </td>
            <td>
              <strong>Tênis Nike</strong>
              <span>R$ 100,00</span>
            </td>

            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$258,80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$100,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
