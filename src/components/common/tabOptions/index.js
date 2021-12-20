import "./tabOptions.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe55J5onTq8-jgYNOtaM5UXaotmzguMUnwg&usqp=CAU",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1202545720.jpg",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Y5lIWoUVi6nMdShCwd3w4aKX3zdtOVSvGg&usqp=CAU",
    backdrop: "#E5F3F3",
    inactive_img: "https://static.thenounproject.com/png/113805-200.png",
  },
  {
    id: 1,
    name: "NightLife",
    active_img:
      "https://cdn3.iconfinder.com/data/icons/things-4/24/cocktail-512.png",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://thumbnail.imgbin.com/3/2/7/imgbin-paper-drawing-others-c0ytwQ05y0uhfnWKEaXZ46y78_t.jpg",
  },
];
const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab, i) => (
          <div
            key={i}
            onClick={() => setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="tab-image"
                alt={tab.name}
                height="50px"
                width="50px"
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
