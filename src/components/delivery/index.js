import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSections";
import Filter from "../common/filters";
import "./delivery.css";
import DeliveryCollection from "./deliveryCollections";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Chennai"
      />
    </div>
  );
};

export default Delivery;
