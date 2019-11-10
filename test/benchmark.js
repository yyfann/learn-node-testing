const Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

// add tests
suite
  .add('RegExp#test', function () {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', function () {
    'Hello World!'.indexOf('o') > -1;
  })
  // add listeners
  .on('cycle', function (event) {
    // 展示每个不同的测试描述
    console.log(String(event.target));
  })
  .on('complete', function () {
    // 使用suite的filter方法, 识别哪个执行的最快
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });