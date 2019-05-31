
import { Mu, MuMx } from '../mu';
import { MuCtxEventBindingMixin } from '../bindings';
import { attrToSelector } from '../util';

const EVENT_ATTR = {
  CLICK:  'mu-click',
  CHANGE: 'mu-change',
  SUBMIT: 'mu-submit',
};

/**
 * click binding to context
 * @example
 * <div mu-click="handler.click"></div>
 */
export class MuClick extends MuMx.compose(null,
  [MuCtxEventBindingMixin, [EVENT_ATTR.CLICK, 'click']],
) { }

/**
 * change binding to context
 * @example
 * <div mu-change="handler.change"></div>
 */
export class MuChange extends MuMx.compose(null,
  [MuCtxEventBindingMixin, [EVENT_ATTR.CHANGE, 'change']],
) { }

/**
 * submit binding to context
 * @example
 * <div mu-submit="handler.submit"></div>
 */
export class MuSubmit extends MuMx.compose(null,
  [MuCtxEventBindingMixin, [EVENT_ATTR.SUBMIT, 'submit']],
) { }


export default Mu
  .micro(MuClick, attrToSelector(EVENT_ATTR.CLICK))
  .micro(MuChange, attrToSelector(EVENT_ATTR.CHANGE))
  .micro(MuSubmit, attrToSelector(EVENT_ATTR.SUBMIT));