import { Outlet, RouterProvider, createMemoryRouter } from 'react-router-dom'
import ContactText from './ContactText'
import ContactForm from './ContactForm'
import ContactChats from './ContactChats'
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter'

function RouterSync(){
    useSyncGlobalRouter("/contact")
    return <Outlet />
}

const router = createMemoryRouter([{
    path: "/",
    element: <RouterSync />,
    children: [
        {
            index: true,
            element: <ContactText />
        },
        {
            path: 'form',
            element: <ContactForm />
        },
        {
            path: 'chat',
            element: <ContactChats />
        }
    ]
}], {
    initialEntries: [location.pathname.replace("/contact","") || "/"]
})

function Contacts() {
    return (
        <RouterProvider router={router} />
    )
}

export default Contacts