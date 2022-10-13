export default function Case({ platoPosition, expression, callBack }) {

  
  const handle = () => {
    callBack(platoPosition);
  };

  if (expression.value === ".") {
    return <th onClick={handle}></th>;
  } else {
    return (
      <th>
        {expression.length < 2 ? (
          expression
        ) : (
          <div className="caseDiv">
            <img src={expression} alt="." />
          </div>
        )}
      </th>
    );
  }
}
