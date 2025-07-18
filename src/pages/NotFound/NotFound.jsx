import "./NotFound.scss";

function NotFound() {
    return (
        <main className ="not-found">
            <h2 className="not-found__title">404</h2>
            <h2 className="not-found__message">
                <span className="not-found__message-part">Oups! la page que</span> vous demandez n'existe pas.
            </h2>
            <a className="not-found__link" href="/">Retourner sur la page d'accueil</a>
        </main>
    )
}

export default NotFound;