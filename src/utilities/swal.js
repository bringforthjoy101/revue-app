import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const swal = (title, text = '', icon = '') => {
	return MySwal.fire({
		title,
		text,
		icon,
		customClass: {
			confirmButton: 'btn btn-primary',
		},
		buttonsStyling: false,
	})
}
