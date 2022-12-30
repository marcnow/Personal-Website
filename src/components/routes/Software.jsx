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
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
        </header>
        <main className="main-container">
          {/* we calculate the height based on the
          screen size minus the padding top (5rem) and the footer height */}
          <div className="primaryColor pt-20">
            <div>
              <h1 className="text-center">Software</h1>
            </div>
            <div>
              <BasicTable data={githubData} />
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
