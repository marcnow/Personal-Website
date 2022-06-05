import React from "react";
import NavBar from "../NavBar";
import Footer from "../footer/Footer"
import BasicTable from "../BasicTable";
import SocialHomeGroup from "../landingpage/SocialHomeGroup";


export default function Software() {

  const [githubData, setGithubData] = React.useState([])
  const githubUser = "marcnow"

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((response) => response.json())
      .then((data) => setGithubData(data))
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="placeholder-div">
        <NavBar/>
          <div className="futureVentures w-full p-5">
            <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[84rem] bg-white">
              <div className="p-8">
                <h3 className="tracking-[.4em] text-3xl pb-16">SOFTWARE REPOSITORY</h3>
                <BasicTable data={githubData} />
              </div>
            </div>
          </div>
          <SocialHomeGroup />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    );
}