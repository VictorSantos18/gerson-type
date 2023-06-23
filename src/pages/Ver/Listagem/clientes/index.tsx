import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
import { FiEdit3, FiTrash } from "react-icons/fi";

interface Cliente {
  id: string;
  nome: string;
  cpf: string;
}

function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
  }, []);

  function removerCliente(id: string) {
  }

  function verCliente(id: string) {
    localStorage.setItem("id_cliente", id);
    window.location.href = '/ver/cliente'
  }

  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <div className="text">
          <h1 className="titles">
            <strong>Clientes</strong>
          </h1>
        </div>
        <div className="tables">
        <Table striped bordered hover variant="light">
            <thead className="titles-table">
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Ver e Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Victor Salles</td>
                <td>472.345.678-94</td>
                <td>
                  <button className="cps" onClick={() => verCliente('1')}>
                    <FiEdit3 color='black' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('1')}>
                    <FiTrash color='red' size={23}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Pedro Henrique</td>
                <td>123.456.789-00</td>
                <td>
                  <button className="cps" onClick={() => verCliente('2')}>
                    <FiEdit3 color='black' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('2')}>
                    <FiTrash color='red' size={23}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Kevin Garcia</td>
                <td>987.654.321-00</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <FiEdit3 color='black' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <FiTrash color='red' size={23}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Victor Vieira</td>
                <td>999.992.991-40</td>
                <td>
                  <button className="cps" onClick={() => verCliente('1')}>
                    <FiEdit3 color='black' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('1')}>
                    <FiTrash color='red' size={23}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Victor Victorio</td>
                <td>987.654.387-69</td>
                <td>
                  <button className="cps" onClick={() => verCliente('1')}>
                    <FiEdit3 color='black' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('1')}>
                    <FiTrash color='red' size={23}/>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}

export default Clientes;
