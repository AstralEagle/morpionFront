import '../../Style/market/item/item.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ item, callBack, actived}) {

    const onClick = (e) => {
        callBack(item.id);
    }

  return (
    <div onClick={onClick} className={actived ? "itemMarket actual": "itemMarket"}>
      <h5>{item.name}</h5>
      <div className="imgs">
      <img src={`${process.env.REACT_APP_API_URL}/sign/circle/${item.id}.png`} alt="" /><img src="" alt="" />
      <img src={`${process.env.REACT_APP_API_URL}/sign/crosse/${item.id}.png`} alt="" /><img src="" alt="" />
      </div>
    </div>
  );
}
