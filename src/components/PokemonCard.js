

export default function PokemonCard(props) {
    const pokemon = props.pokemon;
    return (
        <div className="pokemon-card">
            <div className="img-pokemon-card">
                <div className='img-center-pokemon'>
                <img src={pokemon.image} alt={pokemon.nome}/>
                </div>
            </div>
            
            <span className="nome-pokemon">#{pokemon.id} | {pokemon.nome}</span>
        </div>
    );
}