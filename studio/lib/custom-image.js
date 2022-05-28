export default ({ hasDisplayOptions = true, ...props } = {}) => {
  const crops = [
		{ title: "Originali", value: 0 },
		{ title: "1 : 1 (quadrato)", value: 1 },
		{ title: "3 : 4", value: 3 / 4 },
		{ title: "5 : 7", value: 5 / 7 },
		{ title: "4 : 6", value: 4 / 6 },
		{ title: "16 : 9 (video)", value: 16 / 9 },
  ];

  return {
		title: "Foto",
		name: "photo",
		type: "image",
		options: {
			hotspot: true,
		},
		fields: [
			...(hasDisplayOptions
				? [
						{
							title: "Proporzioni",
							name: "customRatio",
							type: "number",
							options: {
								isHighlighted: true,
								list: crops,
							},
							validation: (Rule) => {
								return Rule.custom((field, context) =>
									"asset" in context.parent && field === undefined
										? "Necessario!"
										: true
								);
							},
						},
				  ]
				: []),
			{
				title: "Testo alternativo",
				name: "alt",
				type: "string",
				description: "Importante per la SEO e per l'accessibilità.",
			},
		],
		preview: {
			select: {
				asset: "asset",
				alt: "asset.alt",
				customAlt: "alt",
				customRatio: "customRatio",
			},
			prepare({ alt, customAlt, customRatio, asset }) {
				const crop = crops.find((crop) => crop.value === customRatio);

				return {
					title: customAlt ?? alt ?? "(testo alternativo mancante)",
					subtitle: crop.title,
					media: asset,
				};
			},
		},
		...props,
  };
}
