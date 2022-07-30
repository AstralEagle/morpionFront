import Request from '../../Request/request'
import Header from '../../Request/header'

export default function Login (){

    const submit = (e) => {

        e.preventDefault();
        const values = {
            email: e.target.email.value,
            mdp : e.target.mdp.value,
            save: e.target.save.checked
        }
        console.log(values);

        Request('auth/login',Header.disconnected(values),successBack)
    }

    const successBack = (res) => {
        localStorage.setItem("userID", res.userID);
        localStorage.setItem("token", res.token);
        window.location = "/";
    }



    return(
        <form onSubmit={submit} className="formDiv" >
            <h3>Connexion</h3>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required/>

            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" name="mdp" required/>

            <label htmlFor="save">Rester connecter</label>
            <input type="checkbox" name="save"/>

            <input type="submit" value="Connecter"/>
        </form>
    )
}