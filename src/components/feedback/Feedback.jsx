import React from "react";
import "./feedback.css";
import comma from "../../images/icons/bg-quotes.png";
import client1 from "../../images/profile/profile-1.jpg";
import client2 from "../../images/profile/profile-2.jpg";
import client3 from "../../images/profile/profile-3.jpg";

function Feedback() {
	return (
		<div>
			<section className='section-feedback'>
				<img src={comma} alt='comma' />
				<div className='wrapper-feedback'>
					<div className='feedback-card'>
						<div className='feedback-text'>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
						</div>
						<div className='feedback-info'>
							<div className='feebback-img'>
								<img src={client1} alt='profile' />
							</div>
							<div className='feedback-profileInfo'>
								<h4>Satish Poudel</h4>
								<span> Founder & CEO, Muddle </span>
							</div>
						</div>
					</div>
					<div className='feedback-card'>
						<div className='feedback-text'>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
						</div>
						<div className='feedback-info'>
							<div className='feebback-img'>
								<img src={client2} alt='profile' />
							</div>
							<div className='feedback-profileInfo'>
								<h4>Bruce Mckenzie. </h4>
								<span> Founder & CEO, Muddle </span>
							</div>
						</div>
					</div>
					<div className='feedback-card'>
						<div className='feedback-text'>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
						</div>
						<div className='feedback-info'>
							<div className='feebback-img'>
								<img src={client3} alt='profile' />
							</div>
							<div className='feedback-profileInfo'>
								<h4>Iva Boyd </h4>
								<span> Founder & CEO, Muddle </span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Feedback;
