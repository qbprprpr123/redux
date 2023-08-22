// vote版块要派发的行为对象管理
import { VOTE_SUP, VOTE_OPP } from '@/store/action-types';

const voteAction = {
  support() {
    return {
      type: VOTE_SUP,
    };
  },
  oppose() {
    return {
      type: VOTE_OPP,
    };
  },
};

export default voteAction;
