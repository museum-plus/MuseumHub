import React from 'react'

const alertas = {
    NEW_BP: {
        message: 'Beepcon creado correctamente'
    },
    DELETE_BP: {
        message: 'Beepcon eliminado correctamente'
    },
    UPDATE_BP: {
        message: 'Beepcon actualizado correctamente'
    },
    newRecorrido: {
        message: 'Recorrido creado correctamente'
    },
    deleteRecorrido: {
        message: 'Recorrido eliminado correctamente'
    },
    updateRecorrido: {
        message: 'Recorrido actualizado correctamente'
    },
    newTurno: {
        message: 'Turno creado correctamente'
    },
    deleteTurno: {
        message: 'Turno eliminado correctamente'
    },
    updateTurno: {
        message: 'Turno actualizado correctamente'
    },
}

const LogsContext = React.createContext()

export default function LogsProvider({children}) {
    const [logs, setLogs] = React.useState([])


    const handleAlert = (type) => {
        setLogs([...logs, {message: alertas[type].message, type: type}])
    }

    const clicked = () => {
        sendClick()
    };
    const sendClick = () => {
        console.log("SEND CLICK FROM CONTEXT");
    };
    const data = {handleAlert, logs}
  return (
    <LogsContext.Provider value={data}>
        {children}
    </LogsContext.Provider>
  )
}

export {LogsContext}