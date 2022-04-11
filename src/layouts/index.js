import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Outlet, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import axios from 'axios'

import '../styles/style.css'

// import Login from '../components/auth/Login'
import { apiRequest } from '../utilities/axios'
import { Storage } from '../utilities/storage'

export default function Index() {
	return (
		// <Router>
		<div className="container-fluid body investa-font">
			<div className="row h-100">
				<div className="col-md-6 back d-none d-md-block">
					<div className="cover h-100 p-5">
						<img src="https://fountain-pay.com/images/favicon.png" className="logo" alt="LOGO" />
						<h2 className="top-margin">Revue App</h2>
						<p className="text-white">
							Make anonymous reviews on staffs
							<br /> In your organzation
						</p>
					</div>
				</div>
				<div className="col-md-6 side p-5 d-flex flex-column justify-content-center">
					{/* <img src="https://fountain-pay.com/images/favicon.png" className="logo d-block d-md-none" alt="LOGO" /> */}
					<Outlet />
					{/* <Routes> */}
					{/* <Route exact path="/comment">
							<Comment />
						</Route> */}
					{/* </Routes> */}
				</div>
			</div>
		</div>
		// </Router>
	)
}

function Button() {
	return <input type="submit" value={this.props.value} className={'btn btn-' + this.props.type + ' btn-block btn-lg signup'} />
}
