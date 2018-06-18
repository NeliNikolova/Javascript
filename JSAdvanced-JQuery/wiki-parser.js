function wikiParser(section) {
  let italicRegex=/''([A-Za-z0-9\s]+)''/gm;
  let boldRegex=/'''([A-Za-z0-9\s]+)'''/gm;
 let h1Regex=/=([A-Za-z0-9\s]+)=/gm;
    let h2Regex=/==([A-Za-z0-9\s]+)==/gm;
    let h3Regex=/===([A-Za-z0-9\s]+)===/gm;
    let firstHyperlink=/\[\[([^|\[\]]+)\]\]/gm;
    let secondHyperlink=/\[\[([^'=\[]*?)\|([^'=\[]*)\]\]/gm;
    let text=$(section).text();
        text=text.replace(boldRegex,`<b>$1</b>`)
            .replace(italicRegex,(match,gr1)=>`<i>${gr1}</i>` )
            .replace(h3Regex,`<h3>$1</h3>`)
            .replace(h2Regex,`<h2>$1</h2>`)
            .replace(h1Regex,`<h1>$1</h1>`)
            .replace(firstHyperlink,'<a href="/wiki/$1">$1</a>')
            .replace(secondHyperlink,'<a href="/wiki/$1">$2</a>');

    $(section).html(text);

}
