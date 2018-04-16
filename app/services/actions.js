
import * as member from './member/action';
import { bindActionCreators } from 'redux';

const bindActionCreator = (dispatch) => ({
  member: bindActionCreators(member, dispatch),
});

export {
  bindActionCreator
};
