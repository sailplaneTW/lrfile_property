import component from './component'
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  member: state.member
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)