import "./More.css";

import MoreHeader from "../../components/MoreHeader.jsx";

// Import pictures
import pic1 from '../../assets/me1.jpg';
import pic2 from '../../assets/obersee2.jpg';
import pic3 from '../../assets/me3.jpg';
import pic4 from '../../assets/me4.jpg';

const items = [
	pic1,
	pic2,
	pic3,
	pic4
]
	
function More() {
  return (
		<>
			{/* Header */}
			<MoreHeader />

			<main className="more" id="more">
				<div className="more__title">
					<h2>Snippets of my Life</h2>
				</div>

				<div className="more__masonry">
					{items.map((pic, index) => (
						<img src={pic} alt="pic" key={index} loading="blur"/>
					))}
				</div>
			</main>
		</>
		
	);
}

export default More;
