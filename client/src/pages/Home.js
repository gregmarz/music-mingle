import Header from "./Header"
import ArtistProf from "./ArtistProf"
import VenueProf from "./VenueProf"

import "./src/App.css"

function Home() {
    return (
        <div>
            <Header />
        <div>
            <form className="arist-login">
            <h2>Artist Login</h2>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-label" placeholder="username"></input>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" className="form-label" placeholder="email"></input>
                </div>
            </form>
            <form>
                <h2>Venue Login</h2>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-label" placeholder="username"></input>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" className="form-label" placeholder="email"></input>
                </div>
            </form>
        </div>
        </div>
    )
}