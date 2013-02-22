require.config({
  paths: {
    'jquery' : '../lib/jquery.min',
  },
});

require(["jquery"], function ($)
{
  console.log('client app: jquery: ' + $().jquery);
});
