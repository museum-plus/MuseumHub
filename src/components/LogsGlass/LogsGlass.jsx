import React from 'react'
import "./LogsGlass.css"
import ThemeContext from "../../context/theme-context";
import { motion } from 'framer-motion';
import { LogsContext } from '../../context/logsContext';
import HistoryIcon from '../../assets/HistoryIcon';
import CreateIcon from '../../assets/CreateIcon';
import EditIconL from '../../assets/EditIconL';
import DeleteIconT from '../../assets/DeleteIconT';

export default function LogsGlass() {
    const { theme, handleTheme } = React.useContext(ThemeContext);
    const { logs } = React.useContext(LogsContext);

    return (
        <motion.div style={theme.glass} className='logs-glass__container'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className='logs-glass__container__header'>
                <div className='logs-glass__container__header__text'>
                    Logs
                </div>
                <div className='logs-glass__container__header__icon'>
                    <HistoryIcon />
                </div>
            </div>
            <div className='logs-glass__container__body'>
                <div className='logs-glass__container__history'>
                    {logs?.map((log) => {
                        if (log.type == "NEW_BP" || log.type == "NEW_RC" || log.type == "NEW_TR") {
                            return (
                                <ItemLog message={log.message} type="NEW"></ItemLog>
                            )
                        }
                        if (log.type == "DELETE_BP" || log.type == "DELETE_RC" || log.type == "DELETE_TR") {
                            return (
                                <ItemLog message={log.message} type="DELETE"></ItemLog>
                            )
                        }
                        if (log.type == "UPDATE_BP" || log.type == "UPDATE_RC" || log.type == "UPDATE_TR") {
                            return (
                                <ItemLog message={log.message} type="UPDATE"></ItemLog>
                            )
                        }
                    }
                    )}
                </div>
            </div>
        </motion.div>
    )
}
function ItemLog(props) {
    console.log(props.type)
    if (props.type == "NEW") {
        return (
            <div className='Item-Log__container'>
                <div className='Item-log__container__icon'>
                    <CreateIcon />
                </div>
                <div className='Item-log__container__text'>
                    {props.message}
                </div>
            </div>
        );
    }
    if (props.type == "DELETE") {
        return (
            <div className='Item-Log__container'>
                <div className='Item-log__container__icon'>
                    <DeleteIconT />
                </div>
                <div className='Item-log__container__text'>
                    {props.message}
                </div>
            </div>
        );
    }
    if (props.type == "UPDATE") {
        return (
            <div className='Item-Log__container'>
                <div className='Item-log__container__icon'>
                    <EditIconL />
                </div>
                <div className='Item-log__container__text'>
                    {props.message}
                </div>
            </div>
        );
    }
}