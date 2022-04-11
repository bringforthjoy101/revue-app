import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { swal } from '../../utilities/swal'
import { apiRequest } from '../../utilities/axios'
// import { AvForm, AvInput } from 'availity-reactstrap-validation'
import { Button, FormGroup, Label, FormText } from 'reactstrap'

export default Comment = () => {
	const [staffs, setStaffs] = useState(null)
	const [commentData, setCommentData] = useState({
		comment: '',
		staffId: '',
		businessId: 1,
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		const getStaffs = async () => {
			try {
				const response = await apiRequest({ url: '/staffs', method: 'POST', body: { businessId: 1 } })
				// console.log('response', response)
				if (response.data.status) {
					setStaffs(
						response.data.data.map((staff) => {
							return { id: staff.id, names: staff.names }
						})
					)
				} else {
					setStaffs([])
				}
			} catch (error) {}
		}
		getStaffs()
	}, [])

	const onSubmit = async (event) => {
		event?.preventDefault()
		const body = JSON.stringify(commentData)
		console.log(body)
		try {
			setIsSubmitting(true)
			const response = await apiRequest({ url: '/comment/create', method: 'POST', body })
			if (response) {
				setIsSubmitting(false)
				if (response.data.status) {
					setCommentData({
						comment: '',
						staffId: '',
						businessId: 1,
					})
					swal('Great job!', 'Comment Submitted', 'success')
				} else {
					swal('Oops!', response.data.message, 'error')
				}
			} else {
				setIsSubmitting(false)
				swal('Oops!', 'Something went wrong with your network.', 'error')
			}
		} catch (error) {
			console.error({ error })
		}
	}

	return (
		<div>
			<h3>
				Send Review Comments <br />
				Anonymously
			</h3>
			<p className="p-text">Welcome to Revue App </p>

			<form onSubmit={onSubmit}>
				<FormGroup>
					<select
						name="staffId"
						id="staffId"
						required
						value={commentData.staffId}
						className="form-select select-form"
						aria-label="Default select example"
						style={{ height: '45px', fontSize: '11pt', marginTop: '0px', borderRadius: '10px' }}
						onChange={(e) => setCommentData({ ...commentData, staffId: e.target.value })}
					>
						<option value="">Select Staff</option>
						{staffs?.map((staff) => (
							<option value={staff.id} key={staff.id}>
								{staff.names}
							</option>
						))}
					</select>
				</FormGroup>
				<FormGroup>
					<textarea
						className="form-control"
						id="comment"
						name="comment"
						rows="4"
						cols="50"
						value={commentData.comment}
						onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
					/>
				</FormGroup>
				<div className="d-grid gap-2 col-12 mx-auto">
					<button type="submit" className="btn btn-primary btn-lg signup" id="register-btn" disabled={isSubmitting}>
						{isSubmitting && (
							<span className="spinner-border spinner-border-sm" style={{ width: '20px', height: '20px' }} role="status" aria-hidden="true"></span>
						)}
						Post Comment
					</button>
				</div>
			</form>

			<h4 className="text-center reg">
				Want to see all comments ?{' '}
				<Link to="/comments" className="link">
					Check In Here
				</Link>
			</h4>
		</div>
	)
}
