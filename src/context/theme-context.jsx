import React, { createContext } from "react";

const themes = {
    dark: {
        fondo: {
            color: '#fff',
        },
        glass: {
            background: "rgba(21, 21, 21, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.19)",
            boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "35px",
        },
        glass_navigation: {
            background: "rgba(21, 21, 21, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.19)",
            boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)",
        },
        subtitle: {
            color: '#ffffff82',
        },
        color: {
            color: '#fff'
        },
        border: {
            border: "1px solid #fff",
            border_alpha: { border: "1px solid rgba(255, 255, 255, 0.19)" },
            bottom: {
                border_alpha: { border: "1px solid rgba(0, 0, 0, 0.3)" },
                solid: {
                    borderBottom: "1px solid #080808"
                },
                alpha: {
                    color: '#ffffff82',
                    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                }
            },
        },
        btn: {
            border: "1px solid #fff",
        },
        input: {
            color: '#fff',
            borderBottom: "1px solid #fff"
        },
        card:{
            border: "1px solid rgba(255, 255, 255, 0.19)"
        },
        punto: {
            color: "#9F51DD"
        },
        graph: {
            mayor: {
                background: 'rgba(214, 152, 0, 0.75)',
                color: 'rgba(214, 152, 0, 1)',
            },
            medio: {
                background: '#9742984f',
                color: '#974298ff',
            },
            menor: {
                background: '#64AABD4f',
                color: '#64AABDff'
            },
        },
        cube: {
            front: {
                background: '#974298'
            },
            right: {
                background: '#D69800'
            },
            back: {
                background: '#E61720'
            },
            left: {
                background: '#64AABD'
            },
            top: {
                background: '#0099ff'
            },
            bottom: {
                background: '#22cc88'
            }
        }
    },
    light: {
        fondo: {
            textShadow: '1px 2px 3px rgba(0,0,0,0.5)',
            // background: 'rgb(255,249,230)',
            background: 'linear-gradient(0deg, rgba(255,249,230,1) 0%, rgba(238,242,230,1) 65%)',
            color: '#000000af',
        },
        glass: {
            color:'#1B1A1A',
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: '29px',
            boxShadow: '35px 35px 68px 0px rgba(65, 141, 244, 0.5), inset -9px -9px 16px 0px rgba(65, 141, 244, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            border:'0px',
        },
        glass_navigation: {
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            boxShadow: '35px 35px 68px 0px rgba(65, 141, 244, 0.5), inset -9px -9px 16px 0px rgba(65, 141, 244, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            border:'0px',
        },
        subtitle: {
            textShadow: '0',
            color: '#000000af',
        },
        color: {
            color: '#000000af'
        },
        border: {
            border: "1px solid #1B1A1A",
            border_alpha: { border: "1px solid rgba(0, 0, 0, 0.3)" },
            bottom: {
                solid: {
                    borderBottom: "1px solid #1B1A1A"
                },
                alpha: {
                    color: '#0000008c',
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                }
            },
        },
        btn: {
            color: "#fff",
            textShadow: '3px 3px 4px rgba(0,0,0,0.6)',
            borderRadius: '20px',
            boxShadow: '35px 35px 68px 0px rgba(65, 141, 244, 0.5), inset -9px -9px 16px 0px rgba(65, 141, 244, 0.6), inset 0px 2px 4px 0px rgb(255, 255, 255)',
            border:'0px',
            background: 'linear-gradient(#69cdfd,#45a5fc)'
        },
        input: {
            background: '#f1f7ff',
            color: '#1B1A1A',
            borderBottom: "1px solid #000"
        },
        punto: {
            color: '#4edf20',
        },
        card:{
            background:'#f1f7ff'
        },
        graph: {
            mayor: {
                background: '#6CC5EBff',
                color:'#6CC5EB'
            },
            medio: {
                background: '#682f5dbf',
                color: '#682f5d'
            },
            menor: {
                background: '#d2f833bf',
                color: '#d2f833'
            },
        },
        cube: {
            front: {
                background: 'linear-gradient(#69cdfd,#45a5fc)'
            },
            right: {
                background: 'linear-gradient(90deg, rgba(252,69,242,1) 0%, rgba(69,248,252,1) 100%)'
            },
            back: {
                background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%)'
            },
            left: {
                background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%)'
            },
            top: {
                background: 'linear-gradient(90deg, rgba(58,180,179,1) 0%, rgba(252,69,242,1) 100%)'
            },
            bottom: {
                background:'linear-gradient(#d4f070,#52de47)'
            }
        },
        hola:{
            hola:'3D'
        }
    }
};
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(themes.dark)
    const handleTheme = () => {
        if (theme === themes.dark) {
            setTheme(themes.light);
        } else {
            setTheme(themes.dark);
        }
        console.log("handleteme")
    }
    const data = { theme, handleTheme };
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export { ThemeProvider };
export default ThemeContext;

















// export 