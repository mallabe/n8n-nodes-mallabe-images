import type { INodeProperties } from 'n8n-workflow';

export const joinFields: INodeProperties[] = [
	{
		displayName: 'First Image URL',
		name: 'image1Url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Public URL of the first image file to join',
	},
	{
		displayName: 'Second Image URL',
		name: 'image2Url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Public URL of the second image file to join',
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		options: [
			{ name: 'Vertical', value: 'vertical' },
			{ name: 'Horizontal', value: 'horizontal' },
		],
		default: 'vertical',
		required: true,
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		description: 'Direction of the merged image',
	},
	{
		displayName: 'Images Alignment',
		name: 'align',
		type: 'options',
		options: [
			{ name: 'Start', value: 'start' },
			{ name: 'Center', value: 'center' },
			{ name: 'End', value: 'end' },
		],
		default: 'start',
		required: true,
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		description: 'Alignment of images. Relevant when the images are not the same size.',
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		description: 'Hex color code for the background',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				operation: ['join'],
				resource: ['image'],
			},
		},
		description: 'Offset in pixels between each image',
	},
	{
		displayName: 'Download Image?',
		name: 'download',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['join'],
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
				operation: ['join'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
