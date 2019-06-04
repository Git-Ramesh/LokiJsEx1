var idbAdapter = new LokiIndexedAdapter('DATABASETEST');
idbAdapter.getDatabaseList(function(result) {
    // result is array of string names for that appcontext ('finance')
    result.forEach(function(str) {
      console.log(str);
    });
  });

  