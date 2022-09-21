import React, { createContext } from "react";

const themes ={
    dark:{
        glass:{
            background: "rgba(21, 21, 21, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.19)",
            boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "35px",
        },
        subtitle:{
            color:'#ffffff82',
        },
        color:{
            color:'#fff'
        },
        border:{
            border:"2px solid #fff",
            bottom:{
                solid:{
                    borderBottom: "1px solid #fff"
                },
                alpha:{
                    color:'#ffffff82',
                    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                }
            },
        },
        check:{
            background:'#fff',
        },
        btn:{
            border:"2px solid #fff",
        },
        input:{
            borderBottom: "1px solid #fff"
        }
    },
    light:{
        fondo:{
            background:'#EAEAEA',
            color:'black',
        },
        glass:{
            background:'#fff',
            color:"#000",
            border: "1px solid rgba(255, 255, 255, 0.19)",
            boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "35px",
        },
        subtitle:{
            color:'#0000008c',
        },
        color:{
            color:'#000'
        },
        border:{
            border:"2px solid #000",
            bottom:{
                solid:{
                    borderBottom: "1px solid #000"
                },
                alpha:{
                    color:'#0000008c',
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                }
            },
        },
        check:{
            background:'#000',
        },
        btn:{
            color:"#000",
            background:'#EAEAEA',
            border:"1px solid #000",
        },
        input:{
            background:'#EAEAEA',
            color:'black',
            borderBottom: "1px solid #000"
        }
    }
};
const ThemeContext = createContext();
const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = React.useState(themes.dark)
    const handleTheme = () => {
        if(theme === themes.dark) {
            setTheme(themes.light);
        } else {
            setTheme(themes.dark);
        }
        console.log("handleteme")
    }
    const data= {theme, handleTheme};
    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export { ThemeProvider };
export default ThemeContext;

















// export 