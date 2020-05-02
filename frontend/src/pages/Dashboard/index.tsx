import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

interface Repository {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`pokemon/${newRepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);

    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Pokemon Explorer" />
      <Title>Explore o mundo pokémon</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do pokémon"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.name} href="teste">
            <img src={repository.sprites.front_default} alt={repository.name} />
            <div>
              <strong>{repository.name}</strong>
              <p>
                Altura:
                {repository.height}
                centímetros
              </p>
              <p>
                Peso:
                {repository.weight}
                kg
              </p>
            </div>
            <FiChevronRight size="20" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
