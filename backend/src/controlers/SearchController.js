const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module. exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000
                }
            }
        });


        return response.json({ devs });
    },

    async update(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        const dev = await Dev.findOneAndUpdate(
            {github_username : github_username},
            {
                techs: techsArray,
                location
            },
            { new : true }
        );

        return response.json({ dev });
    },

    async destroy(request, response) {
        const { github_username } = request.query;

        const dev = await Dev.findOneAndDelete(
            {github_username : github_username}
        );
        
        return response.json({ dev });
    }
}