import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";
import Hero_background from "./components/Hero_background";
import Footer_Com from "./components/Footer_Com";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [arr, setarr] = useState([]);
  const userNameArr = [
    "kk_gangwar",
    "krotrn",
    "ujjwalsingh9939",
    "ROUSHAN_RAJ_17",
    "Harshit_Srivastava_25",
    "Harshal-03",
    "Arun_kumar7310",
    "AyushKumar98",
    "coder_bhumikaa",
    "ao55sdaK9Q",
    "Rishikesh2005"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          userNameArr.map(async (name) => {
            const response = await fetch(
              `https://leetcode-api-faisalshohag.vercel.app/${name}`
            );
            const data = await response.json();
            return {
              id_name: name,
              TotalSolved: data.totalSolved,
              MediumSolved:data.mediumSolved,
              HardSolved : data.hardSolved,
              EasySolved : data.easySolved,
              Ratings : 3.5*data.mediumSolved+data.easySolved+10*data.hardSolved
            };
          })
        );

        setarr(results);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {false && <Navbar />}
      <Hero_background />
      <Ranking heading={"Our Ratings"} arr={arr} typename={"Ratings"} variable={"Ratings"}/>
      <Ranking heading={"Total Questions Ranking"} arr={arr} typename={"TotalSolved"} variable={"Questions Solved"} />
      <Ranking heading={"Hard Questions Ranking"} arr={arr} typename={"HardSolved"} variable={"Questions Solved"}/>
      <Ranking heading={"Medium Questions Ranking"} arr={arr} typename={"MediumSolved"} variable={"Questions Solved"}/>
      <Ranking heading={"Easy Questions Ranking"} arr={arr} typename={"EasySolved"} variable={"Questions Solved"}/>
      <Footer_Com />
      </div>
  );
}

export default App;
