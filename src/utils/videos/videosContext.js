import { createContext, useEffect, useReducer } from "react";   


  
const INITIAL_STATE = {
    video: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('video')) || null : null,
    loading: false,
    error: null,
  };

  export const VideosContext = createContext(INITIAL_STATE);

  const VideosReducer = (state, action) => {
    
    switch (action.type) {
      case "ADD_VIDEOS":
        return {
          video: action.payload,
          loading: true,
          error: null,
        };
    
      default:
        return state;
    }
  };
    



  
export const VideosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(VideosReducer, INITIAL_STATE);
  
    useEffect(() => {
     
      localStorage.setItem("video", JSON.stringify(state.video));
    }, [state]);
  
    return (
      <VideosContext.Provider
        value={{
          video: state.video,
          loading: state.loading,
          error: state.error,
          dispatch:dispatch,
        }}
      >
        {children}
      </VideosContext.Provider>
    );
  };
    

export const videosContext = createContext();