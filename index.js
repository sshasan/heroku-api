const express = require('express')
const cool = require('cool-ascii-faces')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/branchDetails', async (req, res) => {
    try {
      const ifscCode = req.query.ifscCode || null;
      const client = await pool.connect()
      const query = "SELECT * FROM branches where ifsc='"+ifscCode+"'";
      console.log(query);
      const result = await client.query(query);
      console.log(result.rows[0]);
      const results = { 'results': (result) ? result.rows[0] : null};
      res.render('pages/branchDetails', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/allBranches', async (req, res) => {
    try {
      const bankName = req.query.bankName || null;
      const city = req.query.city || null;
      const client = await pool.connect()
      const query = "SELECT * FROM (SELECT * FROM banks LEFT JOIN branches ON banks.id = branches.bank_id) as temp where temp.name='"+bankName+"' and temp.city='"+city+"'";
      // console.log(query);
      const result = await client.query(query);
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/allBranches', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))