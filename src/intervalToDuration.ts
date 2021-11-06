import { intervalToDuration as _intervalToDuration } from "date-fns";
import { reactify } from "@vueuse/core";

export const intervalToDuration = reactify(_intervalToDuration);