// CSS
import "./App.css";
import { toggleClass } from "../helpers/toggleClass";

// Components
import Header from "../components/Header/Header";
import List from "../components/List/List";

// DATA
import summaryJSON from "../data/summary.json";
import overviewJSON from "../data/overview.json";
const App = () => {

	return (
		<>
			<section className="container">
				<Header
					heading="Social Media Dashboard"
					text="Total Followers"
					score="23,004"
					modeText="Dark Mode"
					toggle={true}
				/>
				<div className="grid">
					<List data={summaryJSON} source="summary" />
				</div>
			</section>

			<section className="container">
				<Header heading="Overview - Today" />

				<div className="grid">
					<List data={overviewJSON} source="overview" small={true} />
				</div>
			</section>
		</>
	);
};

export default App;
