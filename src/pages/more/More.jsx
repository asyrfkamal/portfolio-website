import "./More.css";

import MoreHeader from "../../components/MoreHeader.jsx";

// Import pictures
import pic1 from '../../assets/me1.jpg';
import pic2 from '../../assets/obersee2.jpg';
import pic3 from '../../assets/me3.jpg';
import pic4 from '../../assets/me4.jpg';

const items = [
	pic1,
	pic3,
	pic4,
	pic2,
	pic1,
	pic3,
	pic4,
	pic2,
	pic1,
	pic3,
	pic4,
	pic2,
	pic1,
	pic3,
	pic4,
	pic2,
]
	
function More() {
  return (
		<>
			{/* Header */}
			<MoreHeader />

			<main className="more" id="more">
				<div className="more__title">
					<h2>Get to Know Me More !</h2>
					<p>Beyond the code - here’s a glimpse into my life, passions, and journey</p>
				</div>

				<div className="passion" id="hiking">
					<div className="passion__content">
						<h3>
							Hiking & <br />  
							Adventures
						</h3>
						<p>
							When I’m not coding, you’ll find me exploring trails and challenging myself
						</p>
					</div>
					<div className="passion__masonry-wrapper">
						<div className="passion__masonry-wrapper-sec">
							<div className="passion__masonry">
								{items.map((pic, index) => (
									<img src={pic} alt="pic" key={index} loading="blur"/>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="passion" id="travel">
					<div className="passion__masonry-wrapper">
						<div className="passion__masonry-wrapper-sec">
							<div className="passion__masonry">
								{items.map((pic, index) => (
									<img src={pic} alt="pic" key={index} loading="blur"/>
								))}
							</div>
						</div>
					</div>
					<div className="passion__content">
						<h3>
							Travel & <br /> 
							Cultures
						</h3>
						<p>
							From Malaysia to the UK, i love experiencing new places and perspectives
						</p>
					</div>
				</div>

				<div className="passion" id="sports">
					<div className="passion__content">
						<h3>
							Sports & <br />
							Fitness
						</h3>
						<p>
							Staying active helps me maintain focus and energy
						</p>
					</div>
					<div className="passion__masonry-wrapper">
						<div className="passion__masonry-wrapper-sec">
							<div className="passion__masonry">
								{items.map((pic, index) => (
									<img src={pic} alt="pic" key={index} loading="blur"/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* <div className="more__masonry-wrapper">
					<div className="more__masonry">
						{items.map((pic, index) => (
							<img src={pic} alt="pic" key={index} loading="blur"/>
						))}
					</div>
				</div> */}
			</main>
		</>
	);
}

export default More;
