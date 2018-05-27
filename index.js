hexo.extend.tag.register('ruby', function(args,content) {
  var ruby_tag = "<ruby>";
  content = content.replace('\r\n',';').replace('\n',';').replace('\r','');
  var segements = content.split(';');
  for( segement in segements ) {
    segement = segment.trim();
    if(segment == '') {
      continue;
    }
    var splited = segement.split('|');
    var origin = splited[0].trim();
    var annotation = origin;
    if (splited.length > 1) {
      annotation = splited[1].trim();
    }
    ruby_tag += ( origin + "<rp>(</rp><rt>" + annotation + "</rt><rp>)</rp>" );
  }
  ruby_tag += "</ruby>";
  
  return ruby_tag;
}, {ends: true});
