const {createClient} = require('@supabase/supabase-js')


const express = require('express')


const app = express()
const port = 3000

const supabase = createClient('https://nkdhqmirvgtvxzzonzwu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZGhxbWlydmd0dnh6em9uend1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzQ2MDAsImV4cCI6MjA0Nzc1MDYwMH0.8kfT574gewUG-OGGWsCOGHB0wwGVTzsyPRz33aNk5wg')

app.get('/products', async (req, res) => {

  const { data, error } = await supabase
  .from('products')
  .select()

  res.json(data)
})

app.post('/products', (req, res) => {
  res.send('Добавление продуктов')
})

app.delete('/products/:id', async (req, res) => {

  const response = await supabase
  .from('products')
  .delete()
  .eq('id', req.params.id)

  res.json('Продукт с id = ' + req.params.id + 'удален!')
})

app.put('/products', (req, res) => {
  res.send('Изменение продукта')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})