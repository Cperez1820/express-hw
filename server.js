const express = require('express');

const app = express();

 const fs = require('fs')


app.engine('madeline', (filePath, options, callback) =>{
    fs.readFile(filePath, (err, content)=> {
        if (err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
            .replace('#content2#', '<div>' + options.content2 + '</div>')
        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'madeline')




// routes
app.get('/', (req, res) =>{
    res.send('<h1>Hello Learners!! </h1>')
});

// Route 1 Template 1
app.get('/chris', (req, res)=> {
    res.render('template', {
        title: 'Chris',
         message: 'Learner',
          content: 'Welcome to class',
           content2: '<br><br> <a href="/phillip">NEXT</a>',
        });
});

// Route 2 Temp 1
app.get('/phillip', (req, res)=> {
    res.render('template', {
        title: 'Phillip',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/steve">NEXT</a>',
        })
})

// Route 3 Temp 1
app.get('/steve', (req, res)=> {
    res.render('template', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/john">NEXT</a>',
        })
})

// Route 4 Temp 1
app.get('/john', (req, res)=> {
    res.render('template', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/bob">NEXT</a>',
        })
})

//Route 5 Temp 1
app.get('/bob', (req, res)=> {
    res.render('template', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/jasmine">NEXT</a>',
        })
})

//Route 6 Temp 2
app.get('/jasmine', (req, res)=> {
    res.render('template2', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/ramona">NEXT</a>',
        })
})

// Route 7 Temp 2
app.get('/ramona', (req, res)=> {
    res.render('template2', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/becky">NEXT</a>',
        })
})

// Route 8 Temp 2
app.get('/becky', (req, res)=> {
    res.render('template2', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/elizabeth">NEXT</a>',
        })
})

// Route 9 Temp 2
app.get('/elizabeth', (req, res)=> {
    res.render('template2', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/ana">NEXT</a>',
        })
})

// Route 10 Temp 2
app.get('/ana', (req, res)=> {
    res.render('template2', {
        title: 'Hey',
         message: 'Learner',
          content: 'Welcome to class',
            content2: '<br><br> <a href="/chris">NEXT</a>',
        })
})


// listeners
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});




