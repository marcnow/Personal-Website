import React from "react";
import NavBar from "../NavBar";
import Footer from "../footer/Footer"
import BasicTable from "../BasicTable";

const gitHubName = "marcnow";
  
  function getRepositories() {
    var repositories = [];
  
    fetch(`https://api.github.com/users/${gitHubName}/repos`)
      .then(response => {
         response.json()
      })
      .then(data => {
        data.forEach(item => {
            repositories.push({name: item.name, description: item.description, language: item.language, createdAt: item.created_at, size: item.size});
        })
      })
      console.log(repositories)
      return repositories;
    }
    

export default function Software() {

      return (
      <div>
        <div className="placeholder-div">
          <NavBar/>
            <div className="futureVentures w-full p-5">
              <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[73rem] bg-white">
                <div className="p-8">
                  <h3 onClick={() => getRepositories} className="tracking-[.4em] text-3xl pb-16">SOFTWARE REPOSITORY</h3>
                  <BasicTable repositories={getRepositories()}/>
                </div>
              </div>
            </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
}