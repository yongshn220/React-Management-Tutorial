const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id':1,
        'image': 'https://placeimg.com/64/64/1',
        'name': "yongjung",
        'birthday': "990306",
        'gender': 'male',
        'job': "student"
        },
        {
        'id':2,
        'image': 'https://placeimg.com/64/64/2',
        'name': "hun",
        'birthday': "790306",
        'gender': 'female',
        'job': "student"
        },
        {
        'id':3,
        'image': 'https://placeimg.com/64/64/3',
        'name': "park",
        'birthday': "890306",
        'gender': 'female',
        'job': "student"
        }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));

