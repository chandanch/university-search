/**
 * @author chandan
 */
import "./App.css";
import UniversitySearch from "./components/university-search/UniversitySearch";

function App() {
  return (
    <div>
      <h1 className="ui header">University Search Portal</h1>
      <div className="ui divider"></div>

      <UniversitySearch />
    </div>
  );
}

export default App;
