import mongoose from 'mongoose';

const gifSchema = new mongoose.Schema({
        gif: {
            type: String,
        },
        like: [{
            user: {
                type: String
            }
        }],
        dislike: [{
            user: {
                type: String
            }
        }]
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

    findById(req, res) {
        model.findOneAndUpdate({gif:req.params.id},{gif:req.params.id},{upsert:true}, (err, gif) => {
          console.log(gif, err);
            if (err || !gif) {
                res.send('Nope!');
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
        model.update({gif:req.params.id}, req.body, (err, gif)=> {
          console.log(req);
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
