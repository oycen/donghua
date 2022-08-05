export interface DH {
  name: string;
}

export interface FadeIn extends DH {
  name: "fadeIn";
  duration?: number | string;
  timingFunction?: string;
  delay?: number | string;
}

export interface FadeOut {
  name: "fadeOut";
  duration?: number | string;
  timingFunction?: string;
  delay?: number | string;
}

export type DongHuaIn = FadeIn;
export type DongHuaOut = FadeOut;

export type DongHuaInName = DongHuaIn["name"];
export type DongHuaOutName = DongHuaOut["name"];

export type DongHua = DongHuaIn | DongHuaOut;
export type DongHuaName = DongHua["name"];

export type DefaultProps<D extends DH> = Record<D["name"], Omit<D, "name">>;
