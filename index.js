const express = require('express');
const app = express();

const users=[
        {
            id: 1,
            name: 'Renar',
            age: 20
        },
        {
            id: 2,
            name: 'Nihad',
            age: 20
        },
        {
            id: 3,
            name: 'Rustam',
            age: 21
        },
    
    ]

    app.get('/users',  (req , res) => {
            const user=users
            if(!user) {res.status(404)}
            res.send(user)
        });

        app.listen(7000, function () {
                console.log('Example app listening on port 7000!');
              });