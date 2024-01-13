
function App() {
  return (
    <div className="CMS-master">
    <nav className="navbar app">App bar</nav>
    <nav className="navbar board">App board </nav>
    <div className="board-columns">
    <div className="column">
      <header>Planning</header>
        <ul>
          <li>
            <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
              Design & Research
            </li>
          <li>second</li>
          <li>third</li>
        </ul>
      <footer>Add another Card</footer>
    </div>

    <div className="column">
      <header>Planning</header>
        <ul>
          <li>
            <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
              Design & Research
          </li>
          <li>second</li>
          <li>third</li>
        </ul>
        <footer>Add another Card</footer>
      </div>
    
    

    </div>
  </div>

    
  );
}

export default App;
