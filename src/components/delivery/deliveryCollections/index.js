import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./DeliveryCollection.css";
import DeliveryItem from "./deliveryItem";

const deliverItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/9/18968779/9ad7ca493fb9a018c0ce1e5570143e03_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/19503679/6e82b62273ae9b3419de43556fb1e559_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/pictures/6/19882466/dbb3a5155efc48d39991270d73c40ae2_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/a78/9e12fa350270d5f4ed01b9f3203a8a78.jpg?output-format=webp",
  },
  {
    id: 5,
    title: "Biriyani",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/7/68607/a104b53df2e8d9998c238b2b608cc8af_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 6,
    title: "Cheat",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/4a3/8fa6b582172c38fa71fdebdbc53af4a3.jpg?output-format=webp",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/1/67481/fe92135685160e19b3a464a788876e45.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
  },
];
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const DeliveryCollection = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you Happy</div>
        <Slider {...settings}>
          {deliverItems.map((item) => (
            <DeliveryItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
