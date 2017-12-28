import Vue from 'vue';
import Router from 'vue-router';
import luck from 'luck/views/luck';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/luck',
			name: 'luck',
			component: luck
		}
	]
})
