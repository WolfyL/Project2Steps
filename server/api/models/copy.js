import mongoose from 'mongoose';

import token from '../token.js';
import User from './user.js';




const copySchema = new mongoose.Schema({


    gifId: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    url: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }



});



let model = mongoose.model('Copy', copySchema);

export default class Copy {

    create(req, res) {
        console.log("create", req.body);
        model.create(req.body,
            (err, copy) => {
                if (err) {
                    res.status('nope').send(err.message);
                } else {
                    res.json(copy);
                }
            });
    }


    findAll(req, res) {
        model.find({}, {
            password: 0
        }, (err, copys) => {
            if (err || !copys) {
                res.sendStatus(403);
            } else {

                res.json(copys);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0,
            copy: function(copy) {

                copy = copy.sort(compare);
                return copy.reverse();
            }
        }, (err, user) => {
            if (err || !copy) {
                res.sendStatus(403);
            } else {


                res.json(copy);
            }
        });
    }


    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, copy) => {
            if (err || !copy) {
                res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(user, token, {
                    expiresIn: "24h"
                });
                res.json({
                    success: true,
                    copy: copy,
                    token: tk
                });
            }
        });
    }
    copyUpdate(req, res) {
        console.log("haha", req.query.gif);
        model.findByIdAndUpdate({
            _id: req.params.id,
        }, req.body, (err, copy) => {
            if (err || !copy) {
                res.status('nop').send(err.message);
            } else {

                res.json(copy);
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
