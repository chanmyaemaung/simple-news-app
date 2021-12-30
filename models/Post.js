const mongooose = require('mongoose')

const postSchema = new mongooose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a title'],
			unique: true,
			trim: true,
			maxlength: [255, 'Title can not be more than 50 characters'],
		},
		description: {
			type: String,
			required: [true, 'Please add a description'],
			trim: true,
		},
		image_link: { type: String, trim: true },
		upload_img: { type: String, trim: true },
		cloudinary_id: { type: String, trim: true },
		author_name: {
			type: String,
			required: [true, 'Please add a author name'],
			default: 'Anonymous',
			trim: true,
		},
	},
	{ timestamps: true, versionKey: false }
)

module.exports = mongooose.model('Post', postSchema)
