/**
 * App
 *
 * @summary App component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-20 02:08:05
 * Last modified  : 2019-05-20 02:12:17
 */

import MainStyles from './main-styles';
const App = props => {
	console.log(props);
	return (
		<div>
			<style jsx>
				{`
					@import './css/test.css'
					body{
						height: auto,
						width: 100vh
					}
				`}
			</style>
			{props.children}
		</div>
	);
};

export default App;
