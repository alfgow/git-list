function AlertTriangle({ size, color }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 89 89"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M38.1587 14.3142L6.74915 66.75C6.10156 67.8715 5.7589 69.143 5.75528 70.438C5.75165 71.7331 6.08718 73.0065 6.72848 74.1316C7.36979 75.2567 8.29451 76.1942 9.41065 76.851C10.5268 77.5077 11.7955 77.8608 13.0904 77.875H75.9096C77.2045 77.8608 78.4732 77.5077 79.5893 76.851C80.7055 76.1942 81.6302 75.2567 82.2715 74.1316C82.9128 73.0065 83.2483 71.7331 83.2447 70.438C83.2411 69.143 82.8984 67.8715 82.2508 66.75L50.8412 14.3142C50.1802 13.2243 49.2493 12.3233 48.1386 11.6979C47.0278 11.0725 45.7747 10.744 44.5 10.744C43.2253 10.744 41.9721 11.0725 40.8614 11.6979C39.7506 12.3233 38.8198 13.2243 38.1587 14.3142V14.3142Z"
				stroke={color}
				stroke-width="7.41667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M44.5 33.375V48.2083"
				stroke={color}
				stroke-width="7.41667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M44.5 63.0417H44.5366"
				stroke={color}
				stroke-width="7.41667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default AlertTriangle;
