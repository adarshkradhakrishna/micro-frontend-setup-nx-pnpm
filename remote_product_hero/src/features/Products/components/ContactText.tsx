import { Link } from 'react-router-dom'

function ContactText() {
  return (
        <div>
            <h1>Contacts</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <Link to={'/form'}> Contact Form</Link>
                <Link to={'/chat'}> Contact Chats</Link>
            </div>
        </div>
    )
}

export default ContactText