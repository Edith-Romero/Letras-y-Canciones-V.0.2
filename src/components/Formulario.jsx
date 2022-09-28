const Formulario = () => {
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
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario