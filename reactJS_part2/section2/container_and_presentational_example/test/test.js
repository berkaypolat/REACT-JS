let shallow = require('enzyme/shallow'),
    GuineaPigs = require('../components/GuineaPigs').GuineaPigs;

describe('', function () {
  it("GuineaPigs should have a render function, but no other properties", function () {
  	let wrapper = shallow(
  		<GuineaPigs guineaPig={{
  			saying: 'fred',
  			path: 'bed'
  		}} />
  	),
  		instance = wrapper.instance();

  	[
  		'getInitialState',
  		'nextGuinea',
  		'interval',
  		'componentDidMount',
  		'componentWillUnmount'
  	].forEach(function (prop) {
  		expect(instance[prop]).to.not.exist;
  	});
  	expect(typeof instance.render).to.equal('function');
  });
});
