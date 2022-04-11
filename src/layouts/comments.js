import React from 'react'
import { Outlet } from 'react-router-dom'

import '../styles/style.css'

export const CommentLayout = () => {
	return (
		<div className="container-fluid body investa-font">
			<div className="row h-100">
				<div className="col-md-12 side p-5 d-flex flex-column justify-content-center">
					<img src="https://fountain-pay.com/images/FountainPay-logo.png" className="logo d-block d-md-none" alt="LOGO" />
					<Outlet />
				</div>
			</div>
		</div>
	)
}
