import type { INodeProperties } from 'n8n-workflow';

export const greyscaleFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['greyscale'],
				resource: ['image'],
			},
		},
		default: '',
		description:
			'Public URL of the image file to convert to greyscale. Use this field or `Image in Base64 Format`.',
	},
	{
		displayName: 'Image in Base64 Format',
		name: 'base64Image',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['greyscale'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	},
	{
		displayName: 'Download Image?',
		name: 'download',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['greyscale'],
				resource: ['image'],
			},
		},
		default: false,
		description: 'Whether to download the Image or return a link to it',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['greyscale'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
