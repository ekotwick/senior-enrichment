'use strict';
const campuses = require('express').Router();
const Campus = require('../db').Campus;
const Student = require('../db').Student;

const errors = function(str, code) {
	const err = new Error(str);
	err.status = code;
	throw err;
};
const invalidId = 'Invalid campus id';
const noCampuses = 'No campuses found';

campuses.param('id', (req, res, next, id) => {
	if (id.match(/\D/g)) errors(invalidId, 500);
	Campus.findById({
		where: {
			id: id,
		},
		include: [ Student ]
	})
		.then(foundCampus => {
			if (!foundCampus) errors(noCampuses, 404);
			req.campus = foundCampus;
			next();
		}) 
		.catch(next);
});

campuses.get('/', (req, res, next) => {
	Campus.findAll({
		include: [ Student ]
	})
		.then(foundCampuses => {
			if (!foundCampuses) errors(noCampuses, 404);
			else res.json(foundCampuses);
		})
		.catch(next);
});

campuses.post('/', (req, res, next) => {
	Campus.create(req.body)
		.then(created => res.status(201).json(created))
		.catch(next);
});

campuses.get('/:id', (req, res, next) => {
	res.json(req.campus);
});

campuses.put('/:id', (req, res, next) => {
	req.campus.update(req.body)
		.then(updated => res.json(updated))
		.catch(next);
});

campuses.delete('/:id', (req, res, next) => {
	req.campus.destroy()
		.then(() => res.status(204))
		.catch(next);
});

module.exports = campuses; 