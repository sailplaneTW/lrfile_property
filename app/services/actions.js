
import * as member from './member/action'
import * as global from './global/action'
import { bindActionCreators } from 'redux'

const bindActionCreator = (dispatch) => ({
  global: bindActionCreators(global, dispatch),
  member: bindActionCreators(member, dispatch),
});

export {
  bindActionCreator
};
