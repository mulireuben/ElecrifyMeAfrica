import BestPrice from '../Home/BestPrice';
import Couserol from '../Home/Couserol';
import EVChargerDisplay from '../Home/EVChargerDisplay';
import Information from '../Home/Information';
import MobileApp from '../Home/MobileApp';
import PowerSolution from '../Home/PowerSolution';

const Home = () => {
  return (
    <div>
      <Couserol />
      <Information />
      <BestPrice />
      <PowerSolution />
      <MobileApp />
      <EVChargerDisplay />
    </div>
  );
};

export default Home;
