import "./More.css";

import MoreHeader from "../../components/MoreHeader.jsx";

// Import pictures
import pic1 from '../../assets/me1.jpg';
import pic2 from '../../assets/obersee2.jpg';
import pic3 from '../../assets/me3.jpg';
import pic4 from '../../assets/me4.jpg';
	
function More() {
  return (
		<>
			{/* Header */}
			<MoreHeader />

			<main className="more" id="more">
				<div className="more__title">
					<h2>Gallery</h2>
				</div>

				<div className="more__masonry">
					<img src={pic1} alt="pic1" />
					<img src={pic2} alt="pic2" />
					<img src={pic3} alt="pic3" />
					<img src={pic4} alt="pic4" />
				</div>
				
			</main>
		</>
		
	);
}

export default More;
