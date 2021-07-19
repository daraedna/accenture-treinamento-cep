import React, { useState } from 'react';
import { s } from './styles';


function App(props){
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({});

  function handleCep(){
    setAddress({})
    setLoading(true);
      fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(res => {
          if(res.erro) {
            alert("Não foi possível encontrar o CEP");
            setLoading(false);
          } else {
            setAddress(res)
            setLoading(false);
          }
        });
    }

  return(
    <s.Container>
        <s.Title>Buscar CEP</s.Title>
        <s.ContentSearch>
            <s.InputSearch
              type="number"
              onChange={(e) => setCep(e.target.value)}
              placeholder="Insira o CEP"
            />
            <s.Button
              onClick={handleCep}
              primary={cep.length === 8}
              disabled={cep.length !== 8}
            >
              {loading ? <s.Loading />
              : 'Pesquisar'
              }
            </s.Button>
        </s.ContentSearch>

          {!loading && Object.values(address).length !== 0 &&
            <s.ContentAddress>
              <s.AreaItem>
                <s.ItemAddress>
                  <s.Label>Cidade</s.Label>
                  <s.InfoAddress width={350}>{address.localidade}</s.InfoAddress>
                </s.ItemAddress>
                <s.ItemAddress>
                  <s.Label>Endereço</s.Label>
                  <s.InfoAddress width={350}>{address.logradouro}</s.InfoAddress>
                </s.ItemAddress>
                <s.ItemAddress>
                  <s.Label>Complemento</s.Label>
                  <s.InfoAddress width={350}>{address.complemento}</s.InfoAddress>
                </s.ItemAddress>
              </s.AreaItem>

              <s.AreaItem>
                <s.ItemAddress>
                  <s.Label>Bairro</s.Label>
                  <s.InfoAddress width={200}>{address.bairro}</s.InfoAddress>
                </s.ItemAddress>
                <s.ItemAddress>
                  <s.Label>UF</s.Label>
                  <s.InfoAddress width={115}>{address.uf}</s.InfoAddress>
                </s.ItemAddress>
              </s.AreaItem>

            </s.ContentAddress>
          }
    </s.Container>
  )
}

export default App;
