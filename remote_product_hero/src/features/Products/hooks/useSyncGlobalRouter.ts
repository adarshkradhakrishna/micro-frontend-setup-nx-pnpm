import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

function useSyncGlobalRouter(baseName) {
    const location = useLocation()
    const navigate = useNavigate()
    const newPath = `${baseName}${location.pathname == "/" ? "" : location.pathname}`
    console.log("location.pathname", location.pathname);

    useEffect(() => {debugger;
        const handleNavigate = (detail) => {debugger;
            if (detail == location.pathname) {
                return
            }
            navigate(detail)
        }
        window.addEventListener('shell', ({ detail }: any) => {debugger;
            console.log("Deytail in remote app", detail);
            handleNavigate(detail)
        })
        return () => {
            window.removeEventListener('shell', ({ detail }: any) => {
                console.log("Deytail in remote app", detail);
                handleNavigate(detail)
            })
        }
    }, [location.pathname, navigate])

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('route-chnage', {
            detail: newPath
        }))
    }, [newPath])

}

export default useSyncGlobalRouter