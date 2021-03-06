const express = require('express');
const app = express();
const fs = require('fs');
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/httplivestrem.html');
})

app.get('/video', (req, res) => {
	 const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }
	// get video stats (about 61MB)
  const videoPath = "vidoe.mp4";
  const videoSize = fs.statSync("vidoe.mp4").size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
})


app.get('/download', (req, res, next) => {
	const fileStream = fs.createReadStream(`${__dirname}/jisoo.jpg`);

	fileStream.on('open', () => {
		res.attachment('heelo.jpg');
		fileStream.pipe(res);
	})

	fileStream.on('error', error => {
		next(err);
	})
})

app.listen(8000, () => {
	console.log('Listening on port 8000!');
})
