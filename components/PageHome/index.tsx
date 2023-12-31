import Parallax from "./Parallax";
import Details from "./Details";
import Work from "./Work";
import Advantages from "./Advantages";
import Offer from "./Offer";
import Protect from "./Protect";
import Acquaintance from "./Acquaintance";
import JoinCommunity from "../JoinCommunity";

type PageHomeProps = {};

const PageHome = ({}: PageHomeProps) => {
    return (
        <Parallax>
            {/* <Details /> */}
            <Offer />
            <Advantages />
            <Work />
            {/* <Protect /> */}
            {/* <Acquaintance /> */}
            <JoinCommunity />
        </Parallax>
    );
};

export default PageHome;
