import { isFuture as _isFuture } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isFuture = reactify(_isFuture);