import "./DeliveryItem.css";
const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.cover}
          alt={item.title}
          height={400}
          width={400}
          className="delivery-item-image"
        />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
};

export default DeliveryItem;
