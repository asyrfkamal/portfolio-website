import "./More.css";

import MoreHeader from "../../components/MoreHeader.jsx";

// Import pictures
import pic1 from '../../assets/me1.jpg';
import pic2 from '../../assets/obersee2.jpg';
import pic3 from '../../assets/me3.jpg';
import pic4 from '../../assets/me4.jpg';

// Import pics
import berembun1 from '../../assets/more/berembun-1.jpg';
import berembun2 from '../../assets/more/berembun-2.jpg';
import berembun3 from '../../assets/more/berembun-3.jpg';
import peak1 from '../../assets/more/peak-1.jpg';
import peak2 from '../../assets/more/peak-2.jpg';
import peak3 from '../../assets/more/peak-3.jpg';
import peak4 from '../../assets/more/peak-4.jpg';
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
import thai1 from '../../assets/more/thai-1.jpg';
import thai6 from '../../assets/more/thai-6.jpg';
import thai7 from '../../assets/more/thai-7.jpg';
import thai8 from '../../assets/more/thai-8.jpg';

import bad1 from '../../assets/more/bad-1.jpg';
import bad2 from '../../assets/more/bad-2.jpg';
import bola1 from '../../assets/more/bola-1.jpg';
import bola2 from '../../assets/more/bola-2.jpg';
import bola3 from '../../assets/more/bola-3.jpg';
import bola4 from '../../assets/more/bola-4.jpg';
import bola5 from '../../assets/more/bola-5.jpg';
import bola6 from '../../assets/more/bola-6.jpg';
import bola7 from '../../assets/more/bola-7.jpg';
import bola8 from '../../assets/more/bola-8.jpg';
import bola9 from '../../assets/more/bola-9.jpg';
import bola10 from '../../assets/more/bola-10.jpg';
import bola11 from '../../assets/more/bola-11.jpg';
import bola12 from '../../assets/more/bola-12.jpg';
import bola13 from '../../assets/more/bola-13.jpg';
import stadium1 from '../../assets/more/stadium-1.jpg';
import stadium2 from '../../assets/more/stadium-2.jpg';
import obs1 from '../../assets/more/obs-1.jpg';
import obs2 from '../../assets/more/obs-2.jpg';
import kayak1 from '../../assets/more/kayak-1.jpg';
import mnight1 from '../../assets/more/mnight-1.jpg';
import mnight2 from '../../assets/more/mnight-2.jpg';


const hikings = [
	berembun3,
	edin1,
	edin2,
	edin3,
	edin6,
	obersee3,
	obersee2,
	scotland3,
	obersee6,
	obersee5,
	peak2,
	obersee8,
	scotland1,
	obersee9,
	scotland2,
	peak4,
	scotland4,
	berembun2,
	berembun1,
	peak1,
	peak3,
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
	turkey5,
	thai1,
	thai6,
	thai7,
	thai8,
	stadium1,
	stadium2
]

const sports = [
	bola1,
	obs2,
	bola2,
	bad1,
	bola3,
	bola4,
	kayak1,
	bola5,
	bola6,
	obs1,
	bola7,
	bola8,
	mnight1,
	bola9,
	bola10,
	bad2,
	bola11,
	bola12,
	mnight2,
	bola13,
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
							Involvements
						</h3>
						<p>
							Staying active helps me maintain focus and energy
						</p>
					</div>
					<div className="passion__masonry-wrapper">
						<div className="passion__masonry-wrapper-sec">
							<div className="passion__masonry">
								{sports.map((pic, index) => (
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
