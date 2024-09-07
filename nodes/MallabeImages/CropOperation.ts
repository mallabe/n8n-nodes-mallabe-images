import type { INodeProperties } from 'n8n-workflow';

export const cropFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		default: '',
		// description:
		// 	'Public URL of the image file to blur. Use this field or `Image in Base64 Format`.',
	},
	// {
	// 	displayName: 'Image in Base64 Format',
	// 	name: 'base64Image',
	// 	type: 'string',
	// 	displayOptions: {
	// 		show: {
	// 			operation: ['blur'],
	// 			resource: ['image'],
	// 		},
	// 	},
	// 	default: '',
	// 	description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	// },
	{
		displayName: 'Gravity',
		name: 'gravity',
		type: 'options',
		options: [
			{ name: 'Manual', value: 10, description: 'Manual cropping' },
			{ name: 'Center', value: 20, description: 'Crop from center' },
			{ name: 'Top', value: 30, description: 'Crop from top' },
			{ name: 'Left', value: 40, description: 'Crop from left' },
			{ name: 'Bottom', value: 50, description: 'Crop from bottom' },
			{ name: 'Right', value: 60, description: 'Crop from right' },
			{ name: 'Top-Left', value: 70, description: 'Crop from top-left' },
			{ name: 'Top-Right', value: 80, description: 'Crop from top-right' },
			{ name: 'Bottom-Left', value: 90, description: 'Crop from bottom-left' },
			{ name: 'Bottom-Right', value: 100, description: 'Crop from bottom-right' },
		],
		default: 20,
		required: true,
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		description: 'Defines the pivot point from which to start cropping',
	},
	{
		displayName: 'Crop Width',
		name: 'width',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		default: null,
		description: 'Width of the region to crop. Can be by pixels or percentage.',
	},
	{
		displayName: 'Crop Height',
		name: 'height',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		default: null,
		description: 'Height of the region to crop. Can be by pixels or percentage.',
	},
	{
		displayName: 'Left (X Axis)',
		name: 'x',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
				gravity: [10],
			},
		},
		default: null,
		description: 'Offset from the left edge. Relevant only when gravity is set to `manual`.',
	},
	{
		displayName: 'Top (Y Axis)',
		name: 'y',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
				gravity: [10],
			},
		},
		default: null,
		description: 'Offset from the top edge. Relevant only when gravity is set to `manual`.',
	},
	{
		displayName: 'Download Image?',
		name: 'download',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		default: false,
		description: 'Whether to download the Image or return a link to it',
	},
	{
		displayName: 'Put Output File In Field',
		name: 'output',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
				download: [true],
			},
		},
		default: 'data',
		description: 'The name of the output field to put the binary file data in',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['crop'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
