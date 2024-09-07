import type { INodeProperties } from 'n8n-workflow';

export const resizeFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: '',
		description:
			'Public URL of the image file to resize. Use this field or `Image in Base64 Format`.',
	},
	{
		displayName: 'Image in Base64 Format',
		name: 'base64Image',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	},
	{
		displayName: 'Resize Strategy',
		name: 'strategy',
		type: 'options',
		options: [
			{ name: 'Resize', value: 10, description: 'Keep proportions' },
			{ name: 'Resize Exact', value: 20, description: 'Use exact width and height' },
			{ name: 'Scale', value: 30, description: 'Scale width and height as percentage' },
		],
		default: 10,
		required: true,
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		description: 'Strategy to resize the image',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: null,
		description:
			'Width of the image. If `Resize Strategy` is `Scale`, this will be considered as a percentage.',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: null,
		description:
			'Height of the image. If `Resize Strategy` is `Scale`, this will be considered as a percentage.',
	},
	{
		displayName: 'Remove Exif?',
		name: 'removeExif',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		description: 'Whether to remove Exif data from the image',
	},
	{
		displayName: 'Specify File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Custom file name for the resized image',
	},
	{
		displayName: 'Specify File Extension',
		name: 'fileExtension',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Custom file extension for the resized image',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resize'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
