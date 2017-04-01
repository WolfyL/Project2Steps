import mongoose from 'mongoose';
import User from './user.js';

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const gifSchema = new mongoose.Schema({

    gif: {
        type: String,
    },
    like: [likeSchema],
    dislike: [likeSchema]
});


let model = mongoose.model('Gif', gifSchema);


export default class Gif {

    findAll(req, res) {
        model.find({}, (err, gifs) => {
            if (err || !gifs) {
                res.send('Nope!');
            } else {
                res.json(gifs);
            }
        });
    }
    findUser(req, res) {

        console.log('find',req.query);
        model.findOne({gif: req.query.gif}, (err, gif) => {
          console.log();
            if (err || !gif) {
              console.log("gif non trouvé");
                res.status(404);
            } else {
              console.log("gif trouvé", gif);

                res.json(
                   gif.like.some( user => user.user == req.query.user ) || gif.dislike.some( user => user.user == req.query.user )
                );
            }
        });
    }

    findById(req, res) {

        model.findOneAndUpdate({
            gif: req.params.id
        }, {
            gif: req.params.id
        }, {
            upsert: true
        }, (err, gif) => {
            if (err || !gif) {
                res.send(gif);
            } else {
                res.json(gif);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, gif) => {
                if (err || !gif) {
                    res.status(500).send(err.message);
                } else {
                    res.json(gif);
                }
            });
    }

    likeUpdate(req, res) {
      let like = req.body;
        model.findOneAndUpdate({
            gif: req.params.id
        }, {$push: {like: {user : req.body.user}}}, (err, gif) => {
            console.log("like", like.id, req.params.id);
            if (err || !gif) {
                res.status("nope").send(err.message);
            } else {
                res.json(gif);
            }
        });
    }
    dislikeUpdate(req, res) {
      let like = req.body;
        model.findOneAndUpdate({
            gif: req.params.id
        }, {$push: {dislike: {user : req.body.user}}}, (err, gif) => {
            console.log("like", like, req.params.id);
            if (err || !gif) {
                res.status("nope").send(err.message);
            } else {
                res.json(gif);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
