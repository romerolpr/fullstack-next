export const AvatarColor = ({ title, width, height, color = "#007bff", dy = ".3em" }) => (
    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width={width} height={height} role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>{title}</title>
        <rect width="100%" height="100%" fill={color}/>
        <text x="50%" y="50%" fill={color} dy={dy}>{`${width}x${height}`}</text>
    </svg>
)