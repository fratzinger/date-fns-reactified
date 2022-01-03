import { subMilliseconds as _subMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subMilliseconds = reactify(_subMilliseconds);