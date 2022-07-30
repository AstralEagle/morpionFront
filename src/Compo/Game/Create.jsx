import Request from '../../Request/request'
import Header from '../../Request/header'

export default function Create(){

    const submit = (e) => {
        e.preventDefault();
        const value = {name : e.target.name.value}
        Request('game',Header.loged('POST', value),callBack)
    }
    const callBack = (res) => {
        console.log(res)
        window.location = '/'
    }
 
    return(
        <form onSubmit={submit}>
            <label htmlFor="name">Nom de la salle</label>
            <input type="text" name="name"/>
            <input type="submit" />
        </form>
    )
}