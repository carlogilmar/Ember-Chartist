import Route from '@ember/routing/route';

export default Route.extend({
	model: function () {
		return {
			chartData: {
				labels: ['Day1', 'Day2', 'Day3'],
				series: [
					[5, 4, 8],
					[10, 2, 7],
					[8, 3, 6]
				]
			}
		}
	}
});
