import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Pokemon Explorer" />
      <Title>Explore o mundo pokémon</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do pokémon" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://manualdosgames.com/wp-content/uploads/2019/05/pikachu-1170x780.jpg"
            alt="Pikachu"
          />
          <div>
            <strong>Pikachu</strong>
            <p>It’s in its nature to store electricity.</p>
          </div>
          <FiChevronRight size="20" />
        </a>

        <a href="teste">
          <img
            src="https://manualdosgames.com/wp-content/uploads/2019/05/pikachu-1170x780.jpg"
            alt="Pikachu"
          />
          <div>
            <strong>Pikachu</strong>
            <p>
              It’s in its nature to store electricity. It feels\nstressed now
              and then if it’s unable to fully\ndischarge the electricity.
            </p>
          </div>
          <FiChevronRight size="20" />
        </a>

        <a href="teste">
          <img
            src="https://manualdosgames.com/wp-content/uploads/2019/05/pikachu-1170x780.jpg"
            alt="Pikachu"
          />
          <div>
            <strong>Pikachu</strong>
            <p>
              It’s in its nature to store electricity. It feels\nstressed now
              and then if it’s unable to fully\ndischarge the electricity.
            </p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
