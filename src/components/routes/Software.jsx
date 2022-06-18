import React from 'react';
import NavBar from '../NavBar';
import Footer from '../footer/Footer';
import BasicTable from '../BasicTable';

export default function Software() {
  const [githubData, setGithubData] = React.useState([]);
  const githubUser = 'marcnow';

  function fetchData() {
    return fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <div className="primaryColor">
          <div className="pt-12 pb-12 ml-auto mr-auto pr-2 pl-2 w-[70%] max-w-[84rem] text-center">
            <h1 className="text-6xl mb-8 mt-2">Software</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="p-8 primaryColor text-white pb-[17.5rem]">
          <BasicTable data={githubData} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
