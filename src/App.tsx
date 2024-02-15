import Layout from "./components/Layout/component";
import RestaurantList from "./components/restaurant-list/component";
import { restaurants } from "./constants/restaurants";

const App = () => {
    return (
        <Layout>
            <RestaurantList restaurants={restaurants}></RestaurantList>
        </Layout>
    );
}

export default App;