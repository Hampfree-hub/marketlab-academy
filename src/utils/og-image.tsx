import React from 'react';

// NES 8-bit color palette (matching Banner.astro styles)
const COLORS = {
	bgPrimary: '#050608',
	bgSecondary: '#0F1012',
	accentGreen: '#00D800',
	accentBlue: '#3CBCFC',
	accentYellow: '#F8E800',
	textPrimary: '#E5E5E5',
	textSecondary: '#B0B0B0',
	textTertiary: '#808080',
};

// Category background patterns (simplified for Satori)
const CATEGORY_COLORS: Record<string, string> = {
	'crypto': '#3CBCFC', // Blue
	'technical-analysis': '#00D800', // Green
	'algo-trading': '#00D800', // Green
	'fundamental-analysis': '#F8E800', // Yellow
	'general': '#00D800', // Green (default)
};

// Background patterns (simplified gradients for Satori)
const getBackgroundPattern = (category: string = 'general'): string => {
	const patterns: Record<string, string> = {
		'crypto': `linear-gradient(135deg, ${COLORS.bgPrimary} 0%, rgba(60, 188, 252, 0.1) 50%, ${COLORS.bgPrimary} 100%)`,
		'technical-analysis': `${COLORS.bgPrimary}`, // Solid with grid effect (simplified)
		'algo-trading': `linear-gradient(135deg, ${COLORS.bgPrimary} 0%, rgba(0, 216, 0, 0.1) 50%, ${COLORS.bgPrimary} 100%)`,
		'fundamental-analysis': `${COLORS.bgPrimary}`,
		'general': `${COLORS.bgPrimary}`,
	};
	return patterns[category] || patterns['general'];
};

interface OGImageProps {
	title: string;
	subtitle?: string;
	category?: string;
	rubric?: string;
}

export function OGImageComponent({ title, subtitle, category = 'general', rubric }: OGImageProps) {
	const bgPattern = getBackgroundPattern(category);
	const categoryColor = CATEGORY_COLORS[category] || CATEGORY_COLORS['general'];
	const displayRubric = rubric || category.toUpperCase();

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				background: bgPattern,
				padding: '60px',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Scanline overlay effect */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: `repeating-linear-gradient(
						0deg,
						rgba(0, 0, 0, 0.05),
						rgba(0, 0, 0, 0.05) 1px,
						transparent 1px,
						transparent 4px
					)`,
					pointerEvents: 'none',
					zIndex: 1,
				}}
			/>

			{/* Grid pattern for technical-analysis */}
			{category === 'technical-analysis' && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: `repeating-linear-gradient(
							0deg,
							transparent,
							transparent 15px,
							rgba(0, 216, 0, 0.02) 15px,
							rgba(0, 216, 0, 0.02) 16px
						),
						repeating-linear-gradient(
							90deg,
							transparent,
							transparent 15px,
							rgba(0, 216, 0, 0.02) 15px,
							rgba(0, 216, 0, 0.02) 16px
						)`,
						pointerEvents: 'none',
						zIndex: 1,
					}}
				/>
			)}

			{/* Content */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					zIndex: 2,
					flex: 1,
				}}
			>
				{/* Title */}
				<h1
					style={{
						fontSize: '72px',
						fontWeight: 'bold',
						color: COLORS.accentGreen,
						margin: '0 0 20px 0',
						lineHeight: 1.4,
						textTransform: 'uppercase',
						fontFamily: 'Press Start 2P',
					}}
				>
					{title}
				</h1>

				{/* Subtitle */}
				{subtitle && (
					<p
						style={{
							fontSize: '32px',
							fontWeight: 'bold',
							color: COLORS.accentBlue,
							margin: '0',
							opacity: 0.9,
							lineHeight: 1.5,
							fontFamily: 'JetBrains Mono',
							maxWidth: '900px',
						}}
					>
						{subtitle}
					</p>
				)}
			</div>

			{/* Bottom section: Category tag + Watermark */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					marginTop: '40px',
					paddingTop: '30px',
					borderTop: '2px solid rgba(255, 255, 255, 0.05)',
					zIndex: 2,
				}}
			>
				{/* Category tag */}
				<span
					style={{
						fontSize: '24px',
						fontWeight: 'bold',
						padding: '12px 24px',
						backgroundColor: categoryColor,
						color: COLORS.bgPrimary,
						border: `2px solid ${COLORS.bgPrimary}`,
						boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
						textTransform: 'uppercase',
						fontFamily: 'Press Start 2P',
						whiteSpace: 'nowrap',
					}}
				>
					[{displayRubric}]
				</span>

				{/* Watermark */}
				<span
					style={{
						fontSize: '20px',
						color: COLORS.textTertiary,
						opacity: 0.9,
						fontFamily: 'JetBrains Mono',
						fontWeight: 600,
						whiteSpace: 'nowrap',
					}}
				>
					MARKETLAB ACADEMY
				</span>
			</div>
		</div>
	);
}
