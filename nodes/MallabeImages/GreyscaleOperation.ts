import type { INodeProperties } from 'n8n-workflow';

export const greyscaleFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		required: false,
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
		displayName: 'Image in Base64 format',
		name: 'base64Image',
		type: 'string',
		required: false,
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
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['greyscale'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation.',
	},
];
