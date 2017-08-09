import PropTypes from 'prop-types'

const MountOptions = {
    context: {
        router: {
            history: {
                createHref: (a, b) => {
                },
                push: () => {
                },
                replace: () => {
                }
            }
        }
    }, childContextTypes: {
        router: PropTypes.object
    }
}

export default MountOptions
