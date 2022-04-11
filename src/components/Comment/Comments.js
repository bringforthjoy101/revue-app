import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field } from 'formik'
import Swal from 'sweetalert2'
import axios from 'axios'
import { apiRequest } from '../../utilities/axios'
import moment from 'moment'

export const Comments = () => {
	const [comments, setComments] = useState(null)
	useEffect(() => {
		const getComments = async () => {
			try {
				const response = await apiRequest({ url: '/comments', method: 'POST', body: { businessId: 1 } })
				if (response.data.status) {
					setComments(
						response.data.data.map((comment) => {
							return { id: comment.id, comment: comment.comment, time: moment(comment.createdAt).fromNow(), staff: comment.staff.names }
						})
					)
				} else {
					setComments([])
				}
			} catch (error) {}
		}
		getComments()
	}, [])

	return (
		<div>
			<h3>Comments</h3>
			{/* <p className="p-text">Welcome to Revue App where you get feedback on your performance</p> */}
			{comments?.map((comment) => (
				<div className="card border-light mb-3" style={{ margin: '1rem' }} key={comment.id}>
					<div className="card-header">TO: {comment.staff}</div>
					<div className="card-body">
						{/* <h5 className="card-title">Light card title</h5> */}
						<p className="p-text">{comment.comment}</p>
						<p className="p-text text-muted text-end">{comment.time}</p>
					</div>
				</div>
			))}

			<h4 className="text-center reg">
				Back to post comment ?{' '}
				<Link to="/" className="link">
					Click Here
				</Link>
			</h4>
		</div>
	)
}
