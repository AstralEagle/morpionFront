export default function Case({platoPosition,expression,callBack}) {


    const handle = () => {
        callBack(platoPosition)
    }

    if(expression === "."){
        return(
            <th onClick={handle}>
                
            </th>
        )
    }else{
        return (
            <th>
            {expression}
        </th>
    );
}
}