import "./More.css";

import MoreHeader from "../../components/MoreHeader.jsx";

// Import pictures
import pic1 from '../../assets/me1.jpg';
import pic2 from '../../assets/obersee2.jpg';
import pic3 from '../../assets/me3.jpg';
import pic4 from '../../assets/me4.jpg';

// Import pics
import edin1 from '../../assets/more/edin-1.JPEG';
import edin2 from '../../assets/more/edin-2.JPEG';
import edin3 from '../../assets/more/edin-3.JPEG';
import edin4 from '../../assets/more/edin-4.JPEG';
import edin5 from '../../assets/more/edin-5.JPEG';
import edin6 from '../../assets/more/edin-6.JPEG';
import germany1 from '../../assets/more/germany-1.JPEG';
import germany2 from '../../assets/more/germany-2.JPEG';
import germany3 from '../../assets/more/germany-3.JPEG';
import germany4 from '../../assets/more/germany-4.JPEG';
import germany5 from '../../assets/more/germany-5.JPEG';
import london1 from '../../assets/more/london-1.JPEG';
import london2 from '../../assets/more/london-2.JPEG';
import london3 from '../../assets/more/london-3.JPEG';
import london4 from '../../assets/more/london-4.JPEG';
import morocco1 from '../../assets/more/morocco-1.JPG';
import morocco2 from '../../assets/more/morocco-2.JPEG';
import morocco3 from '../../assets/more/morocco-3.JPEG';
import morocco4 from '../../assets/more/morocco-4.JPEG';
import morocco5 from '../../assets/more/morocco-5.JPEG';
import morocco6 from '../../assets/more/morocco-6.JPEG';
import morocco7 from '../../assets/more/morocco-7.JPEG';
import morocco8 from '../../assets/more/morocco-8.JPEG';
import obersee1 from '../../assets/more/obersee-1.JPEG';
import obersee2 from '../../assets/more/obersee-2.JPEG';
import obersee3 from '../../assets/more/obersee-3.JPEG';
import obersee4 from '../../assets/more/obersee-4.JPEG';
import obersee5 from '../../assets/more/obersee-5.JPEG';
import obersee6 from '../../assets/more/obersee-6.JPEG';
import obersee7 from '../../assets/more/obersee-7.JPEG';
import obersee8 from '../../assets/more/obersee-8.JPEG';
import obersee9 from '../../assets/more/obersee-9.JPEG';
import obersee10 from '../../assets/more/obersee-10.JPEG';
import salzburg1 from '../../assets/more/salzburg-1.JPEG';
import salzburg2 from '../../assets/more/salzburg-2.JPEG';
import salzburg3 from '../../assets/more/salzburg-3.JPEG';
import salzburg4 from '../../assets/more/salzburg-4.JPEG';
import salzburg5 from '../../assets/more/salzburg-5.JPEG';
import salzburg6 from '../../assets/more/salzburg-6.JPEG';
import scotland1 from '../../assets/more/scotland-1.JPEG';
import scotland2 from '../../assets/more/scotland-2.JPEG';
import scotland3 from '../../assets/more/scotland-3.JPEG';
import scotland4 from '../../assets/more/scotland-4.JPEG';
import scotland5 from '../../assets/more/scotland-5.JPEG';
import scotland6 from '../../assets/more/scotland-6.JPEG';
import scotland7 from '../../assets/more/scotland-7.JPEG';
import turkey1 from '../../assets/more/turkey-1.JPEG';
import turkey2 from '../../assets/more/turkey-2.JPEG';
import turkey3 from '../../assets/more/turkey-3.JPEG';
import turkey4 from '../../assets/more/turkey-4.JPEG';
import turkey5 from '../../assets/more/turkey-5.JPEG';


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

const hikings = [
	edin1,
	edin2,
	edin3,
	edin6,
	obersee3,
	obersee2,
	scotland3,
	obersee6,
	obersee5,
	obersee8,
	scotland1,
	obersee9,
	scotland2,
	scotland4,
]

const travels = [
	germany1,
	germany2,
	germany3,
	germany4,
	germany5,
	morocco1,
	morocco2,
	morocco3,
	morocco4,
	morocco5,
	morocco6,
	morocco7,
	morocco8,
	london1,
	london2,
	london3,
	london4,
	obersee1,
	obersee4,
	edin4,
	edin5,
	obersee7,
	obersee10,
	scotland5,
	scotland6,
	scotland7,
	salzburg1,
	salzburg2,
	salzburg3,
	salzburg4,
	salzburg5,
	salzburg6,
	turkey1,
	turkey2,
	turkey3,
	turkey4,
	turkey5
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
								{hikings.map((pic, index) => (
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
								{travels.map((pic, index) => (
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
