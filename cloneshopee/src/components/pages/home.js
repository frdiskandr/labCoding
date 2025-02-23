import { Button } from "@mui/material";
import Header from "../layout/header";

function HomePage() {
    return( 
    <div className="lg:w-[1100px] w-full mx-auto bg-[#F94F2F]">
        <Header/>
        <Button variant="contained" color="success">click</Button>
    </div>
    );
}

export default HomePage;
