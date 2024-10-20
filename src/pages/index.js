import gitLogo from '../assets/github-mark-white.png'
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

function App() {

  const [ currentRepo, setCurrentRepo] = useState("");
  const [ repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {

      const ifExists = repos.find(repo => repo.id === data.id)
      if (!ifExists) {
        setRepos(prev => [...prev, data]);
      setCurrentRepo("");
      return
      }
      alert('Repository already added.'); 
      return
    }
    alert('Repository not found.');
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo}  onChange={(event) => setCurrentRepo(event.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo 
      handleRemoveRepo={handleRemoveRepo} 
      key={repo.id} 
      repo={repo}/>
      )}
    </Container>
  );
}

export default App;
