import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

    const { setAlerta, busquedaLetras } = useLetras();

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: '',
    })

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Coloca el nombre del Artista y la cancion')
            return
        }

        busquedaLetras(busqueda)
        setAlerta('')
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <legend>Busca por Artistas y Canción </legend>

            <div>
                <div>
                    <label>Artista</label>
                    <input
                        type="text"
                        name="artista"
                        placeholder="Nombre de Artista"
                        value={busqueda.artista}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label>Artista</label>
                    <input
                        type="text"
                        name="cancion"
                        placeholder="Nombre de Canción"
                        value={busqueda.cancion}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
                <input
                    type="submit"
                    value="Buscar"
                />
            </div>
        </form>
    )
}

export default Formulario