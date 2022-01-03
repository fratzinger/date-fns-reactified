import { isFuture as _isFuture } from "date-fns";
import { reactify } from "@vueuse/core";

export const isFuture = reactify(_isFuture);