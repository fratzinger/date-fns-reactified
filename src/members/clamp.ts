import { clamp as _clamp } from "date-fns";
import { reactify } from "@vueuse/core";

export const clamp = reactify(_clamp);