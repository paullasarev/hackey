require.config({
  paths: {
    'jquery' : '../lib/jquery.min',
    'underscore' : '../lib/underscore.min',
    'backbone' : '../lib/backbone.min',
  },
});

require(['jquery', 'underscore', 'backbone'], function (jq, us, bb)
{
  console.log('client: jquery: ' + jq().jquery);
  console.log('client: underscore: ' + us.VERSION);
  console.log('client: backbone: ' + bb.VERSION);
});
