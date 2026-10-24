"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

export const UntitledLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-max items-center justify-start gap-2.5", props.className)}>
            {/* Minimal Funui Studio logo mark */}
            <UntitledLogoMinimal className="aspect-square h-full w-auto shrink-0" />
            {/* Brand text */}
            <span className="text-xl font-bold tracking-tight text-fg-primary">Funui Studio</span>
        </div>
    );
};
