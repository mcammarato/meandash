var PythonShell = require('python-shell');

PythonShell.run('pocket.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
