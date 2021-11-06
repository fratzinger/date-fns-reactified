import { subMilliseconds as _subMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const subMilliseconds = reactify(_subMilliseconds);