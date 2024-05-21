const express = require('express')
const server = express()

const data = [
    { id: 1, title: "X", content: "Lorem ipsum" },
    { id: 2, title: "Y", content: "Lorem ipsum" },
    { id: 3, title: "Z", content: "Lorem ipsum" },
];

server.get('/data', (req, res) => {
    res.json(data);
});


server.get("/data/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = data.find((data) => data.id === id);

  if (!data) {
    return res.status(404).send("data not found");
  } else {
    res.json(data);
  }
});

server.post("/data", (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: data.length + 1, title, content };
    data.push(newPost);
    res.status(201).json(newPost);
});

server.put("/data/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const index = data.findIndex((data) => data.id === id);
    if (index === -1) {
      return res.status(404).send("data not found");
    } else {
        data[index] = { ...data[index], title, content };
        res.json(data[index]);
    }
});

server.delete("/data/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = data.findIndex((data) => data.id === id);
    if (index === -1) {
      return res.status(404).send("data not found");
    }else {
        const deletedPost = data.splice(index, 1)[0];
        res.json(deletedPost);
    }
});

const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







