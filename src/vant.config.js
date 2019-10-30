import Vue from 'vue';
import {
    Button,
    RadioGroup,
    Radio,
    Field,
    Cell,
    CellGroup,
    Toast,
    Icon,
    Circle
} from 'vant';

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Circle);

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);