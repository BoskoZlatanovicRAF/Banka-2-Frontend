import * as React from "react"
import {cn} from "@/lib/utils.ts";

const PiggyBank = ({className, ...props}: React.ComponentProps<"svg">) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn("antialiased", className)} viewBox="0 0 500 500" {...props}>
        <defs>
            <clipPath id="a">
                <path
                    d="m144.23 420.82 12.62 37.86a5.15 5.15 0 0 0 4.89 3.52h19.67a5.14 5.14 0 0 0 4.73-3.11l8.8-20.42"
                    style={{
                        fill: "var(--primary)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
            <clipPath id="b">
                <path
                    d="m280.94 420.82-12.62 37.86a5.15 5.15 0 0 1-4.89 3.52h-19.67a5.14 5.14 0 0 1-4.73-3.11l-8.8-20.42"
                    style={{
                        fill: "var(--primary)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
            <clipPath id="c">
                <ellipse
                    cx={213.5}
                    cy={347.63}
                    rx={108.17}
                    ry={98.1}
                    style={{
                        fill: "var(--primary)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
            <clipPath id="d">
                <path
                    d="m179.76 433 11 26.1a5.16 5.16 0 0 0 4.75 3.15h20a5.17 5.17 0 0 0 4.73-3.1l12-27.73h-.52"
                    style={{
                        fill: "var(--primary)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
            <clipPath id="e">
                <path
                    d="m379 26.44-55.31 79.69s-4.73 11.28-10.55 19.65S291 142.52 291 142.52s-1.45 15.64-6.18 21.1-14.92 2.19-14.92 2.19-4.37 4.73-9.1 6.91-19.28-5.82-19.28-5.82 13.09 14.19 14.91 18.92 5.1 8.73-.72 13.1-12.38-1.82-12.38-1.82 2.92 9.46-5.45 11.28-17.49-16.38-21.13-22.56-14.19-29.48-16-30.57-4.36-6.91-.72-12.37 29.46-40.39 32.37-42.88S291 84.3 291 84.3l21.11-58.22"
                    style={{
                        fill: "var(--background)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
            <clipPath id="f">
                <path
                    d="M222.57 129.05s4.37 6.55 5.1 12.38a21.16 21.16 0 0 1-3.28 14.19c-2.18 3.27-4.36 6.18-6.18 11.28s-2.18 12.37-4.73 16-4 7.27-.37 10.55 13.1 2.91 18.2-6.55 8.37-19.65 11.64-23.29 13.83-12 13.83-12 28.74-4 34.2-9.09 10.19-18.92 10.19-18.92"
                    style={{
                        fill: "var(--background)",
                        stroke: "var(--muted)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </clipPath>
        </defs>
        <path
            d="M165.19 59.92S89.42 98.52 51.63 158s-34.8 136 11.12 192.8 133.69 49.34 207.18 85.32 154.57 28.57 189.32-47.66-17.65-104.72-26.65-192.94-88.53-217.4-267.41-135.6Z"
            style={{
                fill: "var(--primary)",
            }}
        />
        <path
            d="M165.19 59.92S89.42 98.52 51.63 158s-34.8 136 11.12 192.8 133.69 49.34 207.18 85.32 154.57 28.57 189.32-47.66-17.65-104.72-26.65-192.94-88.53-217.4-267.41-135.6Z"
            style={{
                fill: "var(--background)",
                opacity: 0.7000000000000001,
            }}
        />
        <path
            d="M388.25 405.73S345.67 331 355.5 311.94s34.93 15.21 34.93 15.21-21.83-69.7-9.82-100.15 32.75 0 33.84 21.55-4.37 58.3-4.37 58.3 8.74-76 29.48-53.23-26.2 98.85-26.2 98.85 31.66-17.74 30.56 5.07-38.2 43.09-38.2 43.09"
            style={{
                fill: "var(--primary)",
            }}
        />
        <path
            d="M388.61 391.79s-39.4-36.76-20.2-53.23 29.3 17.74 29.3 17.74-21.22-105.19 13.13-109 9.09 91.25 9.09 91.25 29.3-40.55 27.28-7.55-45.46 60.84-45.46 60.84M407.96 385.1l-26.62-28.85M402.42 387.32l7.21-84.33M401.31 381.21l23.85-31.62"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeMiterlimit: 10,
            }}
        />
        <path
            d="M435.81 375.33h-73.65l7.37 86.87h58.91l7.37-86.87z"
            style={{
                fill: "var(--muted)",
            }}
        />
        <path
            d="M154.65 274.59a224.56 224.56 0 0 0-29.62-12c-14.62-4.5-31.87-.38-32.25 4.49s2.22 2.64 5.63 7.92 1.87 17.62 6.75 28.87 19.49 16.87 19.49 16.87Z"
            style={{
                fill: "var(--primary)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M144.9 285.47s-22.5-14.25-35.62-19.13-13.87 2.25-13.87 2.25a10.89 10.89 0 0 1 7.13 10.63c0 8.42 4.21 25.86 14.44 29.46s27.92-23.21 27.92-23.21Z"
            style={{
                opacity: 0.30000000000000004,
            }}
        />
        <ellipse
            cx={301.1}
            cy={289.96}
            rx={11.39}
            ry={12.23}
            style={{
                fill: "var(--primary)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
            transform="rotate(-20.8 301.1 289.952)"
        />
        <path
            d="m144.23 420.82 12.62 37.86a5.15 5.15 0 0 0 4.89 3.52h19.67a5.14 5.14 0 0 0 4.73-3.11l8.8-20.42"
            style={{
                fill: "var(--primary)",
            }}
        />
        <g
            style={{
                clipPath: "url(#a)",
            }}
        >
            <path
                d="M150.56 420.82 161 458.68a4.43 4.43 0 0 0 4.06 3.52h16.31a4.31 4.31 0 0 0 3.92-3.11l7.3-20.42"
                style={{
                    opacity: 0.30000000000000004,
                }}
            />
        </g>
        <path
            d="m144.23 420.82 12.62 37.86a5.15 5.15 0 0 0 4.89 3.52h19.67a5.14 5.14 0 0 0 4.73-3.11l8.8-20.42"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m239.15 420.82-12.61 37.86a5.15 5.15 0 0 1-4.89 3.52H202a5.14 5.14 0 0 1-4.73-3.11l-8.8-20.42"
            style={{
                fill: "var(--muted)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m280.94 420.82-12.62 37.86a5.15 5.15 0 0 1-4.89 3.52h-19.67a5.14 5.14 0 0 1-4.73-3.11l-8.8-20.42"
            style={{
                fill: "var(--primary)",
            }}
        />
        <g
            style={{
                clipPath: "url(#b)",
            }}
        >
            <path
                d="m272 420.82-8.63 37.86c-.48 2.1-1.82 3.52-3.34 3.52h-13.45c-1.4 0-2.67-1.22-3.23-3.11l-8.36-20"
                style={{
                    opacity: 0.30000000000000004,
                }}
            />
        </g>
        <path
            d="m280.94 420.82-12.62 37.86a5.15 5.15 0 0 1-4.89 3.52h-19.67a5.14 5.14 0 0 1-4.73-3.11l-8.8-20.42"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <ellipse
            cx={213.5}
            cy={347.63}
            rx={108.17}
            ry={98.1}
            style={{
                fill: "var(--primary)",
            }}
        />
        <g
            style={{
                clipPath: "url(#c)",
            }}
        >
            <path
                d="M288 280.6a90.11 90.11 0 0 1 9.65 40.56c0 54.18-48.43 98.1-108.17 98.1a115.37 115.37 0 0 1-62.75-18.18c18.86 25.31 50.79 42 87 42 58 0 105-42.61 105-95.18-.06-26.31-11.8-50.08-30.73-67.3Z"
                style={{
                    opacity: 0.30000000000000004,
                }}
            />
        </g>
        <ellipse
            cx={213.5}
            cy={347.63}
            rx={108.17}
            ry={98.1}
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M312.57 356.43c-2.36 19.76-11.47 37.69-25.19 51.85M310.78 326a86.13 86.13 0 0 1 2.4 20.21"
            style={{
                fill: "none",
                stroke: "var(--primary)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <path
            d="M186.68 255.65a118.84 118.84 0 0 1 27.19-3.12 120.08 120.08 0 0 1 17.51 1.28"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 4,
            }}
        />
        <path
            d="M234.72 324.13s10.5-7.13 10.88-20.25-16.88-32.24-30.75-40.12-24-6.37-24.37-.75-5.25 12-7.12 22.87-2.63 27 12 32.25"
            style={{
                fill: "var(--primary)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m212.13 319.92 2.15.32c9.22 1.33 12.46-4.69 12.19-13.73-.37-12.75-17.24-39.75-24.37-43.5s-9.37 1.5-9.37 1.5 1 .67-2.51 12.32c-1.62 5.38-7.65 24.14-1.68 32.46 5.28 7.35 15.09 9.36 23.59 10.63ZM242 307h-.14a1 1 0 0 1-.86-1.13 20 20 0 0 0 .19-2.32c.2-7-5.51-17.05-14.9-26.32a1 1 0 1 1 1.41-1.43c9.92 9.8 15.71 20.19 15.49 27.8a23.93 23.93 0 0 1-.2 2.54 1 1 0 0 1-.99.86ZM236.62 319.06a1 1 0 0 1-.78-1.63 24.58 24.58 0 0 0 3.9-6.72 1 1 0 1 1 1.87.71 26.46 26.46 0 0 1-4.22 7.27 1 1 0 0 1-.77.37Z"
            style={{
                opacity: 0.30000000000000004,
            }}
        />
        <ellipse
            cx={135.41}
            cy={359.5}
            rx={22.12}
            ry={29.25}
            style={{
                opacity: 0.30000000000000004,
            }}
            transform="rotate(-75.99 135.433 359.51)"
        />
        <ellipse
            cx={134}
            cy={357.35}
            rx={22.12}
            ry={29.25}
            style={{
                fill: "var(--primary)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
            transform="rotate(-75.99 134.023 357.357)"
        />
        <path
            d="M125.18 353.8c.18 2.68-.85 4.94-2.29 5s-2.77-2-3-4.68.85-4.95 2.3-5 2.81 1.99 2.99 4.68ZM145 358.77c.18 2.69-.85 4.94-2.29 5s-2.77-2-3-4.69.85-4.94 2.3-5 2.78 2 2.99 4.69Z"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M177.71 365.72a23.31 23.31 0 0 1-1.34 5.63c-5.74 15.51-26.52 22.22-47.05 15.54M174.36 364.25h6.37"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3,
            }}
        />
        <path
            d="M133.78 322.73c-.7 2.91-2.49 5-4 4.62s-2.17-3-1.46-5.94 2.49-5 4-4.63 2.17 3.03 1.46 5.95Z"
            style={{
                fill: "var(--muted)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <ellipse
            cx={149.5}
            cy={326.09}
            rx={5.44}
            ry={2.81}
            style={{
                fill: "var(--muted)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
            transform="rotate(-76.45 149.497 326.097)"
        />
        <path
            d="m179.76 433 11 26.1a5.16 5.16 0 0 0 4.75 3.15h20a5.17 5.17 0 0 0 4.73-3.1l12-27.73h-.52"
            style={{
                fill: "var(--primary)",
            }}
        />
        <g
            style={{
                clipPath: "url(#d)",
            }}
        >
            <path
                d="M203 429.67c-6.34 0-13.72.83-19.69-.55l10.28 29.93a4.33 4.33 0 0 0 3.93 3.15H214a4.31 4.31 0 0 0 3.9-3.1l9.95-30.53-4 .55c-12.69 1.38-12.36.55-20.85.55Z"
                style={{
                    opacity: 0.30000000000000004,
                }}
            />
        </g>
        <path
            d="m179.76 433 11 26.1a5.16 5.16 0 0 0 4.75 3.15h20a5.17 5.17 0 0 0 4.73-3.1l12-27.73h-.52"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m379 26.44-55.31 79.69s-4.73 11.28-10.55 19.65S291 142.52 291 142.52s-1.45 15.64-6.18 21.1-14.92 2.19-14.92 2.19-4.37 4.73-9.1 6.91-19.28-5.82-19.28-5.82 13.09 14.19 14.91 18.92 5.1 8.73-.72 13.1-12.38-1.82-12.38-1.82 2.92 9.46-5.45 11.28-17.49-16.38-21.13-22.56-14.19-29.48-16-30.57-4.36-6.91-.72-12.37 29.46-40.39 32.37-42.88S291 84.3 291 84.3l21.11-58.22"
            style={{
                fill: "var(--background)",
            }}
        />
        <g
            style={{
                clipPath: "url(#e)",
            }}
        >
            <path
                d="M318 107s-6 18-12.5 21.5-43.5 13-58 11S225 132 225 132s-8 10.5-11.5 14a22.93 22.93 0 0 1-8.5 5s17.4 43.71 29.91 57.24a6 6 0 0 0 3 .14c8.37-1.82 5.45-11.28 5.45-11.28s6.55 6.18 12.38 1.82 2.54-8.37.72-13.1-14.96-18.92-14.96-18.92 14.55 8 19.28 5.82 9.1-6.92 9.1-6.92 10.19 3.28 14.92-2.18 6.18-21.1 6.18-21.1 16.37-8.37 22.2-16.74 10.55-19.65 10.55-19.65l22.79-32.83Z"
                style={{
                    opacity: 0.2,
                }}
            />
        </g>
        <path
            d="m379 26.44-55.31 79.69s-4.73 11.28-10.55 19.65S291 142.52 291 142.52s-1.45 15.64-6.18 21.1-14.92 2.19-14.92 2.19-4.37 4.73-9.1 6.91-19.28-5.82-19.28-5.82 13.09 14.19 14.91 18.92 5.1 8.73-.72 13.1-12.38-1.82-12.38-1.82 2.92 9.46-5.45 11.28-17.49-16.38-21.13-22.56-14.19-29.48-16-30.57-4.36-6.91-.72-12.37 29.46-40.39 32.37-42.88S291 84.3 291 84.3l21.11-58.22"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m189.83 238.94 1.45 5.46 22.56-5.46 21.11-55.31-13.83-4.73-31.29 60.04z"
            style={{
                fill: "var(--background)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m196.74 165.44 31.29 11.65-15.28 69.13L176 234.94l20.74-69.5z"
            style={{
                fill: "var(--background)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="m177.23 230.81 32.61 9.59 14.19-61.5-28.57-9.18-18.23 61.09z"
            style={{
                fill: "var(--primary)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M195.33 184.93a10.31 10.31 0 0 0-4.35-.2l-8.52 28.55a10.21 10.21 0 0 0 4.41 2.53c6.68 1.84 14-3.59 16.34-12.12s-1.21-16.93-7.88-18.76Z"
            style={{
                fill: "var(--background)",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M194.12 189.66a.21.21 0 0 1-.12-.23l.38-1.48a.44.44 0 0 0-.36-.59l-1.59-.38a.43.43 0 0 0-.59.36l-.31 1.53a.2.2 0 0 1-.21.15 8 8 0 0 0-1.63 0l-2.91 9.77c2.27 2.36 5.81 3.54 5.34 5.52-.27 1.12-1.29 2-3.08 1.6a2.63 2.63 0 0 1-2.18-3.33l.09-.4c.05-.22-.08-.4-.39-.47l-.61-.15-1.73 5.78a7.18 7.18 0 0 0 2.39 1.44.21.21 0 0 1 .12.24l-.36 1.27a.42.42 0 0 0 .36.59l1.65.4a.43.43 0 0 0 .62-.28l.27-1.26a.23.23 0 0 1 .22-.16c3.52.37 5.91-1.36 6.65-4.44.58-2.46-.25-4.55-2.82-6.52-2.35-1.78-4.83-2.66-4.4-4.48.3-1.26 1.45-1.84 3-1.47a2.69 2.69 0 0 1 2.13 3.49l-.07.28c0 .17.1.32.41.4l2.93.7a.44.44 0 0 0 .59-.36l.22-.93c.67-2.93-.74-5.42-4.01-6.59Z"
            style={{
                fill: "var(--muted)",
            }}
        />
        <path
            d="M222.57 129.05s4.37 6.55 5.1 12.38a21.16 21.16 0 0 1-3.28 14.19c-2.18 3.27-4.36 6.18-6.18 11.28s-2.18 12.37-4.73 16-4 7.27-.37 10.55 13.1 2.91 18.2-6.55 8.37-19.65 11.64-23.29 13.83-12 13.83-12 28.74-4 34.2-9.09 10.19-18.92 10.19-18.92"
            style={{
                fill: "var(--background)",
            }}
        />
        <g
            style={{
                clipPath: "url(#f)",
            }}
        >
            <path
                d="M299 128.5s-15.5 10-27.5 13-19.5 3-24 9-9 25-15 28.5-7-9-15.5-6.5l-.28.1c-.83 3.9-1.56 7.9-3.24 10.31-2.55 3.64-4 7.27-.37 10.55s13.1 2.91 18.2-6.55 8.37-19.65 11.64-23.29 13.83-12 13.83-12 28.74-4 34.2-9.09c3.3-3.08 6.33-9.34 8.21-13.82Z"
                style={{
                    opacity: 0.2,
                }}
            />
        </g>
        <path
            d="M222.57 129.05s4.37 6.55 5.1 12.38a21.16 21.16 0 0 1-3.28 14.19c-2.18 3.27-4.36 6.18-6.18 11.28s-2.18 12.37-4.73 16-4 7.27-.37 10.55 13.1 2.91 18.2-6.55 8.37-19.65 11.64-23.29 13.83-12 13.83-12 28.74-4 34.2-9.09 10.19-18.92 10.19-18.92"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            d="M211.29 147.25s9.47 5.09 16.38-.73M243.31 197.1l-8.36-16.01M269.88 165.81s6.55-5.46 6.18-17.47M71 462.2h396M36 462.2h18"
            style={{
                fill: "none",
                stroke: "var(--muted)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
    </svg>
)
export default PiggyBank
