function loadFile(id) {
  return new Promise((resolve, reject) => {
    const path = 'wsi-file'+id
    window.chrome.storage.sync.get(path, items => {
      const item = items[path]
      if (typeof item != 'string') return reject('file not found')
      resolve(item)
    })
  })
}

export default loadFile
