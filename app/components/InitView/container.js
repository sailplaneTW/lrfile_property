import component from './component'
import { connect } from 'react-redux';
import { bindActionCreator } from 'app/services/actions';

const mapStateToProps = state => ({
  member: state.member,
  global: state.global,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreator(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);
