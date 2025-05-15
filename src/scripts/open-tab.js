function setTargetBlankOnExternalLinks() {
  const links = document.getElementsByTagName('a')

  for (var i = 0; i < links.length; i++) {
    if (/^http/.test(links[i].getAttribute('href'))) {
      const link = links[i]
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    }
  }
}

setTargetBlankOnExternalLinks() // call this after the DOM is ready