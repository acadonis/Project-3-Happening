function seedify() {
  const arr = []
  a.events.forEach(event => {
    const obj = {}
    for (const key in event) {
      if (key === 'description') {
        const re = /(<\w*>|<\/\w*>|<\w*\/>)/gi
        event[key] = event[key].replace(re, '\n')
        obj[key] = event[key]
      } else if (happeningPs.some(str => str === key)){
        obj[key] = event[key]
      } if (key === 'lat') {
        obj['lat'] = event.venue.lat
      } if (key === 'lon') {
        obj['lon'] = event.venue.lon
      } if (key === 'featured_photo') {
        obj['photo'] = event.featured_photo.photo_link
      } if (key === 'venue') {
        obj['venue'] = event[key].name
      }
    }
    obj['city'] = 'London'
    obj['postcode'] = 'Dummy'
    obj['postcode'] = 'Dummy'
    arr.push(obj)
  })
  return [JSON.stringify({arr}), a]
}
