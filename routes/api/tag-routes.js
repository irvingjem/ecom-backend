const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags
    Tag.findAll({
            // be sure to include its associated Product data
            include: [Product, ProductTag]
        }).then(tagData => res.json(tagData))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    Tag.findOne({
            // be sure to include its associated Product data
            include: [Product, ProductTag]
        }).then(tag => {
            if (!tag) {
                res.status(404).json({ message: 'No existing tag' });
                return
            }
            res.json(tag);
        })
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    Tag.create(req.body)
        .then(newTag => res.json(newTag))
        .catch(err => res.status(400).json(err));
});


router.put('/:id', (req, res) => {
    Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(updatedTag => {
            if (!updatedTag) {
                res.status(404).json({ message: 'No existing tag with this given ID.' });
                return
            }
            res.json(updatedTag);
        })
        .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
    Tag.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(tag => {
            if (!tag) {
                res.status(404).json({ message: 'No existing tag with this given ID.' })
            }
            res.json(tag);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;