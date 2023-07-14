import { useState } from "react";
import changeBGIcon from '../assets/change.png'


export default function PokemonCardDetails(props) {
    const [toggleBackground, setToggleBackground] = useState(true);
    const pokemon = props.pokemon;
    
    function shadeColor(color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);
    
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  
    
        R = Math.round(R)
        G = Math.round(G)
        B = Math.round(B)
    
        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    
        return "#"+RR+GG+BB;
    };

    let bgColor1;
    let bgColor2;

    switch (pokemon.tipos[0]) {
        case "Normal": bgColor1="#A8A77A"; break;
        case "Voador": bgColor1="#A98FF3"; break;
        case "Elétrico": bgColor1="#F7D02C"; break;
        case "Venenoso": bgColor1="#A33EA1"; break;
        case "Fogo": bgColor1="#EE8130"; break;
        case "Fada": bgColor1="#D685AD"; break;
        case "Grama": bgColor1="#7AC74C"; break;
        case "Inseto": bgColor1="#A6B91A"; break;
        case "Água": bgColor1="#6390F0"; break;
        case "Psíquico": bgColor1="#F95587"; break;
        case "Lutador": bgColor1="#C22E28"; break;
        case "Pedra": bgColor1="#B6A136"; break;
        case "Terrestre": bgColor1="#E2BF65"; break;
        case "Aço": bgColor1="#B7B7CE"; break;
        case "Gelo": bgColor1="#96D9D6"; break;
        case "Fantasma": bgColor1="#735797"; break;
        case "Dragão": bgColor1="#6F35FC";
    };

    if (pokemon.tipos.length === 2) {
        switch (pokemon.tipos[1]) {
            case "Normal": bgColor2="#A8A77A"; break;
            case "Voador": bgColor2="#A98FF3"; break;
            case "Elétrico": bgColor2="#F7D02C"; break;
            case "Venenoso": bgColor2="#A33EA1"; break;
            case "Fogo": bgColor2="#EE8130"; break;
            case "Fada": bgColor2="#D685AD"; break;
            case "Grama": bgColor2="#7AC74C"; break;
            case "Inseto": bgColor2="#A6B91A"; break;
            case "Água": bgColor2="#6390F0"; break;
            case "Psíquico": bgColor2="#F95587"; break;
            case "Lutador": bgColor2="#C22E28"; break;
            case "Pedra": bgColor2="#B6A136"; break;
            case "Terrestre": bgColor2="#E2BF65"; break;
            case "Aço": bgColor2="#B7B7CE"; break;
            case "Gelo": bgColor2="#96D9D6"; break;
            case "Fantasma": bgColor2="#735797"; break;
            case "Dragão": bgColor2="#6F35FC";
        }
    }
    else {
        bgColor2 = shadeColor(bgColor1, -20);
        bgColor1 = shadeColor(bgColor1, 20);
    };

    document.documentElement.style.setProperty("--bg-card-details-1",bgColor1);
    document.documentElement.style.setProperty("--bg-card-details-2",bgColor2);


    const changeBackground = () => {
        
        setToggleBackground(!toggleBackground);
        
    }

    return (
        <div className={`pokemon-card-details ${toggleBackground ? 'general-bg-card-details' : 'tipos-bg-card-details'}`}>
            <span className="nome-pokemon-details">#{pokemon.id} | {pokemon.nome}</span>
            <div className="img-pokemon-details">
                <div className='img-center-pokemon-details'>
                <img src={pokemon.image} alt={pokemon.nome}/>
                </div>
            </div>
            <div className='tipo-container'>
            <span className="tipo-pokemon">
                {pokemon.tipos.length === 2 ? pokemon.tipos[0] + ' | ' + pokemon.tipos[1] : pokemon.tipos[0]}
                </span>
                
                <button className="change-bg-button" onClick={changeBackground}><img src={changeBGIcon} alt='trocar fundo' /></button>
            </div>
        </div>
    );
}