import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

function useSyncGlobalRouter(basepath) {
    const location = useLocation()
    const navigate = useNavigate()
    //const newPath = `${baseName}${location.pathname == "/" ? "" : location.pathname}`

    useEffect(() => {
        const handleNavigate=(detail)=>{
           if(detail == location.pathname) return 
           navigate(detail)
        }
        window.addEventListener('route-chnage',({detail}:any)=>{
          handleNavigate(detail)
        })
        return()=>{
          window.removeEventListener('route-chnage',({detail}:any)=>{
          handleNavigate(detail)
        })
        }
    }, [location.pathname,basepath,navigate])

    useEffect(()=>{
      if(location.pathname.startsWith(basepath)){
        window.dispatchEvent(new CustomEvent('shell',{detail:location.pathname.replace(basepath,'')}))
      }
    },[basepath,location.pathname])

}

export default useSyncGlobalRouter