import React, { Component } from 'react'
import HKUPA from '../logos/HKUPA.png'
import SFOC from '../logos/SFOC.png'
import LCSD from '../logos/LCSD.png'
import Yikun from '../logos/Yikun.png'
import CJ from '../logos/CJ.png'
import TipTop from '../logos/TipTop.png'
import title from '../logos/title.png'

class Home extends Component {
	render() {
		return (
			<div>
				<div className="container title">
					<div className="row">
						<div className="col-12">
							<img className="title img-fluid" src={title} alt="title" />
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<h5>Co-Organized By:</h5>
							<img className="logo1" src={HKUPA} alt="SFOC" />
						</div>
						<div className="col-4">
							<h5>Organized By:</h5>
							<img className="logo1" src={SFOC} alt="SFOC" />
						</div>
						<div className="col-4">
							<h5>Subvented By:</h5>
							<img className="logo1" src={LCSD} alt="SFOC" />
						</div>
					</div>
					<div className="row">
						<div className="col-12 home">
							<h5>Thank you to our sponsors!</h5>
							<img className="Yikun" src={Yikun} alt="Yikun" />
							<img className="CJ" src={CJ} alt="CJ" />
							<img className="TipTop" src={TipTop} alt="TipTop" />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h5>Follow HKUPA for more info about our future events!</h5>
							<a href="https://www.facebook.com/hkupa/">
								<i class="fab fa-facebook-square fa-2x icon" />
							</a>
							<a href="https://www.instagram.com/hkupa/?hl=en">
								<i class="fab fa-instagram fa-2x icon" />
							</a>
							<a href="http://www.hkupa.com/">
								<i class="fas fa-home fa-2x icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
