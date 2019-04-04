  function make_url(value) {
    value = utfdecode(value);
    $('#url_case').text(value);
    $('#url').val(value)
  }

  function utfdecode(s) {
        var r = s.toLowerCase();
            r = r.trim();
            r = r.replace(new RegExp(/[àáâãäå]/g),"a");
            r = r.replace(new RegExp(/[èéêë]/g),"e");
            r = r.replace(new RegExp(/[ìíîï]/g),"i");
            r = r.replace(new RegExp(/ñ/g),"n");
            r = r.replace(new RegExp(/[òóôõö]/g),"o");
            r = r.replace(new RegExp(/[ùúûü]/g),"u");
            r = r.replace(new RegExp(/[.,¿¡!$%&/()=?#@-_:;{}*'+`"´¨]/g),"");
            r = r.replace(new RegExp(/\s/g),"-");
            do {
              r = r.replace(new RegExp(/--/g),"-");
            } while (r.indexOf('--') != -1);
 return r;
}
