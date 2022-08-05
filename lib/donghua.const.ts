import { DefaultProps, FadeIn, FadeOut } from "./donghua.type";

export const fadeInDefaultProps: DefaultProps<FadeIn> = {
  fadeIn: {
    duration: "",
    timingFunction: "",
    delay: "",
  },
};

export const fadeOutDefaultProps: DefaultProps<FadeOut> = {
  fadeOut: {
    duration: "",
    timingFunction: "",
    delay: "",
  },
};

export const defaultProps = { ...fadeInDefaultProps, ...fadeOutDefaultProps };
