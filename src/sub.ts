import { sub as _sub } from "date-fns";
import { reactify } from "@vueuse/core";

export const sub = reactify(_sub);