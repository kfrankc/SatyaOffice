'use strict';

var randomArray = [
    {
        "url":"http://satya-quote.azurewebsites.net/audio/democratize.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/dreams.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/edu_opportunities.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/future_jobs.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/great_grandfather.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/learn_from_students.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/motto.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/student_create.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/success.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/team_learning.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/teamwork.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/tech_help.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/tech_amplify.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/tech_create.mp3"
    },
    {
        "url":"http://satya-quote.azurewebsites.net/audio/tech_transform_education.mp3"
    }
]
exports.randomUrl = function(req, res) {
    var item = randomArray[Math.floor(Math.random()*randomArray.length)];
    res.send(item.url);
};
