import { intervalToDuration as _intervalToDuration } from "date-fns";
import { reactify } from "@vueuse/shared";

export const intervalToDuration = reactify(_intervalToDuration);