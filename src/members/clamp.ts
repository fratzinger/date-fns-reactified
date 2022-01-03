import { clamp as _clamp } from "date-fns";
import { reactify } from "@vueuse/shared";

export const clamp = reactify(_clamp);