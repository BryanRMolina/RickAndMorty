

function Character({ character }) {
  return (
        <div className='container'> 
            <img className='imgF' src={character.image} alt={character.name} />
            <h2 className='Nombre'>{character.name}</h2>
            <div className="pall">
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Type: {character.type}</p>
              <p>Gender: {character.gender}</p>
              <p>OriginName: {character.origin.name}</p>
              <p>{character.location.name}</p>
            </div>
         </div>  
    )
}
export default Character;