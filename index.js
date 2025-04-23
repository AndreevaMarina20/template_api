const supabase = createClient('https://hsyundcrtyabhhgkslnk.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeXVuZGNydHlhYmhoZ2tzbG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTY1MDYsImV4cCI6MjA2MDk5MjUwNn0.hNJaR2pXaqWl76rxs6MY5_DnrezXujzuheFTPpB3Fkw')

const express = require('express')
const color = require('colorette')

const app = express()
const port = 3000

app.get('/students', async (req, res) => {

  const { data, error } = await supabase
  .from('students')
  .select()

  res.json(data)
})

app.post('/students', (req, res) => {
  res.send('Добавление студентов')
})

app.delete('/students/:id', async (req, res) => {

  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)

  res.json('Студент с id = ' + req.params.id + 'удален!')
})

app.put('/students', (req, res) => {
  res.send('Изменение студента')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})