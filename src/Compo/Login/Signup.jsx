import Request from '../../Request/request'
import Header from '../../Request/header'

export default function Signup(){

    const submit = (e) => {

        e.preventDefault();
        const values = {
            email: e.target.email.value,
            mdp : e.target.mdp.value,
            name: e.target.name.value
        }
        console.log(values);

        Request('auth/signup',Header.disconnected(values),successBack)
    }

    const successBack = (res) => {
        localStorage.setItem("userID", res.userID);
        localStorage.setItem("token", res.token);
        window.location = "/";
    }



    return(
        <form onSubmit={submit} className="formDiv" >
            <h3>Inscription</h3>
            
            <label htmlFor="name">Speudo</label>
            <input type="text" name="name" required/>
            
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required/>

            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" name="mdp" required/>

            <input type="submit" value="Connecter"/>
        </form>
    )
}