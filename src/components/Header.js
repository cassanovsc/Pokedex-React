import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <ul>
                <li><button onClick={() => {navigate('/');} }>Início</button></li>
                <li><button onClick={() => {navigate('/pokedex');} }>Pokédex</button></li>
            </ul>
        </header>
    );
}