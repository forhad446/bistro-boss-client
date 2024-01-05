import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bostro Boss || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            this is home page
        </div>
    );
};

export default Home;