import type { INodeProperties } from 'n8n-workflow';

export const metadataFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['metadata'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Public URL of the image file to extract metadata from.',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['metadata'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation.',
	},
];
