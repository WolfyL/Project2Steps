import mongoose from 'mongoose';

const gifSchema = new mongoose.Schema({
    value: {
        gif: {type: String, unique: true},
        like: [{user :{type: String, unique: true}, copy: [{type:Date, default: Date.now}]}],
        dislike: [{user :{type: String, unique: true}, copy: [{type:Date, default: Date.now}]}],
        
    }
});

let model = mongoose.model('Gif', gifSchema);

export default class Gif {

    findAll(req, res) {
        model.find({}, (err, gifs) => {
            if (err || !gifs) {
                res.sendStatus(403);
            } else {
                res.json(gifs);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, gif) => {
            if (err || !gif) {
                res.sendStatus(403);
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

    update(req, res) {
        model.findByIdAndUpdate(req.params.id, req.body, (err, gif) => {
            if (err || !gif) {
                res.status(500).send(err.message);
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
