import AUbutton from '../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const Intro = ({ title, url, imgalt, imgurl, _relativeURL, _ID, cta, _body }) => (
	<div className="intro">
		<div className="row">

			<div className="col-sm-12 col-md-6 col-md-push-6">
				<div className="intro__img">
					<img className="au-responsive-media-img"
						src={ _relativeURL( imgurl , _ID ) }
						alt={ imgalt } />
				</div>
			</div>

			<div className="intro__text col-sm-12 col-md-5 col-md-pull-6">
				{ title ? <h2 className="intro__title">{ title }</h2> : '' }
				<div className="content">{ _body }</div>
				{ url ?
					<p className="intro__cta">
					<AUbutton link={ url } as='secondary'>{ cta }</AUbutton>
				</p>
				: '' }
			</div>

		</div>
	</div>
);

Intro.propTypes = {
	/**
	 * title: About
	 */
	title: PropTypes.string,

	/**
	 * imgurl: http://placehold.it/500x400
	 */
	imgurl: PropTypes.string.isRequired,

	/**
	 * imgalt: Intro Alt Tag
	 */
	imgalt: PropTypes.string.isRequired,

	/**
	 * url: /get-started
	 */
	url: PropTypes.string,

	/**
	 * cta: Get started
	 */
	cta: PropTypes.string,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

export default Intro;
