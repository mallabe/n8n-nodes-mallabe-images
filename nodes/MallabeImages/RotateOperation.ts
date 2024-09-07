import type { INodeProperties } from 'n8n-workflow';

export const rotateFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['rotate'],
				resource: ['image'],
			},
		},
		default: '',
		description:
			'Public URL of the image file to rotate. Use this field or `Image in Base64 Format`.',
	},
	{
		displayName: 'Image in Base64 format',
		name: 'base64Image',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['rotate'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	},
	{
		displayName: 'Rotation Angle',
		name: 'angle',
		type: 'number',
		default: null,
		required: true,
		displayOptions: {
			show: {
				operation: ['rotate'],
				resource: ['image'],
			},
		},
		description: 'Defines the angle of rotation.',
	},
	{
		displayName: 'Image Background Color',
		name: 'backgroundColor',
		type: 'string',
		default: '#000000',
		required: false,
		displayOptions: {
			show: {
				operation: ['rotate'],
				resource: ['image'],
			},
		},
		description: 'Apply a different background color.',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['rotate'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation.',
	},
];
