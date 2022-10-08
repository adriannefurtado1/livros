/*
⦁ Crie um programa de cadastro de livros de uma loja (utilizando React). O programa deve implementar as funcionalidades descritas no texto abaixo:
 
(0) - Crie o protótipo e anexe na atividade;
(1) - Cadastrar livro;
(2) - Pesquisar livro;

O cadastro do  deve solicitar código do livro, titulo, autor, data. O programa deve respeitar as seguintes restrições:
⦁ A pesquisa deve ser feita pelo código ou autor; 
⦁ A exclusão deve ser feita pela tabela de livros;

  (desafio) A tabela de livros deve apresentar quantos livros com o mesmo titulo existem na loja

*/
/**ainda não funcionou a pesquisa por autor  */

import { useState } from "react";
import './App.css';
import { HiX, } from 'react-icons/hi';

function App() {			  
  const [codigoPesquisa, setCodigoPesquisa] = useState("");
  const [tituloPesquisa, setTituloPesquisa] = useState("");
  const [autorPesquisa, setAutorPesquisa] = useState("");  
  const [dataPesquisa, setDataPesquisa] = useState("");

  const [codigo, setCodigo] = useState(""); 
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [data, setData] = useState("");

  const [livros, setLivro] = useState([]);

  function cadastrar() {
    let livro = {
      codigo,
      titulo,
      autor,
      data,
    };

    setLivro([...livros, livro]);

    limparForm();
  }
  
  function pesquisar(){

    if(!codigoPesquisa && !autorPesquisa) {
      setCodigoPesquisa('');
      setTituloPesquisa('');
      setAutorPesquisa('');
      setDataPesquisa('');
      alert('Digite o codigo ou autor que deseja pesquisar!')
    } else {
      if(codigoPesquisa){
        livros.forEach((livro)=>{
          if(livro.codigo == codigoPesquisa){
            setCodigoPesquisa(livro.codigo);
            setTituloPesquisa(livro.titulo);
            setAutorPesquisa(livro.autor);
            setDataPesquisa(livro.data);
          }
        })
      } else {
        livros.forEach((livro) =>{
          if(livro.autor ==autorPesquisa){
            setCodigoPesquisa(livro.codigo);
            setTituloPesquisa(livro.titulo);
            setAutorPesquisa(livro.autor);
            setDataPesquisa(livro.data);
          }
          
        })
      }     

    }
  }

  function limparForm() {
    setCodigo("");
    setTitulo("");
    setAutor("");
    setData("");
  }

  function excluir(codigo){

    livros.forEach((livro, index) =>{
      if(livro.codigo == codigo){
        livros.splice(index,1)
        console.log(livros);
      }
    })
    
    setLivro([...livros]);
  }
  return (
    <div className="container">
      <div className="layout">
        <h1>Loja de Livros Usados</h1>
        <h3>Cadastro de Livros</h3>

        <input
          onChange={(e) => { 
            setCodigo(e.target.value); 
          }}
          value={codigo}
          placeholder="Código do Livro"
         ></input>

        <input
          onChange={(e) => { 
            setTitulo(e.target.value); 
          }}
          value={titulo}
          placeholder="Título do Livro"
         ></input>

        <input
          onChange={(e) => { 
            setAutor(e.target.value); 
          }}
          value={autor}
          placeholder="Autor do Livro"
         ></input>

        <input
          onChange={(e) => { 
            setData(e.target.value); 
          }}
          value={data}
          placeholder="Data de entrada"
         ></input>

        <button onClick={cadastrar} className="btn-cadastrar">
          Cadastrar
        </button>         

        <h3>Pesquisar Livro</h3>
        
        <input
          value={codigoPesquisa}
          onChange={(e) => { 
              setCodigoPesquisa(e.target.value);
              setAutorPesquisa('');
              setTituloPesquisa('');
              setDataPesquisa('');
          }}
          placeholder="Codigo"
        ></input>
        
        <input
          value={autorPesquisa}
          onChange={(e) => { 
              setAutorPesquisa(e.target.value);
              setCodigoPesquisa('');
              setTituloPesquisa('');
              setDataPesquisa('');
          }}
          placeholder="Autor"
        ></input>

      <button onClick={pesquisar}>Pesquisar</button>

        <h4>Codigo: {codigoPesquisa}</h4>
		    <h4>Titulo: {tituloPesquisa}</h4>
        <h4>Autor: {autorPesquisa}</h4>
        <h4>Data: {dataPesquisa}</h4>
      </div>
      <div classname="">
            <table>
              <tr>
                <th>Codigo</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Data</th>
              </tr>
              {livros.map((livro) => {
                return (
                  <tr>
                    <td>{livro.codigo}</td>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>{livro.data}</td>
                    <td>
                      <button onClick={() => {excluir(livro.codigo)}}>
                        <HiX/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
      </div>
    </div>
  );
}

export default App;
