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
    NEW_RC: {
        message: 'Recorrido creado correctamente'
    },
    DELETE_RC: {
        message: 'Recorrido eliminado correctamente'
    },
    UPDATE_RC: {
        message: 'Recorrido actualizado correctamente'
    },
    NEW_TR: {
        message: 'Turno creado correctamente'
    },
    DELETE_TR: {
        message: 'Turno eliminado correctamente'
    },
    UPDATE_TR: {
        message: 'Turno actualizado correctamente'
    },
}

const LogsContext = React.createContext()

export default function LogsProvider({children}) {
    const [logs, setLogs] = React.useState([{message: ''}])


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