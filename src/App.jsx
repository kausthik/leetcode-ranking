import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";
import Hero_background from "./components/Hero_background";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [maxQuestions, setMaxQuestions] = useState([]);
  const userNameArr = [
    "kk_gangwar",
    "krotrn",
    "ujjwalsingh9939",
    "ROUSHAN_RAJ_17",
    "Harshit_Srivastava_25",
    "Harshal-03",
    "Arun_kumar7310",
    "AyushKumar98",
    "coder_bhumikaa"
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
              Ranking:data.ranking,
              MediumSolved:data.mediumSolved,
              HardSolved : data.hardSolved,
              EasySolved : data.easySolved
            };
          })
        );

        // Sort the results before setting the state
        const sortedResults = results.sort(
          (a, b) => b.TotalSolved - a.TotalSolved
        );
        setMaxQuestions(sortedResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero_background />
      <Ranking heading={"Total Questions Ranking"} arr={maxQuestions} typename={"TotalSolved"} />
      <Ranking heading={"Leetcode Ranking"} arr={maxQuestions} typename={"Ranking"}/>
      <Ranking heading={"Hard Questions Ranking"} arr={maxQuestions} typename={"HardSolved"}/>
      <Ranking heading={"Medium Questions Ranking"} arr={maxQuestions} typename={"MediumSolved"}/>
      <Ranking heading={"Easy Questions Ranking"} arr={maxQuestions} typename={"EasySolved"}/>
    </>
  );
}

export default App;
