


//Function request besoin d'attribut
// (URL,Header,CallBack,ErrorBack)
export default function Request(url,header,callBack,errorBack){
    fetch(process.env.REACT_APP_API_URL+"/api/"+url,header)
    .then(res => res.json())
    .then(res => {
        if(res.error){
            if(res.logOut){
                console.error('Log Out!');
                localStorage.removeItem('userID');
                localStorage.removeItem('token');
                window.location = '/';
            }
            if(!errorBack)
                console.error(res);
            else
                errorBack(res);
        }
        else
            callBack(res)
    })
    .catch(err => console.error(err))
}
