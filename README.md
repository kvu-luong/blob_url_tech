### Server node http live streaming

Feature: play video, download file
[video](https://www.youtube.com/watch?v=ZjBLbXUuyWg)

### Download http live streaming
[video](https://www.youtube.com/watch?v=ajn0mais6a8)
[documentation hls.js](https://github.com/video-dev/hls.js)
[example](https://getademo.in/hls/)

### Check addblock

```
async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    console.log(`AdBlock Enabled: ${adBlockEnabled}`)
  }
}
detectAdBlock()
```

### Disable devtool

[Script disable devtool](https://www.npmjs.com/package/disable-devtool)

### Add cors same origin to prevent call from other website 