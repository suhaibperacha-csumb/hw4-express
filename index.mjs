import express from "express"
import axios from "axios"
import oneLinerJoke from "one-liner-joke"



const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

// HOME
app.get("/", (req, res) => {
  res.render("index")
})

// DATABASES
app.get("/databases", (req, res) => {
  res.render("databases")
})

// SQL
app.get("/sql", (req, res) => {
  res.render("sql")
})

// REAL WORLD
app.get("/realworld", (req, res) => {
  res.render("realworld")
})

app.get("/quotes", (req, res) => {
    const joke = oneLinerJoke.getRandomJoke()
    res.render("quotes", { quote: joke.body })
  })
  
   

// API DATA (Web API)
app.get("/api-data", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const response = await axios.get(url)
  const users = response.data
  res.render("api", { users })
})

app.listen(3000, () => console.log("server running on port 3000"))
