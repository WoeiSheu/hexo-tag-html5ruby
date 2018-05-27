hexo.extend.tag.register('ruby', function(args,content) {
  let ruby_tag = "<ruby>";
  content = content.replace('\r\n',';').replace('\n',';').replace('\r','');
  let segments = content.split(';');
  for( let segment of segments ) {
    segment = segment.trim();
    console.log(segment);
    if(!segment) {
      continue;
    }
    let splited = segment.split('|');
    let origin = splited[0].trim();
    let annotation = origin;
    if (splited.length > 1) {
      annotation = splited[1].trim();
    }
    ruby_tag += ( origin + "<rp>(</rp><rt>" + annotation + "</rt><rp>)</rp>" );
  }
  ruby_tag += "</ruby>";
  
  return ruby_tag;
}, {ends: true});
