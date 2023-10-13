import { useEffect, useState } from "react";
import Character from './Character.jsx';
import CharacterCSS from './Charcter.css';

function Footer(){
  return(
    <header>
      <div>
        <h1 className="Footerr">B r y a n  R o a </h1>
      </div>
    </header>
  )
}

function NavShear(){
  return(
    <header>
      <div>
       <h1>Buscar</h1>
       <input  type="text" placeholder="Search" className="form-control"></input>
      </div>
    </header>
  )
}


function NavPage(props){
  return (
    <header>
      <p class="PageN"> Page: {props.page}</p>
      <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>
        Page {props.page + 1}
      </button>
    </header>
  )
}

function NavPageB(props){
  return(
    <header>
      <div class="btnback">
        <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page - 1)}>
          Page {props.page - 1}
        </button>
      </div>
    </header>
  )
}

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(()=> {
    async function asyncData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results);
    }
    asyncData()
  },[page]);


  return (
    <div className="container bg-dark">

      
      <NavPage page = {page} setPage = {setPage}/>
      <NavShear/>
      <NavPageB page = {page} setPage = {setPage}/>

      {loading ? 
        ( <h1>Loading...</h1> ) :(
          <div className="row"> 
            {characters.map((character) =>{    
            return(
              <div className="col-md-4" key ={character.id}> 
               <Character character={character} />
              </div>
              );
            })} 
          </div>
        )
      }
      
      <NavPage page = {page} setPage = {setPage}/>
      <NavPageB page = {page} setPage = {setPage}/>
      <Footer/>
    </div>
  );
}
export default CharacterList;
