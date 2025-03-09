import Applydetails from "./ApplyDetails/Applydetails";
import Banner from "./Banner/Banner";
import CollegeCard from "./CollegeCard/CollegeCard";
import CollegeGallery from "./CollgeGellary/CollegeGallery";
import Research from "./ResearchePaper/Research";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div className="">
            <Banner/>
            <CollegeCard/>
            <CollegeGallery/>
            <Research/>
            <Applydetails />
         
                <Review />
                
           
          

        </div>
    );
};

export default Home;