"use client";

import type { SVGProps } from "react";
import { useId } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogoMinimal = (props: SVGProps<SVGSVGElement>) => {
    const id = useId();

    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={cx("size-8 shrink-0", props.className)}
        >
            <g filter={`url(#min_filter0_iii_${id})`}>
                <g clipPath={`url(#min_clip0_${id})`}>
                    <rect width="48" height="48" rx="12" fill="#4F46E5" />
                    <rect width="48" height="48" fill={`url(#min_paint0_linear_${id})`} />
                    <g filter={`url(#min_filter1_d_${id})`}>
                        <path
                            d="M10.5 10.5C18.1075 17.5803 29.8925 17.5803 37.5 10.5C30.4197 18.1075 30.4197 29.8925 37.5 37.5C29.8925 30.4197 18.1075 30.4197 10.5 37.5C17.5803 29.8925 17.5803 18.1075 10.5 10.5Z"
                            fill={`url(#min_paint1_linear_${id})`}
                        />
                    </g>
                </g>
                <rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#min_paint2_linear_${id})`} strokeWidth="2" />
            </g>
            <defs>
                <filter
                    id={`min_filter0_iii_${id}`}
                    x="0"
                    y="-3"
                    width="48"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow" />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow" />
                </filter>
                <filter
                    id={`min_filter1_d_${id}`}
                    x="7.5"
                    y="5.25"
                    width="33"
                    height="42"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                    <feOffset dy="2.25" />
                    <feGaussianBlur stdDeviation="2.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient
                    id={`min_paint0_linear_${id}`}
                    x1="24"
                    y1="0"
                    x2="26"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient
                    id={`min_paint1_linear_${id}`}
                    x1="24"
                    y1="10.5"
                    x2="24"
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                    id={`min_paint2_linear_${id}`}
                    x1="24"
                    y1="0"
                    x2="24"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.12" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id={`min_clip0_${id}`}>
                    <rect width="48" height="48" rx="12" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
