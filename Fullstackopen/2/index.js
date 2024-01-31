const express = require("express");
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(express.json())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
  {
    id: 5,
    name: "Juanito Sukiduki",
    number: "11-22-6463125",
  },
];
let phonebook = [
  {
    id: 1,
    dateTime: Date(),
  },
  {
    id: 2,
    dateTime: Date(),
  },
  {
    id: 3,
    dateTime: Date(),
  },
  {
    id: 4,
    dateTime: Date(),
  },
  {
    id: 5,
    dateTime: Date(),
  },
];
const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};
app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/api/info", (request, response) => {
  const personInfo = phonebook.map((person) => person.dateTime);
  response.send(
    `<p>Phonebook has info for ${phonebook.length} people</p> ${personInfo}`
  );
});
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.filter((person) => person.id === id);
  response.send(person);
});
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  personDel = persons.filter((person) => person.id !== id);
  console.log(personDel);
  response.status(404).end();
});

app.post("/api/persons", (request, response,next) => {
  const body = request.body;
  const personaInfo=persons.filter((person) => person.name==body.name)
  
  if (personaInfo[0]) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  else if (body.name=="") {
    return response.status(400).json({
      error: "Name no empty",
    });
  }
  else if (body.number=="") {
    return response.status(400).json({
      error: "Number no empty",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);

response.json(person)
next(console.log(person))

});
const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

