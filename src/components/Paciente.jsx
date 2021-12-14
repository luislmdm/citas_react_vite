const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
   
    const {nombre, propietario, email, fecha, sintomas, id} =paciente

    const handleEliminar = () => {
     const respuesta = confirm(`Deseas eliminar ${paciente.nombre} ?`)
    if (respuesta) {
        eliminarPaciente(id)
    }
    }

    return (
        <div>
              <div className="ml-4 bg-white shadow-md px-5 py-9 rounded-xl mb-5">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase 
                    transition-colors duration-700 rounded"
                    onClick={()=> setPaciente(paciente)}
                    >Editar</button>

                    <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-900 text-white font-bold uppercase 
                    transition-colors duration-700 rounded"
                    onClick={handleEliminar}
                    >Eliminar</button>

                </div>
            </div>
        </div>
    )
}

export default Paciente
