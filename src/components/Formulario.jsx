import { useState } from "react"

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: '',
    })

    return (
        <form>
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
            </div>
        </form>
    )
}

export default Formulario